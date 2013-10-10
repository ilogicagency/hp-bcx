const REV = 6,
       USER_AGENT = navigator.userAgent.toLowerCase();

//    SCREEN_WIDTH = window.innerWidth,
//    SCREEN_HEIGHT = window.innerHeight,

var SCREEN_WIDTH = 1920,
    SCREEN_HEIGHT = 1080,
    COLOR = [0, 0, 0],
    BACKGROUND_COLOR = [255, 255, 255],
    STORAGE = null,
    innerContainer,
    brush,
    saveTimeOut,
    wacom,
    i,
    mouseX = 0,
    mouseY = 0,
    container,
    foregroundColorSelector,
    backgroundColorSelector,
    menu,
    timer,
    about,
    canvas,
    overlay,
    tools,
    toolbox,
    savingPopup,
    imgSaving,
    imgGif,
    flattenCanvas,
    context,
    isFgColorSelectorVisible = false,
    isBgColorSelectorVisible = false,
    isAboutVisible = false,
    isMenuMouseOver = false,
    shiftKeyIsDown = false,
    altKeyIsDown = false,
	brushSizeTouchStart = 1,
	brushSizeTouchReference = 0.0;

init();

function init()
{
	var hash, palette, embed, localStorageImage;
	
	if (USER_AGENT.search("android") > -1 || USER_AGENT.search("iphone") > -1)
		BRUSH_SIZE = 2;	
		
	if (USER_AGENT.search("safari") > -1 && USER_AGENT.search("chrome") == -1) // Safari
		STORAGE = false;
	
	document.body.style.backgroundRepeat = 'no-repeat';
	document.body.style.backgroundPosition = 'center center';	
        
        innerContainer = document.getElementById('chaos_box');

	/*
	 * TODO: In some browsers a naste "Plugin Missing" window appears and people is getting confused.
	 * Disabling it until a better way to handle it appears.
	 * 
	 * embed = document.createElement('embed');
	 * embed.id = 'wacom-plugin';
	 * embed.type = 'application/x-wacom-tablet';
	 * document.body.appendChild(embed);
	 *
	 * wacom = document.embeds["wacom-plugin"];
	 */

	palette = new Palette();
	
	foregroundColorSelector = new ColorSelector(palette);
	foregroundColorSelector.addEventListener('change', onForegroundColorSelectorChange, false);
	innerContainer.appendChild(foregroundColorSelector.container);
        foregroundColorSelector.show();
//        foregroundColorSelector.container.style.left = '49px';
        foregroundColorSelector.container.style.right = '34.5%';
	foregroundColorSelector.container.style.top = '16.2%';
	isFgColorSelectorVisible = true;

	var noScroll = function(event) {event.preventDefault()};

	if (STORAGE)
	{
		if (localStorage.canvas)
		{
			localStorageImage = new Image();
		
			localStorageImage.addEventListener("load", function(event)
			{
				localStorageImage.removeEventListener(event.type, arguments.callee, false);
				context.drawImage(localStorageImage,0,0);
			}, false);
			
			localStorageImage.src = localStorage.canvas;			
		}
		
		if (localStorage.brush_color_red)
		{
			COLOR[0] = localStorage.brush_color_red;
			COLOR[1] = localStorage.brush_color_green;
			COLOR[2] = localStorage.brush_color_blue;
		}

		if (localStorage.background_color_red)
		{
			BACKGROUND_COLOR[0] = localStorage.background_color_red;
			BACKGROUND_COLOR[1] = localStorage.background_color_green;
			BACKGROUND_COLOR[2] = localStorage.background_color_blue;
		}
	}
	
	if (window.location.hash)
	{
		hash = window.location.hash.substr(1,window.location.hash.length);
	}
	
	window.addEventListener('mousemove', onWindowMouseMove, false);
	window.addEventListener('resize', onWindowResize, false);
	window.addEventListener('keydown', onWindowKeyDown, false);
	window.addEventListener('keyup', onWindowKeyUp, false);
	window.addEventListener('blur', onWindowBlur, false);
	
	document.addEventListener('mousedown', onDocumentMouseDown, false);
	document.addEventListener('mouseout', onDocumentMouseOut, false);
	
	document.addEventListener("dragenter", onDocumentDragEnter, false);  
	document.addEventListener("dragover", onDocumentDragOver, false);
	document.addEventListener("drop", onDocumentDrop, false);  
	
	onWindowResize(null);
}


// WINDOW

function onWindowMouseMove( event )
{
	mouseX = event.clientX;
	mouseY = event.clientY;
}

function onWindowResize()
{
	SCREEN_WIDTH = window.innerWidth;
	SCREEN_HEIGHT = window.innerHeight;
}

function onWindowKeyDown( event )
{
	if (shiftKeyIsDown)
		return;
		
	switch(event.keyCode)
	{
		case 16: // Shift
			shiftKeyIsDown = true;
			/*foregroundColorSelector.container.style.left = mouseX - 125 + 'px';
			foregroundColorSelector.container.style.top = mouseY - 125 + 'px';
			foregroundColorSelector.container.style.visibility = 'visible';*/
			break;
			
		case 18: // Alt
			altKeyIsDown = true;
			break;
			
		case 68: // d
			break;
		
		case 70: // f
			break;			
	}
}

function onWindowKeyUp( event )
{
	switch(event.keyCode)
	{
		case 16: // Shift
			shiftKeyIsDown = false;
			/*foregroundColorSelector.container.style.visibility = 'hidden';*/			
			break;
			
		case 18: // Alt
			altKeyIsDown = false;
			break;

		case 82: // r
			break;
		case 66: // b
			document.body.style.backgroundImage = null;
			break;
	}
}

function onWindowBlur( event )
{
	shiftKeyIsDown = false;
	altKeyIsDown = false;
}


// DOCUMENT

function isEventInColorSelector(cx, cy) {
	if (!isFgColorSelectorVisible && !isBgColorSelectorVisible) {
		return false;
	}
	
	var xLoc = 0,
		yLoc = 0;
	
	if (isFgColorSelectorVisible) {
		/*xLoc = foregroundColorSelector.container.offsetLeft + 250;
		yLoc = foregroundColorSelector.container.offsetTop;*/
	} else {
		xLoc = backgroundColorSelector.container.offsetLeft + 250;
		yLoc = backgroundColorSelector.container.offsetTop;
	}
	
	xLoc = cx - xLoc;
	yLoc = cy - yLoc;
	
	return (xLoc >= 0 && xLoc <= 150 &&
		    yLoc >= 0 && yLoc <= 250);
}

function onDocumentMouseDown( event )
{
	if (!isMenuMouseOver && !isEventInColorSelector(event.clientX, event.clientY))
		event.preventDefault();
}

function onDocumentMouseOut( event )
{
	//onCanvasMouseUp();
}

function onDocumentDragEnter( event )
{
	event.stopPropagation();
	event.preventDefault();
}

function onDocumentDragOver( event )
{
	event.stopPropagation();
	event.preventDefault();
}

function onDocumentDrop( event )
{
	event.stopPropagation();  
	event.preventDefault();
	
	var file = event.dataTransfer.files[0];
	
	if (file.type.match(/image.*/))
	{
		/*
		 * TODO: This seems to work on Chromium. But not on Firefox.
		 * Better wait for proper FileAPI?
		 */

		var fileString = event.dataTransfer.getData('text').split("\n");
		document.body.style.backgroundImage = 'url(' + fileString[0] + ')';
	}	
}


// COLOR SELECTORS

function onForegroundColorSelectorChange( event )
{
	COLOR = foregroundColorSelector.getColor();

	if (STORAGE)
	{
		localStorage.brush_color_red = COLOR[0];
		localStorage.brush_color_green = COLOR[1];
		localStorage.brush_color_blue = COLOR[2];		
	}
}

function showFGColorPickerAtLocation(loc) {
	foregroundColorSelector.show();
	foregroundColorSelector.container.style.left = (loc[0] - (foregroundColorSelector.container.offsetWidth / 2)) + 'px';
	foregroundColorSelector.container.style.top = (loc[1] - (foregroundColorSelector.container.offsetHeight / 2)) + 'px';

	isFgColorSelectorVisible = true;
}

function averageTouchPositions(touches) {
	var touchLength = touches.length;
	var average = [0,0];
	
	for (var i = 0; i < event.touches.length; ++i) {
		var touch = event.touches[i];
		average[0] += touch.pageX;
		average[1] += touch.pageY;
	}
	average[0] = average[0] / touches.length;
	average[1] = average[1] / touches.length;
	
	return average;
}

function distance(a, b) {
	var dx=a.pageX-b.pageX;
	var dy=a.pageY-b.pageY;
	return Math.sqrt(dx*dx + dy*dy);
}

function onFGColorPickerTouchMove( event )
{
	if (event.touches.length == 3)
	{
		event.preventDefault();
		var loc = averageTouchPositions(event.touches);
		foregroundColorSelector.container.style.left = (loc[0] - (foregroundColorSelector.container.offsetWidth / 2)) + 'px';
		foregroundColorSelector.container.style.top = (loc[1] - (foregroundColorSelector.container.offsetHeight / 2)) + 'px';
	}
}

function onFGColorPickerTouchEnd( event )
{
	if (event.touches.length == 0)
	{
		event.preventDefault();
		
		window.removeEventListener('touchmove', onFGColorPickerTouchMove, false);
		window.removeEventListener('touchend', onFGColorPickerTouchEnd, false);
		
		if (STORAGE)
		{
			clearTimeout(saveTimeOut);
			saveTimeOut = setTimeout(saveToLocalStorage, 2000, true);
		}
	}
}

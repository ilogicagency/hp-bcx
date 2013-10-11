(function($) {
    $(document).ready(function() {
        window.effect = new Effect();
    });
})(jQuery);

(function($) {
    function Effect() {
        this.event();
    }

    Effect.prototype = {
        event: function() {
            $("#main").swipe({
                swipeStatus: function(event, phase, direction, distance, duration, fingers)
                {
                    console.log("<h4>Swipe Phase : " + phase + "<br/>");
					console.log(event.pageX + ' ; ' + event.pageY);

                    //Here we can check the:
                    //phase : 'start', 'move', 'end', 'cancel'
                    //direction : 'left', 'right', 'up', 'down'
                    //distance : Distance finger is from initial touch point in px
                    //duration : Length of swipe in MS 
                    //fingerCount : the number of fingers used
                    if (phase != "cancel" && phase != "end") {
                        if (duration < 5000)
                            console.log("Under maxTimeThreshold.<h3>Swipe handler will be triggered if you release at this point.</h3>");
                        else
                            console.log("Over maxTimeThreshold. <h3>Swipe handler will be canceled if you release at this point.</h3>");

                        if (distance < 200)
                            console.log("Not yet reached threshold.  <h3>Swipe will be canceled if you release at this point.</h3>");
                        else
                            console.log("Threshold reached <h3>Swipe handler will be triggered if you release at this point.</h3>");
                    }

                    if (phase == "cancel")
                        console.log("<br/>Handler not triggered. <br/> One or both of the thresholds was not met ");
                    if (phase == "end")
                        console.log(event.pageX + ' ; ' + event.pageY);
                },
                threshold: 200,
                maxTimeThreshold: 5000,
                fingers: 'all'
            });
        }
    };

    window.Effect = Effect;
})(jQuery);
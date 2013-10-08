// coolux GmbH - Pandoras Box Webserver Control
// Version 2013-07-04

/* "usesProxy"
**
** false:	Use this when directly communicating with a Pandoras Box
**			web server
**
** true:	Use this setting if you are using the PandorasAutomation.php in
**			combination with a dedicated web server (like apache)
**			(requires PandorasAutomation.php - configuration)
** 
*/
var usesProxy = false;


var eAutoCmdError =  -1;
var eAutoCmdNone = 0;
var eAutoCmdAssignResource = 2;
var eAutoCmdSetSequenceTransportMode = 3;
var eAutoCmdMoveSequenceToCue = 4;
var eAutoCmdMoveSequenceToTime = 5;
var eAutoCmdMoveSequenceToLastNextFrame = 6;
var eAutoCmdMoveSequenceToLastNextCue = 7;
var eAutoCmdSetSequenceTransparency = 8;
var eAutoCmdResetAll = 9;
var eAutoCmdResetSite = 10;
var eAutoCmdResetDevice = 11;
var eAutoCmdResetParam = 12;
var eAutoCmdClearAllActive = 13;
var eAutoCmdClearActiveSite = 14;
var eAutoCmdClearActiveDevice = 15;
var eAutoCmdClearActiveParam = 16;
var eAutoCmdToggleFullscreen = 17;
var eAutoCmdSetParamRelative = 18;
var eAutoCmdAddContent = 19;
var eAutoCmdRemoveMediaById = 20;
var eAutoCmdRemoveMeshById = 21;
var eAutoCmdSpreadAll = 22;
var eAutoCmdSpreadMediaById = 23;
var eAutoCmdSpreadMeshById = 24;
var eAutoCmdStoreActive = 25;
var eAutoCmdStoreActiveToTime = 26;
var eAutoCmdSetMediaFrameBlendingById = 27;
var eAutoCmdSetMediaDeinterlacingById = 28;
var eAutoCmdSetMediaAnisotropicFilteringById = 29;
var eAutoCmdSetMediaUnderscanById = 30;
var eAutoCmdSetMediaMpegColourSpaceById = 31;
var eAutoCmdSetMediaAlphaChannelById = 32;
var eAutoCmdSetText = 33;
var eAutoCmdRemoveInconsistent = 34;
var eAutoCmdActivateAll = 35;
var eAutoCmdActivateSite = 36;
var eAutoCmdActivateDevice = 37;
var eAutoCmdActivateParam = 38;
var eAutoCmdSetParamOfKind = 39;
var eAutoCmdApplyPreset = 40;
var eAutoCmdSetSequenceTimeCodeMode = 41;
var eAutoCmdSetSequenceTimeCodeOffset = 42;
var eAutoCmdSetSequenceTimeCodeStopAction = 43;
var eAutoCmdReloadMediaById = 44;
var eAutoCmdReloadMeshById = 45;
var eAutoCmdLoadProject = 46;
var eAutoCmdCloseProject = 47;
var eAutoCmdClearSelection = 48;
var eAutoCmdSetDeviceAcceptDmxById = 49;
var eAutoCmdSetSiteAcceptDmxById = 50;
var eAutoCmdSetDeviceDmxAddressById = 51;
var eAutoCmdAddTextInput = 52;
var eAutoCmdSetCuePlayMode = 53;
var eAutoCmdSetNextCuePlayMode = 54;
var eAutoCmdIgnoreNextCue = 55;
var eAutoCmdSetContentAtTime = 56;
var eAutoCmdSetChannelEvents = 57;
var eAutoCmdSetParamInSelection = 58;
var eAutoCmdSetParamOfKindInSelection = 59;
var eAutoCmdSetParamRelativeInSelection = 60;
var eAutoCmdAssignResourceToSelection = 61;
var eAutoCmdSaveProject = 62;
var eAutoCmdAddContentFromLocalNode = 63;
var eAutoCmdChangeFullscreenStateById = 64;
var eAutoCmdChangeFullscreenStateByIp = 65;
var eAutoCmdSetTextTextureSize = 66;
var eAutoCmdSetTextProperties = 67;
var eAutoCmdSetTextCenterOnTexture = 68;
var eAutoCmdAddTextInputWide = 69;
var eAutoCmdSetTextWide = 70;
var eAutoCmdSetSiteIp = 71;
var eAutoCmdGetSequenceTransportMode = 72;
var eAutoCmdGetSequenceNowTime = 73;
var eAutoCmdIsLayerSelected = 74;
var eAutoCmdGetAllSelectedLayers = 75;
var eAutoCmdGetAllMediaInProject = 76;
var eAutoCmdGetClipRemainingTime = 77;
var eAutoCmdGetRemainingTimeUntilNextCue = 78;
var eAutoCmdGetParamValue = 79;
var eAutoCmdGetParamKindValue = 80;
var eAutoCmdGetNumSelectedLayers = 81;
var eAutoCmdGetNumMediaInProject = 82;
var eAutoCmdAddFolderToProject = 83;
var eAutoCmdSetParamDouble = 84;
var eAutoCmdSetParamOfKindDouble = 85;
var eAutoCmdSetDeviceSelection = 86;
var eAutoCmdAddContentToFolder = 87;
var eAutoCmdSetClxPlaybackFader = 90;
var eAutoCmdGetSequenceTransparency = 91;
var eAutoCmdSetClxCueMapping = 92;
var eAutoCmdAddCue = 93;
var eAutoCmdRemoveCueById = 94;
var eAutoCmdRemoveAllCues = 95;
var eAutoCmdAddGraphicLayer = 96;
var eAutoCmdRemoveGraphicLayer = 97;
var eAutoCmdSetParamRelativeDouble = 98;
var eAutoCmdSetParamInSelectionDouble = 99;
var eAutoCmdSetParamOfKindInSelectionDouble = 100;
var eAutoCmdSetParamRelativeInSelectionDouble = 101;
var eAutoCmdBackupMode = 102;
var eAutoCmdApplyView = 103;
var eAutoCmdSetSpareFromSpread = 104;
var eAutoCmdGetParamMedia = 105;
var eAutoCmdGetParamObject = 106;
var eAutoCmdAddMediaIncrementID = 107;
var eAutoCmdGetMediaTransportMode = 108;
var eAutoCmdIsSiteConnected = 109;
var eAutoCmdAddVideoLayer = 110; 
var eAutoCmdMoveLayerUp = 111;
var eAutoCmdMoveLayerDown = 112;
var eAutoCmdMoveLayerToFirstPosition = 113;
var eAutoCmdMoveLayerToLastPosition = 114;
var eAutoCmdSetParamArrayBytes = 115;
var eAutoCmdGetClxControllerIsEnabled = 116;
var eAutoCmdSetClxControllerIsEnabled = 117;
var eAutoCmdSetSequenceCueWaitTime = 118;
var eAutoCmdSetSequenceCueJumpTargetTime = 119;
var eAutoCmdSetSequenceCueJumpCount = 120;
var eAutoCmdResetSequenceCueTriggerCount = 121;
var eAutoCmdAddFolderToProjectWithPath = 122;
var eAutoCmdRemoveFolderFromProject = 123;
var eAutoCmdAddContentFolder = 124;
var eAutoCmdRemoveContentByName = 125;
var eAutoCmdRemoveAllContent = 126;
var eAutoCmdGetContentIsConsistent = 127;
var eAutoCmdGetContentIsConsistentByName = 128;
var eAutoCmdAssignResourceByName = 129;
var eAutoCmdCreateSequence = 130;
var eAutoCmdRemoveSequence = 131;
var eAutoCmdGetParamByteTuples = 132;
var eAutoCmdAddContentFolderFromLocalNode = 133;
var eAutoCmdAddContentFolderFromLocalNodeToFolder = 134;
var eAutoCmdAddContentFromLocalNodeToFolder = 135;
var eAutoCmdSendMouseInput = 136;
var eAutoCmdSendKeyboardInput = 137;
var eAutoCmdSetShowCursorInFullscreen = 138;
var eAutoCmdSetBrowserURL = 139;
var eAutoCmdSetBrowserURLByName = 140;
var eAutoCmdRefreshBrowserView = 141;
var eAutoCmdSetBrowserSize = 142;
var eAutoCmdSetBrowserSizeByName = 143;
var eAutoCmdMoveContentToFolder = 144;
var eAutoCmdSetNodeOfSiteIsAudioClockMaster = 145;
var eAutoCmdSendTouchInput = 146;
var eAutoCmdReloadResource = 147;
var eAutoCmdSpreadResource = 148;
var eAutoCmdSetParamRelativeDoubleExtended = 149;
var eAutoCmdGetNumTreeItemsInProject = 150;
var eAutoCmdGetTreeItem = 151;
var eAutoCmdGetMediaInfoWithTreeItemIndex = 152;
var eAutoCmdAddContentToTreeItem = 153;
var eAutoCmdAddContentFromLocalNodeToTreeItem = 154;
var eAutoCmdAddContentFolderFromLocalNodeToTreeItem = 155;
var eAutoCmdRemoveTreeItem = 156;
var eAutoCmdAddFolderToTreeItem = 157;
var eAutoCmdMoveTreeItem = 158;
var eAutoCmdReloadAndSpreadResourceByPath = 159;
var eAutoCmdReloadAndSpreadResourceByItemId = 160;
var eAutoCmdReloadAndSpreadResourceByDmxId = 161;
var eAutoCmdGetThumbnailByPath = 162;
var eAutoCmdGetThumbnailByItemIndex = 163;
var eAutoCmdAddEncryptionKey = 164;
var eAutoCmdAddEncryptionPolicy = 165;
var eAutoCmdSetRouteInputToLayer = 166;
var eAutoCmdSetRouteInputToAutomation = 167;
var eAutoCmdEnableOutputForPicking = 168;
var eAutoCmdSetASIOMasterVolume = 169;
var eAutoCmdRemoveAssetOnSite = 170;
var eAutoCmdRemoveAssetOnSiteById = 171;
var eAutoCmdRemoveAssetOnSiteByTreeItem = 172;
var eAutoCmdAttachAssetOnSite = 173;
var eAutoCmdAttachAssetOnSiteById = 174;
var eAutoCmdAttachAssetOnSiteByTreeItem = 175;
var eAutoCmdCreatePlaylist = 176;
var eAutoCmdCreatePlaylistByPath = 177;
var eAutoCmdCreatePlaylistByItemId = 178;
var eAutoCmdCreatePlaylistFromFolderByPath = 179;
var eAutoCmdCreatePlaylistFromFolderByItemId = 180;
var eAutoCmdPushBackPlaylistEntryByDmxId = 181;
var eAutoCmdPushBackPlaylistEntryByPath = 182;
var eAutoCmdPushBackPlaylistEntryByItemId = 183;
var eAutoCmdInsertPlaylistEntryByDmxId = 184;
var eAutoCmdInsertPlaylistEntryByPath = 185;
var eAutoCmdInsertPlaylistEntryByItemId = 186;
var eAutoCmdRemovePlaylistEntryByDmxId = 187;
var eAutoCmdRemovePlaylistEntryByPath = 188;
var eAutoCmdRemovePlaylistEntryByItemId = 189;
var eAutoCmdGetPlaylistSizeByDmxId = 190;
var eAutoCmdGetPlaylistSizeByPath = 191;
var eAutoCmdGetPlaylistSizeByItemId = 192;
var eAutoCmdGetPlaylistEntryByDmxId = 193;
var eAutoCmdGetPlaylistEntryByPath = 194;
var eAutoCmdGetPlaylistEntryByItemId = 195;
var eAutoCmdGetPlaylistEntryIndicesByDmxId = 196;
var eAutoCmdGetPlaylistEntryIndicesByPath = 197;
var eAutoCmdGetPlaylistEntryIndicesByItemId = 198;
var eAutoCmdSetPlayListEntryIndexByDmxId = 199;
var eAutoCmdSetPlayListEntryIndexByPath = 200;
var eAutoCmdSetPlayListEntryIndexByItemId = 201;
var eAutoCmdSetPlayListEntryDurationByDmxId = 202;
var eAutoCmdSetPlayListEntryDurationByPath = 203;
var eAutoCmdSetPlayListEntryDurationByItemId = 204;
var eAutoCmdSetPlayListEntryFadeOutTimeByDmxId = 205;
var eAutoCmdSetPlayListEntryFadeOutTimeByPath = 206;
var eAutoCmdSetPlayListEntryFadeOutTimeByItemId = 207;
var eAutoCmdSetPlayListEntryInPointByDmxId = 208;
var eAutoCmdSetPlayListEntryInPointByPath = 210;
var eAutoCmdSetPlayListEntryInPointByItemId = 211;
var eAutoCmdSetPlayListEntryOutPointByDmxId = 212;
var eAutoCmdSetPlayListEntryOutPointByPath = 213;
var eAutoCmdSetPlayListEntryOutPointByItemId = 214;
var eAutoCmdSetPlayListEntryTransitionByDmxId = 215;
var eAutoCmdSetPlayListEntryTransitionByPath = 216;
var eAutoCmdSetPlayListEntryTransitionByItemId = 217;
var eAutoCmdSetPlayListEntryNoteByDmxId = 218;
var eAutoCmdSetPlayListEntryNoteByPath = 219;
var eAutoCmdSetPlayListEntryNoteByItemId = 220;
var eAutoCmdGetIsPandoraConnected = 221;
var eAutoCmdRecordLiveInputById = 222;
var eAutoCmdRecordLiveInputByIdStart = 223;
var eAutoCmdRecordLiveInputStop = 224;
var eAutoCmdRecordLiveInputByName = 225;
var eAutoCmdRecordLiveInputByNameStart = 226;
var eAutoCmdExportVideo = 227;
var eAutoCmdEncodeFileByName = 228;
var eAutoCmdEncodeFileByNameWithTarget = 229;
var eAutoCmdEncodeFileById = 230;
var eAutoCmdEncodeFileByIdWithTarget = 231;
var eAutoCmdSetParamLerpTime = 232;
var eAutoCmdSendMouseScroll = 233;
var eAutoCmdSetContentId = 234;
var eAutoCmdSetSiteDmxAddressById = 235;


var PBAutoCommands = {
 
	sendToHost: function(callback, cmdBytes)
	{  
		var xmlHttpReq = null;
		try {
			// Mozilla, Opera, Safari sowie Internet Explorer (ab v7)
			xmlHttpReq = new XMLHttpRequest();
		} catch(e) {
			try {
				// MS Internet Explorer (ab v6)
				xmlHttpReq  = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				try {
					// MS Internet Explorer (ab v5)
					xmlHttpReq  = new ActiveXObject("Msxml2.XMLHTTP");
				} catch(e) {
					xmlHttpReq  = null;
					console.log("Error","PB Automation was unable to create a XmlHttpRequest object");
				}
			}
		}

		xmlHttpReq.open((usesProxy?"POST":"PBAUTO"), (usesProxy?"PandorasAutomation.php":"?"), true);
		if(callback !== false){
			xmlHttpReq.onreadystatechange = function(oEvent)
			{
				if(xmlHttpReq.readyState === 4)
				{  
					if(xmlHttpReq.status === 200)
					{
						callback(new PbUtilBytesHost(Base64.decode(xmlHttpReq.responseText)));
					}
					else
					{  
						callback(false);
						console.log("Error", xmlHttpReq.statusText);
					}  
				}  		
			};
		}
		xmlHttpReq.send(Base64.encode(cmdBytes.getRawBytes()));
	},
	
	getNumSelectedLayers: function(callback)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetNumSelectedLayers);
    	PBAutoCommands.sendToHost(callback,message);
	},
	
	getContentIsConsistent: function(callback, FolderId, FileId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetContentIsConsistent);
    	message.addInt(FolderId);
    	message.addInt(FileId);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	getEnableClxController: function(callback, forJogShuttle)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetClxControllerIsEnabled);
		message.addBoolean(forJogShuttle);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	isSiteConnected: function(callback, siteNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdIsSiteConnected);
    	message.addInt(siteNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	getMediaTransportMode: function(callback, siteNum,deviceNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetMediaTransportMode);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	getRemainingTimeUntilNextCue: function(callback, seqNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetRemainingTimeUntilNextCue);
    	message.addInt(seqNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	getClipRemainingTime: function(callback, siteNum, deviceNum, seqNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetClipRemainingTime);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addInt(seqNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	getSequenceTransportMode: function(callback, seqNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetSequenceTransportMode);
    	message.addInt(seqNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	getSequenceTime: function(callback, seqNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetSequenceNowTime);
   		message.addInt(seqNum);
		PBAutoCommands.sendToHost(callback,message);
	},

	getSequenceTransparency: function(callback, seqNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetSequenceTransparency);
    	message.addInt(seqNum);
		PBAutoCommands.sendToHost(callback,message);
	},

	assignResource: function(callback, siteNum, deviceNum, FolderId, FileId, forMesh)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAssignResource);
		message.addInt(siteNum);
		message.addInt(deviceNum);
		message.addInt(FolderId);
		message.addInt(FileId);
		message.addByte(forMesh);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	isLayerReallySelected: function(callback, siteNum, deviceNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdIsLayerSelected);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	getSelectedLayer: function(callback, layerIndex) //index of device in current selection 0 = first device in selection 
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetAllSelectedLayers);
    	message.addInt(layerIndex);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	getParam: function(callback, siteNum, deviceNum, paramName)
	{
		var message = new PBUtilBytesNetwork();	
		message.addShort(eAutoCmdGetParamValue);
		message.addInt(siteNum);
		message.addInt(deviceNum);
		message.addStringNarrow(paramName);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	getParamOfKind: function(callback, siteNum, deviceNum, paramKindId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetParamKindValue);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addInt(paramKindId);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setParam: function(callback, siteNum, deviceNum, pParamName, value, silent, direct)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParam);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addStringNarrow(pParamName);
    	message.addInt(value);
    	message.addBoolean(silent);
    	message.addBoolean(direct);		
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setParamDouble: function(callback, siteNum, deviceNum, pParamName, value, silent, direct)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamDouble);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addStringNarrow(pParamName);
    	message.addDouble(value);
    	message.addBoolean(silent);
    	message.addBoolean(direct);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setParamOfKind: function(callback, siteNum, deviceNum, paramKindId, value, silent, direct)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamOfKind);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addInt(paramKindId);
    	message.addInt(value);
    	message.addBoolean(silent);
    	message.addBoolean(direct);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setParamOfKindDouble: function(callback, siteNum, deviceNum, paramKindId, value, silent, direct)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamOfKindDouble);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addInt(paramKindId);
    	message.addDouble(value);
    	message.addBoolean(silent);
    	message.addBoolean(direct);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setParamInSelection: function(callback, pParamName, value)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamInSelection);
    	message.addStringNarrow(pParamName);
    	message.addInt(value);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setParamInSelectionDouble: function(callback, pParamName, value)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamInSelectionDouble);
    	message.addStringNarrow(pParamName);
    	message.addDouble(value);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setParamOfKindInSelection: function(callback, paramKindId, value)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamInSelection);
   		message.addInt(paramKindId);
    	message.addInt(value);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setParamOfKindInSelectionDouble: function(callback, paramKindId, value)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamOfKindInSelectionDouble);
   		message.addInt(paramKindId);
    	message.addDouble(value);		
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setContentAtTime: function(callback, siteNum, deviceNum, seqNum, hours, minutes, seconds, frames, FolderId, FileId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetContentAtTime);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addInt(seqNum);
    	message.addInt(hours);
    	message.addInt(minutes);
    	message.addInt(seconds);
    	message.addInt(frames);
    	message.addInt(FolderId);
    	message.addInt(FileId);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	applyPreset: function(callback, bankNum, presetNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdApplyPreset);
    	message.addInt(bankNum);
   		message.addInt(presetNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	assignResourceToSelection: function(callback, FolderId, FileId, forMesh)

	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAssignResourceToSelection);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addByte(forMesh);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setSequenceTransportMode: function(callback, seqNum, pModeName)
	{
		var modeNum;
		if(pModeName == "Play")
		{
			modeNum = 1;
		}
		else if(pModeName == "Stop")
		{
			modeNum = 2;
		}
		else if(pModeName == "Pause")
		{
			modeNum = 3;
		}
		else
		{
			return false;
		}
		
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSequenceTransportMode);
    	message.addInt(seqNum);
    	message.addInt(modeNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	moveSequenceToTime: function(callback, seqNum, hours, minutes, seconds, frames)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdMoveSequenceToTime);
    	message.addInt(seqNum);
    	message.addInt(hours);
    	message.addInt(minutes);
    	message.addInt(seconds);
    	message.addInt(frames);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	moveSequenceToLastNextFrame: function(callback, seqNum, isNext)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdMoveSequenceToLastNextFrame);
    	message.addInt(seqNum);
    	message.addByte(isNext);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	moveSequenceToLastNextCue: function(callback, seqNum, isNext)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdMoveSequenceToLastNextCue);
    	message.addInt(seqNum);
    	message.addByte(isNext);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setSequenceTransparency: function(callback, seqNum, transparency)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSequenceTransparency);
    	message.addInt(seqNum);
    	message.addInt(transparency);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setSequenceTimeCodeMode: function(callback, seqNum, timeCodeMode)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSequenceTimeCodeMode);
    	message.addInt(seqNum);
    	message.addInt(timeCodeMode);
		PBAutoCommands.sendToHost(callback,message);
	},

	setSequenceTimeCodeOffset: function(callback, seqNum, hours, minutes, seconds, frames)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSequenceTimeCodeOffset);
    	message.addInt(seqNum);
    	message.addInt(hours);
    	message.addInt(minutes);
    	message.addInt(seconds);
    	message.addInt(frames);
		PBAutoCommands.sendToHost(callback,message);
	},

	setSequenceTimeCodeStopAction: function(callback, seqNum, stopAction)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSequenceTimeCodeStopAction);
    	message.addInt(seqNum);
    	message.addInt(stopAction);
		PBAutoCommands.sendToHost(callback,message);
	},

	resetSite: function(callback, siteNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdResetSite);
    	message.addInt(siteNum);
		PBAutoCommands.sendToHost(callback,message);
	},

	resetDevice: function(callback, siteNum, deviceNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdResetDevice);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	resetParam: function(callback, siteNum, deviceNum, pParamName)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdResetParam);
   		message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addStringNarrow(pParamName);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	activateSite: function(callback, siteNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdActivateSite);
   		message.addInt(siteNum);
		PBAutoCommands.sendToHost(callback,message);
	},


	activateDevice: function(callback, siteNum, deviceNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdActivateDevice);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
		PBAutoCommands.sendToHost(callback,message);
	},


	activateParam: function(callback, siteNum, deviceNum, pParamName)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdActivateParam);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addStringNarrow(pParamName);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	clearActiveSite: function(callback, siteNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdClearActiveSite);
    	message.addInt(siteNum);
		PBAutoCommands.sendToHost(callback,message);
	},

	clearActiveDevice: function(callback, siteNum, deviceNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdClearActiveDevice);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	clearActiveParam: function(callback, siteNum, deviceNum, pParamName)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdClearActiveParam);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addStringNarrow(pParamName);
		PBAutoCommands.sendToHost(callback,message);
	},

	toggleFullscreen: function(callback, siteNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdToggleFullscreen);
    	message.addInt(siteNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setParamRelative: function(callback, siteNum, deviceNum, pParamName, value)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamRelative);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addStringNarrow(pParamName);
    	message.addInt(value);
		PBAutoCommands.sendToHost(callback,message);
	},

	setParamRelativeDouble: function(callback, siteNum, deviceNum, pParamName, value)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamRelativeDouble);
   		message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addStringNarrow(pParamName);
    	message.addDouble(value);
		PBAutoCommands.sendToHost(callback,message);
	},

	setParamRelativeInSelection: function(callback, pParamName, value)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamRelativeInSelection);
    	message.addStringNarrow(pParamName);
    	message.addInt(value);
		PBAutoCommands.sendToHost(callback,message);
	},

	setParamRelativeInSelectionDouble: function(callback, pParamName, value)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetParamRelativeInSelectionDouble);
    	message.addStringNarrow(pParamName);
    	message.addDouble(value);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	addContent: function(callback, pFullPath, siteNum, FolderId, FileId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAddContent);
    	message.addStringNarrow(pFullPath);
    	message.addInt(siteNum);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addBoolean(false);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	addContentToFolder: function(callback, pFullPath, siteNum, FolderId, FileId, pFoldername)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAddContentToFolder);
   		message.addStringNarrow(pFullPath);
    	message.addInt(siteNum);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addStringNarrow(pFoldername);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	addContentFromLocalNode: function(callback, pFullPath)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAddContentFromLocalNode);
    	message.addStringNarrow(pFullPath);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	addContentFromLocalNodeToFolder: function(callback, pFullPath, pFoldername)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAddContentFromLocalNodeToFolder);
		message.addStringNarrow(pFullPath);
		message.addStringNarrow(pFoldername);
		PBAutoCommands.sendToHost(callback,message);
	},

	addContentFolderFromLocalNode: function(callback, pFolderPath)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAddContentFolderFromLocalNode);
		PBAutoCommands.sendToHost(callback,message);
	},

	addContentFolderFromLocalNodeToFolder: function(callback, pFolderPath, pFoldername)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAddContentFolderFromLocalNodeToFolder);
		message.addStringNarrow(pFolderPath);
		message.addStringNarrow(pFoldername);
		PBAutoCommands.sendToHost(callback,message);
	},

	removeMediaById: function(callback, FolderId, FileId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdRemoveMediaById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
		PBAutoCommands.sendToHost(callback,message);
	},

	removeMeshById: function(callback, FolderId, FileId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdRemoveMeshById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	removeAllResources: function(callback, removeFolder)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdRemoveAllContent);
    	message.addBoolean(removeFolder);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	spreadMediaById: function(callback, FolderId, FileId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSpreadMediaById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
		PBAutoCommands.sendToHost(callback,message);		
	},

	spreadMeshById: function(callback, FolderId, FileId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSpreadMeshById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	reloadMediaById: function(callback, FolderId, FileId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdReloadMediaById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
		PBAutoCommands.sendToHost(callback,message);
	},

	reloadMeshById: function(callback, FolderId, FileId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdReloadMeshById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
		PBAutoCommands.sendToHost(callback,message);
	},

	storeActive: function(callback, seqNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdStoreActive);
    	message.addInt(seqNum);
		PBAutoCommands.sendToHost(callback,message);
	},

	storeActiveToTime: function(callback, seqNum, hours, minutes, seconds, frames)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdStoreActiveToTime);
    	message.addInt(seqNum);
    	message.addInt(hours);
    	message.addInt(minutes);
    	message.addInt(seconds);
    	message.addInt(frames);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setMediaFrameBlendingById: function(callback, FolderId, FileId, frameBlended)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetMediaFrameBlendingById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addByte(frameBlended);
		PBAutoCommands.sendToHost(callback,message);
	},

	setMediaDeinterlacingById: function(callback, FolderId, FileId, deinterlacer)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetMediaDeinterlacingById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addInt(deinterlacer);
		PBAutoCommands.sendToHost(callback,message);
	},

	setMediaAnisotropicFilteringById: function(callback, FolderId, FileId, useFiltering)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetMediaAnisotropicFilteringById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addByte(useFiltering);
		PBAutoCommands.sendToHost(callback,message);
	},

	setMediaUnderscanById: function(callback, FolderId, FileId, useUnderscan)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetMediaUnderscanById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addByte(useUnderscan);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setMediaMpegColourSpaceById: function(callback, FolderId, FileId, useMpegColourSpace)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetMediaMpegColourSpaceById);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addByte(useMpegColourSpace);
		PBAutoCommands.sendToHost(callback,message);
	},

	setMediaAlphaChannelById: function(callback, FolderId, FileId, useAlphaChannel)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetMediaAlphaChannelById);
    	message.addInt(FolderId);
   		message.addInt(FileId);
    	message.addByte(useAlphaChannel);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	createTextInput: function(callback, FolderId, FileId, pText)       // for CreateTextInputWide search at the end of function list
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAddTextInput);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addStringNarrow(pText);
		PBAutoCommands.sendToHost(callback,message);
	},

	setText: function(callback, FolderId, FileId, pText)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetTextTextureSize);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addStringNarrow(pText);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	loadProject: function(callback, pPath, pName, saveExisting)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdLoadProject);
    	message.addStringNarrow(pPath);
    	message.addStringNarrow(pName);
    	message.addByte(saveExisting);
		PBAutoCommands.sendToHost(callback,message);
	},

	closeProject: function(callback, save)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdCloseProject);
    	message.addByte(save);
		PBAutoCommands.sendToHost(callback,message);
	},

	setDeviceAcceptDmxById: function(callback, siteNum, deviceNum, acceptDmx)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetDeviceAcceptDmxById);
    	message.addInt(siteNum);
   		message.addInt(deviceNum);
    	message.addByte(acceptDmx);
		PBAutoCommands.sendToHost(callback,message);
	},

	setSiteAcceptDmxById: function(callback, siteNum, acceptDmx)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSiteAcceptDmxById);
    	message.addInt(siteNum);
    	message.addByte(acceptDmx);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setDeviceDmxAddressById: function(callback, siteNum, deviceNum, index, id1, id2)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetDeviceDmxAddressById);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addInt(index);
    	message.addInt(id1);
    	message.addInt(id2);
		PBAutoCommands.sendToHost(callback,message);
	},

	setCuePlayMode: function(callback, seqNum, cueId, playMode)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetCuePlayMode);
    	message.addInt(seqNum);
    	message.addInt(cueId);
    	message.addInt(playMode);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setNextCuePlayMode: function(callback, seqNum, playMode)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetNextCuePlayMode);
    	message.addInt(seqNum);
    	message.addInt(playMode);
		PBAutoCommands.sendToHost(callback,message);
	},

	setIgnoreNextCue: function(callback, seqNum, doIgnore)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdIgnoreNextCue);
    	message.addInt(seqNum);
    	message.addByte(doIgnore);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	changeFullscreenStateById: function(siteNum, enterFullscreen)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdChangeFullscreenStateById);
    	message.addInt(siteNum);
    	message.addByte(enterFullscreen);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	changeFullscreenStateByIp: function(callback, pIp, enterFullscreen)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdChangeFullscreenStateByIp);
    	message.addStringNarrow(pIp);
    	message.addByte(enterFullscreen);
		PBAutoCommands.sendToHost(callback,message);
	},

	setTextTextureSize: function(callback, FolderId, FileId, width, height)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetTextTextureSize);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addInt(width);
    	message.addInt(height);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setTextProperties: function(callback, FolderId, FileId, pFont, size, style, alignment, colorRed, colorGreen, colorBlue)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetTextProperties);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addStringNarrow(pFont);
    	message.addInt(size);
    	message.addByte(style);
    	message.addByte(alignment);
    	message.addByte(colorRed);
    	message.addByte(colorGreen);
    	message.addByte(colorBlue);
		PBAutoCommands.sendToHost(callback,message);	
	},
	
	setTextCenterOnTexture: function(callback, FolderId, FileId, centerOnTexture)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetTextCenterOnTexture);
    	message.addInt(FolderId);
    	message.addInt(FileId);
    	message.addByte(centerOnTexture);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setSiteIpById: function(callback, siteNum, pIp)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSiteIp);
    	message.addInt(siteNum);
    	message.addStringNarrow(pIp);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setDeviceSelection: function(callback, siteNum, deviceNum, selectionMode)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetDeviceSelection);
    	message.addInt(siteNum);
    	message.addInt(deviceNum);
    	message.addInt(selectionMode);
    	PBAutoCommands.sendToHost(callback,message);
	},
	
	setClxControllerFaderMapping: function(callback, faderId, seqNum)
	{
		var message = new PBUtilBytesNetwork();
    	message.addShort(eAutoCmdSetClxPlaybackFader);
    	message.addInt(faderId);
    	message.addInt(seqNum);
		PBAutoCommands.sendToHost(callback,message);
	},

	setClxControllerCueMapping: function(callback, cueBtnId, seqNum, cueId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetClxCueMapping);
    	message.addInt(cueBtnId);
    	message.addInt(seqNum);
    	message.addInt(cueId);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	removeCueById: function(callback, seqNum, cueId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdRemoveCueById);
    	message.addInt(seqNum);
    	message.addInt(cueId);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	removeAllCues: function(callback, seqNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdRemoveAllCues);
    	message.addInt(seqNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	removeLayer: function(callback, siteId, layerId, isGraphicLayer)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdRemoveGraphicLayer);
    	message.addInt(siteId);
    	message.addInt(layerId);
    	message.addBoolean(isGraphicLayer);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	backupMode: function(callback, enable)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdBackupMode);
    	message.addBoolean(enable);
		PBAutoCommands.sendToHost(callback,message);		
	},

	applyView: function(callback, viewNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdApplyView);
		message.addInt(viewNum);
		PBAutoCommands.sendToHost(callback,message);
	},

	setSpareFromSpread: function(callback, siteId, spareFromSpread)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSpareFromSpread);
		message.addInt(siteId);
		message.addBoolean(spareFromSpread);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	addMediaIncrementID: function(callback, pMediaPath, siteNum) // this returns the Incremented Media ID
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAddContent);
    	message.addStringNarrow(pMediaPath);
    	message.addInt(siteNum);
    	message.addInt(0);
    	message.addInt(0);
    	message.addBoolean(true);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setEnableClxController: function(callback, forJogShuttle, enable)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetClxControllerIsEnabled);
		message.addBoolean(forJogShuttle);
		message.addBoolean(enable);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setSequenceCueWaitTime: function(callback, seqNum, cueId, hours, minutes, seconds, frames)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSequenceCueWaitTime);
    	message.addInt(seqNum);
    	message.addInt(cueId);
   		message.addInt(hours);
    	message.addInt(minutes);
    	message.addInt(seconds);
    	message.addInt(frames);
		PBAutoCommands.sendToHost(callback,message);
	},

	setSequenceCueJumpTargetTime: function(callback, seqNum, cueId, hours, minutes, seconds, frames)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSequenceCueJumpTargetTime);
    	message.addInt(seqNum);
    	message.addInt(cueId);
    	message.addInt(hours);
    	message.addInt(minutes);
    	message.addInt(seconds);
    	message.addInt(frames);
		PBAutoCommands.sendToHost(callback,message);
	},

	setSequenceCueJumpCount: function(callback, seqNum, cueId, jumpCount)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetSequenceCueJumpCount);
    	message.addInt(seqNum);
    	message.addInt(cueId);
    	message.addInt(jumpCount);
		PBAutoCommands.sendToHost(callback,message);
	},

	resetSequenceCueTriggerCount: function(callback, seqNum, cueId)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdResetSequenceCueTriggerCount);
    	message.addInt(seqNum);
    	message.addInt(cueId);
		PBAutoCommands.sendToHost(callback,message);
	},

	removeSequence: function(callback, seqNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdRemoveSequence);
    	message.addInt(seqNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	
	
	sendMouseInput: function(callback, siteNum, eventType, screenPosX, screenPosY, screenWidth, screenHeight)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSendMouseInput);
		message.addInt(siteNum);
		message.addInt(eventType);
		message.addInt(screenPosX);
		message.addInt(screenPosY);
		message.addInt(screenWidth);
		message.addInt(screenHeight);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	
	sendKeyboardInput: function(callback, siteNum, eventType, keyCode)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSendKeyboardInput);
		message.addInt(siteNum);
		message.addInt(eventType);
		message.addInt(keyCode);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	
	
	
	setShowCursorInFullscreen: function(callback, siteNum, showCursor)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetShowCursorInFullscreen);
		message.addInt(siteNum);
		message.addBoolean(showCursor);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	
	setBrowserURL: function(callback, dmxFolderId, dmxId, pURL)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetBrowserURL);
		message.addInt(dmxFolderId);
		message.addInt(dmxId);
		message.addStringWide(pURL);										///////////////////////////////////////////////
		PBAutoCommands.sendToHost(callback,message);
	},
	
	
	setBrowserURLByName: function(callback, pProjectPath, pURL)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetBrowserURLByName);
		message.addStringWide(pProjectPath);									///////////////////////////////////////////////////////
		message.addStringWide(pURL);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	
	refreshBrowserView: function(callback, siteNum, deviceNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdRefreshBrowserView);
		message.addInt(siteNum);
		message.addInt(deviceNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	
	
	setBrowserSize: function(callback, dmxFolderId, dmxId, width, height)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetBrowserSize);
		message.addInt(dmxFolderId);
		message.addInt(dmxId);
		message.addInt(width);
		message.addInt(height);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	
	setBrowserSizeByName: function(callback, pProjectPath, width, height)
	{	
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetShowCursorInFullscreen);
		message.addStringWide(pProjectPath);									////////////////////////////////////////////////////////
		message.addInt(width);
		message.addInt(height);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	moveResourceToFolder: function(callback, pResName, pFolderName)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdMoveContentToFolder);
		message.addStringWide(pResName);										//////////////////////////////////////////////////////
		message.addStringWide(pFolderName);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	setNodeOfSiteIsAudioClockMaster: function(callback, siteNum, isMaster)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdSetNodeOfSiteIsAudioClockMaster);
		message.addInt(siteNum);
		message.addBoolean(isMaster);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	sendCommandWithoutParam: function(callback, command, waitForAnswer)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(command);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	createTextInputWide: function(callback, dmxFolderId, dmxId, pText)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdAddTextInputWide);
		message.addInt(dmxFolderId);
		message.addInt(dmxId);
		message.addStringWide(pText);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	sendMediaInfoQuery: function(callback, index)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetAllMediaInProject);
		message.addInt(index);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	
	
	addLayer: function(callback, siteId, isGraphicLayer)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(inCmd);
		message.addInt(siteId);
		message.addBoolean(isGraphicLayer);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	
	getParamResource: function(callback, siteNum, deviceNum, pParamName, pInfo, isMedia)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdGetParamMedia);
		message.addInt(siteNum);
		message.addInt(deviceNum);
		message.addBoolean(isMedia);
		message.addStringNarrow(ParamName);													/////////////////////////////////////////	
		PBAutoCommands.sendToHost(callback,message);
	},
	
	moveLayer: function(callback, siteNum, deviceNum, moveTypeCmd)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(moveTypeCmd);
		message.addInt(siteNum);
		message.addInt(deviceNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	moveLayerUp: function(callback, siteNum, deviceNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdMoveLayerUp);
		message.addInt(siteNum);
		message.addInt(deviceNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	moveLayerDown: function(callback, siteNum, deviceNum)
	{
		var message = new PBUtilBytesNetwork();
		message.addShort(eAutoCmdMoveLayerDown);
		message.addInt(siteNum);
		message.addInt(deviceNum);
		PBAutoCommands.sendToHost(callback,message);
	},
	
	/* new untested functions starting from 5.5.
	** remove whitespace between "*" and "/" below:
	
							* /
	
	
SendMouseInput: function(callback,siteNum,deviceNum,eventType,screenPosX,screenPosY,bool firstPass)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSendMouseInput);
message.addInt(siteNum);
message.addInt(deviceNum);
message.addInt(eventType);
message.addInt(screenPosX);
message.addInt(screenPosY);
message.addBoolean(firstPass);
PBAutoCommands.sendToHost(callback,message);
}
SendMouseScroll: function(callback,siteNum,deviceNum,scrollValue)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSendMouseScroll);
message.addInt(siteNum);
message.addInt(deviceNum);
message.addInt(scrollValue);
PBAutoCommands.sendToHost(callback,message);
}
SendTouchInput: function(callback,siteNum,deviceNum,touchId,touchType,screenPosX,screenPosY,bool firstPass)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSendTouchInput);
message.addInt(siteNum);
message.addInt(deviceNum);
message.addInt(touchId);
message.addInt(touchType);
message.addInt(screenPosX);
message.addInt(screenPosY);
message.addBoolean(firstPass);
PBAutoCommands.sendToHost(callback,message);
}
SendKeyboardInput: function(callback,siteNum,eventType,keyCode)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSendKeyboardInput);
message.addInt(siteNum);
message.addInt(eventType);
message.addInt(keyCode);
PBAutoCommands.sendToHost(callback,message);
}
SetShowCursorInFullscreen: function(callback,siteNum,bool showCursor)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetShowCursorInFullscreen);
message.addInt(siteNum);
message.addBoolean(showCursor);
PBAutoCommands.sendToHost(callback,message);
}
SetBrowserURL: function(callback,dmxFolderId,dmxId,pURL)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetBrowserURL);
message.addInt(dmxFolderId);
message.addInt(dmxId);
message.addUtf8StringAsWide(pURL);
PBAutoCommands.sendToHost(callback,message);
}
SetBrowserURLByName: function(callback,pProjectPath,pURL)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetBrowserURLByName);
message.addUtf8StringAsWide(pProjectPath);
message.addUtf8StringAsWide(pURL);
PBAutoCommands.sendToHost(callback,message);
}
RefreshBrowserView: function(callback,siteNum,deviceNum)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdRefreshBrowserView);
message.addInt(siteNum);
message.addInt(deviceNum);
PBAutoCommands.sendToHost(callback,message);
}
SetBrowserSize: function(callback,dmxFolderId,dmxId,width,height)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetBrowserSize);
message.addInt(dmxFolderId);
message.addInt(dmxId);
message.addInt(width);
message.addInt(height);
PBAutoCommands.sendToHost(callback,message);
}
SetBrowserSizeByName: function(callback,pProjectPath,width,height)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetShowCursorInFullscreen);
message.addUtf8StringAsWide(pProjectPath);
message.addInt(width);
message.addInt(height);
PBAutoCommands.sendToHost(callback,message);
}
SetNodeOfSiteIsAudioClockMaster: function(callback,siteNum,bool isMaster)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetNodeOfSiteIsAudioClockMaster);
message.addInt(siteNum);
message.addBoolean(isMaster);
PBAutoCommands.sendToHost(callback,message);
}
AddEncryptionKey: function(callback,pKey)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdAddEncryptionKey);
message.addUtf8StringAsWide(pKey);
PBAutoCommands.sendToHost(callback,message);
}
AddEncryptionPolicy: function(callback,pPolicy)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdAddEncryptionPolicy);
message.addUtf8StringAsWide(pPolicy);
PBAutoCommands.sendToHost(callback,message);
}
SetRouteInputToLayer: function(callback,siteNum,bool enable)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetRouteInputToLayer);
message.addInt(siteNum);
message.addBoolean(enable);
PBAutoCommands.sendToHost(callback,message);
}
SetRouteInputToAutomation: function(callback,siteNum,bool enable)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetRouteInputToAutomation);
message.addInt(siteNum);
message.addBoolean(enable);
PBAutoCommands.sendToHost(callback,message);
}
EnableOutputForPicking: function(callback,siteNum,outputNum,bool enable)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdEnableOutputForPicking);
message.addInt(siteNum);
message.addInt(outputNum);
message.addBoolean(enable);
PBAutoCommands.sendToHost(callback,message);
}
SetASIOMasterVolume: function(callback,siteNum,double value)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetASIOMasterVolume);
message.addInt(siteNum);
message.addDouble(value);
PBAutoCommands.sendToHost(callback,message);
}
GetThumbnailByPath: function(callback,pProjectPath,pWidth,pHeight,pData)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdGetThumbnailByPath);
message.addUtf8StringAsWide(pProjectPath);
}
CreatePlaylist: function(callback,bool setDmxIds,newDmxFolderId,newDmxId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdCreatePlaylist);
message.addBoolean(setDmxIds);
message.addInt(newDmxFolderId);
message.addInt(newDmxId);
PBAutoCommands.sendToHost(callback,message);
}
CreatePlaylistByPath: function(callback,pPlaylistFolderPath,bool setDmxIds,newDmxFolderId,newDmxId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdCreatePlaylistByPath);
message.addString(pPlaylistFolderPath);
message.addBoolean(setDmxIds);
message.addInt(newDmxFolderId);
message.addInt(newDmxId);
PBAutoCommands.sendToHost(callback,message);
}
CreatePlaylistByItemId: function(callback,playlistFolderItemId,bool setDmxIds,newDmxFolderId,newDmxId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdCreatePlaylistByItemId);
message.addInt(playlistFolderItemId);
message.addBoolean(setDmxIds);
message.addInt(newDmxFolderId);
message.addInt(newDmxId);
PBAutoCommands.sendToHost(callback,message);
}
CreatePlaylistFromFolderByPath: function(callback,pPlaylistFolderPath,pResourceFolderPath,bool setDmxIds,newDmxFolderId,newDmxId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdCreatePlaylistFromFolderByPath);
message.addString(pPlaylistFolderPath);
message.addString(pResourceFolderPath);
message.addBoolean(setDmxIds);
message.addInt(newDmxFolderId);
message.addInt(newDmxId);
PBAutoCommands.sendToHost(callback,message);
}
CreatePlaylistFromFolderByItemId: function(callback,playlistFolderItemId,resourceFolderItemId,bool setDmxIds,newDmxFolderId,newDmxId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdCreatePlaylistFromFolderByItemId);
message.addInt(playlistFolderItemId);
message.addInt(resourceFolderItemId);
message.addBoolean(setDmxIds);
message.addInt(newDmxFolderId);
message.addInt(newDmxId);
PBAutoCommands.sendToHost(callback,message);
}
PushBackPlaylistEntryByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,resourceDmxFolderId,resourceDmxId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdPushBackPlaylistEntryByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(resourceDmxFolderId);
message.addInt(resourceDmxId);
PBAutoCommands.sendToHost(callback,message);
}
PushBackPlaylistEntryByPath: function(callback,pPlaylistPath,pResourcePath)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdPushBackPlaylistEntryByPath);
message.addString(pPlaylistPath);
message.addString(pResourcePath);
PBAutoCommands.sendToHost(callback,message);
}
PushBackPlaylistEntryByItemId: function(callback,playlistItemId,resourceItemId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdPushBackPlaylistEntryByItemId);
message.addInt(playlistItemId);
message.addInt(resourceItemId);
PBAutoCommands.sendToHost(callback,message);
}
InsertPlaylistEntryByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,resourceDmxFolderId,resourceDmxId,index)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdInsertPlaylistEntryByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(resourceDmxFolderId);
message.addInt(resourceDmxId);
message.addInt(index);
PBAutoCommands.sendToHost(callback,message);
}
InsertPlaylistEntryByPath: function(callback,pPlaylistPath,pResourcePath,index)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdInsertPlaylistEntryByPath);
message.addString(pPlaylistPath);
message.addString(pResourcePath);
message.addInt(index);
PBAutoCommands.sendToHost(callback,message);
}
InsertPlaylistEntryByItemId: function(callback,playlistItemId,resourceItemId,index)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdInsertPlaylistEntryByItemId);
message.addInt(playlistItemId);
message.addInt(resourceItemId);
message.addInt(index);
PBAutoCommands.sendToHost(callback,message);
}
RemovePlaylistEntryByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,index)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdRemovePlaylistEntryByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(index);
PBAutoCommands.sendToHost(callback,message);
}
RemovePlaylistEntryByPath: function(callback,pPlaylistPath,index)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdRemovePlaylistEntryByPath);
message.addString(pPlaylistPath);
message.addInt(index);
PBAutoCommands.sendToHost(callback,message);
}
RemovePlaylistEntryByItemId: function(callback,playlistItemId,index)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdRemovePlaylistEntryByItemId);
message.addInt(playlistItemId);
message.addInt(index);
PBAutoCommands.sendToHost(callback,message);
}
GetPlaylistSizeByDmxId: function(callback,playlistDmxFolderId,playlistDmxId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdGetPlaylistSizeByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
PBAutoCommands.sendToHost(callback,message);
}
GetPlaylistSizeByPath: function(callback,pPlaylistPath)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdGetPlaylistSizeByPath);
message.addString(pPlaylistPath);
PBAutoCommands.sendToHost(callback,message);
}
GetPlaylistSizeByItemId: function(callback,playlistItemId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdGetPlaylistSizeByItemId);
message.addInt(playlistItemId);
PBAutoCommands.sendToHost(callback,message);
}
GetPlaylistEntryByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,entryIndex,pPlaylistEntryInfo)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdGetPlaylistEntryByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(entryIndex);
PBAutoCommands.sendToHost(callback,message);

}
GetPlaylistEntryByPath: function(callback,pPlaylistPath,entryIndex,pPlaylistEntryInfo)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdGetPlaylistEntryByPath);
message.addString(pPlaylistPath);
message.addInt(entryIndex);
PBAutoCommands.sendToHost(callback,message);
}
GetPlaylistEntryByItemId: function(callback,playlistItemId,entryIndex,pPlaylistEntryInfo)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdGetPlaylistEntryByItemId);
message.addInt(playlistItemId);
message.addInt(entryIndex);
PBAutoCommands.sendToHost(callback,message);
}
GetPlaylistEntryIndicesByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,pData,pSize)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdGetPlaylistEntryIndicesByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
PBAutoCommands.sendToHost(callback,message);
}
GetPlaylistEntryIndicesByPath: function(callback,pPlaylistPath,pData,pSize)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdGetPlaylistEntryIndicesByPath);
message.addString(pPlaylistPath);
PBAutoCommands.sendToHost(callback,message);
}
GetPlaylistEntryIndicesByItemId: function(callback,playlistItemId,pData,pSize)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdGetPlaylistEntryIndicesByItemId);
message.addInt(playlistItemId);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryIndexByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,index,newIndex)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryIndexByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(index);
message.addInt(newIndex);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryIndexByPath: function(callback,pPlaylistPath,index,newIndex)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryIndexByPath);
message.addString(pPlaylistPath);
message.addInt(index);
message.addInt(newIndex);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryIndexByItemId: function(callback,playlistItemId,index,newIndex)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryIndexByItemId);
message.addInt(playlistItemId);
message.addInt(index);
message.addInt(newIndex);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryDurationByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryDurationByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryDurationByPath: function(callback,pPlaylistPath,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryDurationByPath);
message.addString(pPlaylistPath);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryDurationByItemId: function(callback,playlistItemId,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryDurationByItemId);
message.addInt(playlistItemId);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryFadeOutTimeByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryFadeOutTimeByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryFadeOutTimeByPath: function(callback,pPlaylistPath,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryFadeOutTimeByPath);
message.addString(pPlaylistPath);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryFadeOutTimeByItemId: function(callback,playlistItemId,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryFadeOutTimeByItemId);
message.addInt(playlistItemId);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryInPointByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryInPointByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryInPointByPath: function(callback,pPlaylistPath,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryInPointByPath);
message.addString(pPlaylistPath);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryInPointByItemId: function(callback,playlistItemId,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryInPointByItemId);
message.addInt(playlistItemId);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryOutPointByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryOutPointByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryOutPointByPath: function(callback,pPlaylistPath,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryOutPointByPath);
message.addString(pPlaylistPath);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryOutPointByItemId: function(callback,playlistItemId,index,hours,minutes,seconds,frames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryOutPointByItemId);
message.addInt(playlistItemId);
message.addInt(index);
message.addInt(hours);
message.addInt(minutes);
message.addInt(seconds);
message.addInt(frames);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryTransitionByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,index,fadeFxId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryTransitionByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(index);
message.addInt(fadeFxId);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryTransitionByPath: function(callback,pPlaylistPath,index,fadeFxId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryTransitionByPath);
message.addString(pPlaylistPath);
message.addInt(index);
message.addInt(fadeFxId);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryTransitionByItemId: function(callback,playlistItemId,index,fadeFxId)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryTransitionByItemId);
message.addInt(playlistItemId);
message.addInt(index);
message.addInt(fadeFxId);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryNoteByDmxId: function(callback,playlistDmxFolderId,playlistDmxId,index,pNote)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryNoteByDmxId);
message.addInt(playlistDmxFolderId);
message.addInt(playlistDmxId);
message.addInt(index);
message.addString(pNote);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryNoteByPath: function(callback,pPlaylistPath,index,pNote)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryNoteByPath);
message.addString(pPlaylistPath);
message.addInt(index);
message.addString(pNote);
PBAutoCommands.sendToHost(callback,message);
}
SetPlayListEntryNoteByItemId: function(callback,playlistItemId,index,pNote)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdSetPlayListEntryNoteByItemId);
message.addInt(playlistItemId);
message.addInt(index);
message.addString(pNote);
PBAutoCommands.sendToHost(callback,message);
}
RecordLiveInput: function(callback,folderID,fileID,pFilename,pEncodingPreset,durationHour,durationMin,durationSec,durationFrames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdRecordLiveInputById);
message.addInt(folderID);
message.addInt(fileID);
message.addString(pFilename);
message.addString(pEncodingPreset);
message.addInt(durationHour);
message.addInt(durationMin);
message.addInt(durationSec);
message.addInt(durationFrames);
PBAutoCommands.sendToHost(callback,message); 
}
RecordLiveInputStart: function(callback,folderID,fileID,pFilename,pEncodingPreset)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdRecordLiveInputByIdStart);
message.addInt(folderID);
message.addInt(fileID);
message.addString(pFilename);
message.addString(pEncodingPreset);
PBAutoCommands.sendToHost(callback,message);
}
// TODO: RecordLiveInputStop: function(callback)
RecordLiveInput: function(callback,pLiveInput,pFilename,pEncodingPreset,durationHour,durationMin,durationSec,durationFrames)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdRecordLiveInputByName);
message.addString(pLiveInput);
message.addString(pFilename);
message.addString(pEncodingPreset);
message.addInt(durationHour);
message.addInt(durationMin);
message.addInt(durationSec);
message.addInt(durationFrames);
PBAutoCommands.sendToHost(callback,message);
}
RecordLiveInputStart: function(callback,pLiveInput,pFilename,pEncodingPreset)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdRecordLiveInputByNameStart);
message.addString(pLiveInput);
message.addString(pFilename);
message.addString(pEncodingPreset);
PBAutoCommands.sendToHost(callback,message);
}
ExportVideo: function(callback,pFilename,pEncodingPreset,seqNum,startHour,startMinute,startSec,startFrame,endHour,endMinute,endSec,endFrame)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdExportVideo);
message.addString(pFilename);
message.addString(pEncodingPreset);
message.addInt(seqNum);
message.addInt(startHour);
message.addInt(startMinute);
message.addInt(startSec);
message.addInt(startFrame);
message.addInt(endHour);
message.addInt(endMinute);
message.addInt(endSec);
message.addInt(endFrame);
PBAutoCommands.sendToHost(callback,message);
}
EncodeFile: function(callback,pFilename,pPreset)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdEncodeFileByName);
message.addString(pFilename);
message.addString(pPreset);
PBAutoCommands.sendToHost(callback,message);
}
EncodeFile: function(callback,folderID,fileID,pPreset)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdEncodeFileById);
message.addInt(folderID);
message.addInt(fileID);
message.addString(pPreset);
PBAutoCommands.sendToHost(callback,message);
}
EncodeFile: function(callback,pFilename,pTargetPath,bool overwriteExisting,pPreset)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdEncodeFileByNameWithTarget);
message.addString(pFilename);
message.addString(pTargetPath);
message.addBoolean(overwriteExisting);
message.addString(pPreset);
PBAutoCommands.sendToHost(callback,message);
}
EncodeFile: function(callback,folderID,fileID,pTargetPath,bool overwriteExisting,pPreset)
{
var message = new PBUtilBytesNetwork();
message.addShort(eAutoCmdEncodeFileByIdWithTarget);
message.addInt(folderID);
message.addInt(fileID);
message.addString(pTargetPath);
message.addBoolean(overwriteExisting);
message.addString(pPreset);
PBAutoCommands.sendToHost(callback,message);
},
/* End new part */

}

var Base64 = {
 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		while (i < input.length) {
 
			chr1 = input[i++];
			chr2 = input[i++];
			chr3 = input[i++];
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = new Array();
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output.push(chr1);
 
			if (enc3 != 64) {
				output.push(chr2);
			}
			if (enc4 != 64) {
				output.push(chr3);
			}
 
		}
 		return output;
	} 
}

var PBU_BYTES_MIN_SHORT = -Math.pow(2, 15);
var PBU_BYTES_MAX_SHORT = (PBU_BYTES_MIN_SHORT * -1) -1;
var PBU_BYTES_MIN_INT = -Math.pow(2, 31);
var PBU_BYTES_MAX_INT = (PBU_BYTES_MIN_INT * -1) -1;
var PBU_BYTES_MAX_DOUBLE_EXP = (1<<11)-1;
var PBU_BYTES_DOUBLE_EXP_BIAS = (PBU_BYTES_MAX_DOUBLE_EXP) >> 1;

function PBUtilBytesNetwork()
{
	this.bytes = new Array();
}

PBUtilBytesNetwork.prototype.addBoolean = function (val)
{
	if(val)
	{
		this.bytes.push(1);
	}
	else
	{
		this.bytes.push(0);
	}
}

PBUtilBytesNetwork.prototype.addByte = function (val)
{
	if(val === true) val = 1;
	if(val === false) val = 0;
	if(val < 0)
	{
		val = 0;
	}
	else if(val > 0xFF)
	{
		val = 0xFF;
	}
	this.bytes.push(val);
}

PBUtilBytesNetwork.prototype.addShort = function (val)
{
	if(val < PBU_BYTES_MIN_SHORT)
	{
		val = PBU_BYTES_MIN_SHORT;
	}
	else
	{
		if(val > PBU_BYTES_MAX_SHORT)
		{
			val = PBU_BYTES_MAX_SHORT;
		}
	}
	var oldLength = this.bytes.length;
	for(var i = 1; i >= 0; i--)
	{
		this.bytes[oldLength+i] = val & 0xff;
		val >>= 8;
	}
}

PBUtilBytesNetwork.prototype.addInt = function (val)
{
	if(val < PBU_BYTES_MIN_INT)
	{
		val = PBU_BYTES_MIN_INT;
	}
	else
	{
		if(val > PBU_BYTES_MAX_INT)
		{
			val = PBU_BYTES_MAX_INT;
		}
	}
	var oldLength = this.bytes.length;
	for(var i = 3; i >= 0; i--)
	{
		this.bytes[oldLength+i] = val & 0xff;
		val >>= 8;
	}
}

PBUtilBytesNetwork.prototype.addDouble = function (val)
{
	var e, m, c;
	var s = val < 0 ? 1:0;
	val = Math.abs(val);
	if(isNaN(val) || (val == Infinity))
	{
		m = isNaN(val)?1:0;
		e = PBU_BYTES_MAX_DOUBLE_EXP;
	}
	else
	{
		e = Math.floor(Math.log(val)/Math.LN2);
		if(val*(c = Math.pow(2, -e)) < 1)
		{
			e--;
			c*=2;
		}
 
		if(val * c >= 2)
		{
			e++; c/=2;
		} 

		if(e + PBU_BYTES_DOUBLE_EXP_BIAS >= PBU_BYTES_MAX_DOUBLE_EXP)
		{
			// overflow
			m = 0;
			e = PBU_BYTES_MAX_DOUBLE_EXP;
		}
		else if(e + PBU_BYTES_DOUBLE_EXP_BIAS >= 1)
		{
			m = (val*c-1)*Math.pow(2, 52);
			e = e + PBU_BYTES_DOUBLE_EXP_BIAS;
		}
		else
		{
			m = val*Math.pow(2, PBU_BYTES_DOUBLE_EXP_BIAS-1)*Math.pow(2, 52);
			e = 0;
		}
	}
	
	var oldLength = this.bytes.length;
	var mLen = 52;
	var i = 0;
	for(i = 0; mLen >= 8; mLen-=8)
	{
		this.bytes[oldLength+i] = m & 0xff;
		i++;
		m /= 256;
	}
	
	var eLen = 11 + mLen;
	for(e = (e << mLen)|m; eLen > 0; eLen-=8)
	{
		this.bytes[oldLength+i] = e & 0xff;
		i++;
		e /= 256;
	}
	this.bytes[oldLength+i-1] |= s*128;
}

PBUtilBytesNetwork.prototype.addStringNarrow = function (val)
{
	var strLength = val.length;
	this.addShort(strLength);
	var oldLength = this.bytes.length;
	for(var i = 0; i < strLength; i++)
	{
		this.bytes[oldLength+i] = val.charCodeAt(i);
	}
}

PBUtilBytesNetwork.prototype.addStringWide = function (val)
{
	var strLength = val.length;
	this.addShort(strLength);
	for(var i = 0; i < strLength; i++)
	{
		this.addShort(val.charCodeAt(i));
	}
}

PBUtilBytesNetwork.prototype.addByteBuffer = function (val)
{
	var bufferLength = val.length;
	this.addInt(bufferLength);
	for(var i = 0; i < bufferLength; i++)
	{
		this.bytes.push(val[i]);
	}
}

PBUtilBytesNetwork.prototype.getRawBytes = function ()
{
	return this.bytes;
}

PBUtilBytesNetwork.prototype.printOutBytes = function ()
{
	var i = 0;
	while(i < this.bytes.length)
	{
		console.log(this.bytes[i++]);
	}
	return this.bytes;
}

function PbUtilBytesHost(rawNetworkBytes)
{
	this.deliveredByteCt = 0;
	this.bytes = rawNetworkBytes.slice(0, rawNetworkBytes.length);
}

PbUtilBytesHost.prototype.getNextAsBoolean = function ()
{
	var val = this.bytes[this.deliveredByteCt];
	this.deliveredByteCt++;
	if(val === 1)
	{
		return true;
	}
	return false;
}

PbUtilBytesHost.prototype.getNextAsByte = function ()
{
	var val = this.bytes[this.deliveredByteCt];
	this.deliveredByteCt++;
	return val;
}

PbUtilBytesHost.prototype.getNextAsShort = function ()
{
	var val = 0;
	var factor = 1;
	for(var i = 1; i >= 0; i--)
	{
		val += this.bytes[this.deliveredByteCt+i] * factor;
		factor *= 256;
	}
	
	if(val & (-PBU_BYTES_MIN_SHORT))
	{
		val += PBU_BYTES_MIN_SHORT * 2;
	}
	
	this.deliveredByteCt += 2;
	return val;
}

PbUtilBytesHost.prototype.getNextAsInt = function ()
{
	var val = 0;
	var factor = 1;
	for(var i = 3; i >= 0; i--)
	{
		val += this.bytes[this.deliveredByteCt+i] * factor;
		factor *= 256;
	}
	
	if(val & (-PBU_BYTES_MIN_INT))
	{
		val += PBU_BYTES_MIN_INT * 2;
	}
	
	this.deliveredByteCt += 4;
	return val;
}

PbUtilBytesHost.prototype.getNextAsDouble = function ()
{
	var val = 0;
	var i = 7;
	var s = this.bytes[this.deliveredByteCt+i];
	i--;
	var nBits = -7;
	var e = s&((1<<(7))-1);
	s >>= 7;
	for(nBits = 4; nBits > 0; nBits-=8)
	{
		 e = e * 256 + this.bytes[this.deliveredByteCt+i];
		 i--;
	} 
	
	var m = e & ((1<<(-nBits))-1);
	e >>= (-nBits);
	for(nBits += 52; nBits > 0; nBits-=8)
	{
		m = m * 256 + this.bytes[this.deliveredByteCt+i];
		i--;
	} 
	
	switch (e)
	{
		case 0:
			e = 1-PBU_BYTES_DOUBLE_EXP_BIAS;
			break;
		case PBU_BYTES_MAX_DOUBLE_EXP:
			val = m?NaN:((s?-1:1)*Infinity);
			this.deliveredByteCt += 8;
			return val;
		default:
			m = m + Math.pow(2, 52);
			e = e - PBU_BYTES_DOUBLE_EXP_BIAS;
		break;
	}
	val = (s?-1:1) * m * Math.pow(2, e-52);
	this.deliveredByteCt += 8;
	return val;
}

PbUtilBytesHost.prototype.getNextAsStringNarrow = function ()
{
	var strLength = this.getNextAsShort();
	var val = new Array();
	for(var i = 0; i < strLength; i++)
	{
		val[i] = String.fromCharCode(this.bytes[this.deliveredByteCt]);
		this.deliveredByteCt++;
	}
	return val.join('');
}

PbUtilBytesHost.prototype.getNextAsStringWide = function ()
{
	var strLength = this.getNextAsShort();
	var val = new Array();
	for(var i = 0; i < strLength; i++)
	{
		val[i] = String.fromCharCode(this.getNextAsShort());
	}
	return val.join('');
}

PbUtilBytesHost.prototype.getNextAsByteBuffer = function ()
{
	var bufferLength = this.getNextAsInt();
	var val = new Array();
	for(var i = 0; i < bufferLength; i++)
	{
		val[i] = this.bytes[this.deliveredByteCt];
		this.deliveredByteCt++;
	}
	return val;
}

function testPbUtilBytes()
{
	var cmdBytes = new PBUtilBytesNetwork();
	cmdBytes.addByte(34);
	cmdBytes.addShort(-22567);
	cmdBytes.addInt(-2345689);
	cmdBytes.addDouble(-789897994.56784);
	cmdBytes.addStringNarrow("this is a narrow string");
	cmdBytes.addStringWide("this is a wide string");
	cmdBytes.addBoolean(true);
	cmdBytes.addBoolean(false);
	
	var moreBytes = new Array();
	moreBytes.push(170);
	moreBytes.push(187);
	moreBytes.push(204);
	moreBytes.push(221);
	moreBytes.push(238);
	moreBytes.push(255);
	cmdBytes.addByteBuffer(moreBytes);
	
	var responseBytes = new PbUtilBytesHost(cmdBytes.getRawBytes());
	var responseVal = 0;
	responseVal = responseBytes.getNextAsByte();
	responseVal = responseBytes.getNextAsShort();
	responseVal = responseBytes.getNextAsInt();
	responseVal = responseBytes.getNextAsDouble();
	responseVal = responseBytes.getNextAsStringNarrow();
	responseVal = responseBytes.getNextAsStringWide();
	responseVal = responseBytes.getNextAsBoolean();
	responseVal = responseBytes.getNextAsBoolean();
	responseVal = responseBytes.getNextAsByteBuffer();
	var z = 0;
}
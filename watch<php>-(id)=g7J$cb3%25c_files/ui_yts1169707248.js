var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function showSheet(content)
{
	var sheet = document.getElementById('sheet');
	var sheetContent = document.getElementById('sheetContent');
	sheetContent.innerHTML = content;
	sheet.style.visibility = 'visible';
	return false;
}

function toggleVisibility(whichForm, setVisible)
{
	var newstate="none"
	if(setVisible == true) 
		newstate = ""

	if (document.getElementById)
	{
		// this is the way the standards work
		var style2 = document.getElementById(whichForm).style;
		style2.display = newstate;
	}
	else if (document.all)
	{
		// this is the way old msie versions work
		var style2 = document.all[whichForm].style;
		style2.display = newstate;
	}
	else if (document.layers)
	{
		// this is the way nn4 works
		var style2 = document.layers[whichForm].style;
		style2.display = newstate;
	}
}
	

function setInnerHTML(div_id, value)
{
	var dstDiv = document.getElementById(div_id);
	dstDiv.innerHTML = value;
}

function openPopup(url, name, height, width)
{
	newwindow=window.open(url, name,'height='+height+',width='+width);
	if (window.focus) {newwindow.focus()}
	return false;
}




function openDiv (elName) {
	var theElemenet = document.getElementById(elName);
	if (theElemenet) {
		theElemenet.style.display = "block";
	}
}
function closeDiv (elName) {
	var theElemenet = document.getElementById(elName);
	if (theElemenet) {
		theElemenet.style.display = "none";
	}
}

function showInline (elName) {
	var theElemenet = document.getElementById(elName);
	if (theElemenet) {
		theElemenet.style.display = "inline";
	}
}
function hideInline (elName) {
	var theElemenet = document.getElementById(elName);
	if (theElemenet) {
		theElemenet.style.display = "none";
	}
}


function blurElement (elName) {
	var theElement = document.getElementById(elName);
	if (theElement) {
		theElement.blur();
	}
}

function selectLink (elName) {
	var theElement = document.getElementById(elName);
	if (theElement) {
		theElement.className = "selectedNavLink";
	}
}
function unSelectLink (elName) {
	var theElement = document.getElementById(elName);
	if (theElement) {
		theElement.className = "unSelectedNavLink";
	}
}


function toggleDisplay(divName){
	var tempDiv = document.getElementById(divName);
	if (!tempDiv) {
		return;
	}  
	 if ((tempDiv.style.display=="block")||(tempDiv.style.display=="" && tempDiv.className.indexOf("hid") == 0)){
	 	tempDiv.style.display="none";
	 }
	 else {	
	 	if ((tempDiv.style.display=="none")||(tempDiv.className.indexOf("hid") != 0)){
			tempDiv.style.display="block";
		}
	 }
}

function hideDiv(divName){
	tempDiv = document.getElementById(divName);
	if (!tempDiv) {
		return;
	}
	if (tempDiv.style.display=="block"){
	     tempDiv.style.display="none";
	}
}

function showDiv(divName){
	tempDiv = document.getElementById(divName);
	if (!tempDiv) {
	  return;
	}
	if (tempDiv.style.display=="none"){
		tempDiv.style.display="block";
	 }
}


function changeBGcolor(tempDiv, onOrOff) {
	if(onOrOff==1) { tempDiv.style.backgroundColor='#DDD'; tempDiv.style.cursor='pointer';tempDiv.style.cursor='hand';}
	else {tempDiv.style.backgroundColor='#FFF'}

}

function imgRollover(imgIdArr)
{
	if (navigator.userAgent.match(/Opera (\S+)/)) {
		var operaVersion = parseInt(navigator.userAgent.match(/Opera (\S+)/)[1]);
	}
	if (!document.getElementById||operaVersion <7) return;
	var i=0;
	var imgId='';
	var imgEle='';
	var imgArr=new Array;
	for (i=0;i<imgIdArr.length;i++)
	{
		if (document.getElementById(imgIdArr[i]))
		{
			imgArr.push(document.getElementById(imgIdArr[i]));
		}
	}
	var imgPreload=new Array();
	var imgSrc=new Array();
	var imgClass=new Array();
	for (i=0;i<imgArr.length;i++)
	{
		if (imgArr[i].className.indexOf('rollover')>-1)
		{
// If for some reason images are stored outside of the /img dir, this will break
			imgSrc[i]=imgArr[i].getAttribute('src');
			imgClass[i]=imgArr[i].className;
			imgPreload[i]=new Image();
			if (imgClass[i].match(/rollover (\S+)/)) 
			{
				imgPreload[i].src = '/img/'+imgClass[i].match(/rollover (\S+)/)[1];
			}
			imgArr[i].setAttribute('rsrc', imgSrc[i]);
			imgArr[i].onmouseover=function() 
			{
				this.setAttribute('src', '/img/'+this.className.match(/rollover (\S+)/)[1])
			}
			imgArr[i].onmouseout=function() 
			{
				this.setAttribute('src',this.getAttribute('rsrc'))
			}
		}
	}
}

//validates forms with URL fields and adds http:// in front of the string
function validateURL(inputField){
     if (inputField.value.indexOf("http://")==0) {
          return false;
     } else {

     	  inputField.value="http://" + inputField.value;
          return true;
     }
}


}
/*
     FILE ARCHIVED ON 18:15:26 Jan 28, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:41:18 May 01, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 728.944
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.087
  RedisCDXSource: 0.565
  esindex: 0.008
  LoadShardBlock: 648.344 (3)
  PetaboxLoader3.datanode: 678.731 (4)
  CDXLines.iter: 33.36 (3)
  load_resource: 123.491
  PetaboxLoader3.resolve: 56.865
*/
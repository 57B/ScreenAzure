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

if ((navigator.appVersion.indexOf('MSIE') > -1) && (typeof window.XMLHttpRequest == 'undefined')) {
imgExt = '.gif';
}
else
{
//imgExt = '.gif';
imgExt = '.png';
}
var UT_RATING_IMG = '/img/icn_star_full_19x20'+imgExt;
var UT_RATING_IMG_HOVER = '/img/star_hover.gif';
var UT_RATING_IMG_HALF = '/img/icn_star_half_19x20'+imgExt;
var UT_RATING_IMG_BG = '/img/icn_star_empty_19x20'+imgExt;
var UT_RATING_IMG_REMOVED = '/img/star_removed.gif';

function UTRating(ratingElementId, maxStars, objectName, formName, ratingMessageId, componentSuffix, size, messages)
{
	this.ratingElementId = ratingElementId;
	this.maxStars = maxStars;
	this.objectName = objectName;
	this.formName = formName;
	this.ratingMessageId = ratingMessageId
	this.componentSuffix = componentSuffix
	this.messages = messages;

	this.starTimer = null;
	this.starCount = 0;

	if(size=='S') {
		UT_RATING_IMG      = '/img/icn_star_full_11x11.gif'
		UT_RATING_IMG_HALF = '/img/icn_star_half_11x11.gif'
		UT_RATING_IMG_BG   = '/img/icn_star_empty_11x11.gif'
	}
	
	// pre-fetch image
	(new Image()).src = UT_RATING_IMG;
	(new Image()).src = UT_RATING_IMG_HALF;

	function showStars(starNum, skipMessageUpdate) {
		this.clearStarTimer();
		this.greyStars();
		this.colorStars(starNum);
		if(!skipMessageUpdate)
			this.setMessage(starNum, messages);
	}

	function setMessage(starNum) {
//		messages = new Array("Rate this video", "Poor", "Nothing special", "Worth watching", "Pretty cool", "Awesome!");
		document.getElementById(this.ratingMessageId).innerHTML = this.messages[starNum];
	}

	function colorStars(starNum) {
		for (var i=0; i < starNum; i++) {
			document.getElementById('star_'  + this.componentSuffix + "_" + (i+1)).src = UT_RATING_IMG;
		}
	}

	function greyStars() {
		for (var i=0; i < this.maxStars; i++)
			if (i <= this.starCount) {
				document.getElementById('star_' + this.componentSuffix + "_"  + (i+1)).src = UT_RATING_IMG_BG;
			}
			else
			{
				document.getElementById('star_' + this.componentSuffix + "_"  + (i+1)).src = UT_RATING_IMG_BG;
			}
	}

	function setStars(starNum) {
		this.starCount = starNum;
		this.drawStars(starNum);
		document.forms[this.formName]['rating'].value = this.starCount;
		var ratingElementId = this.ratingElementId;
		postForm(this.formName, true, function (req) { replaceDivContents(req, ratingElementId); });
	}


	function drawStars(starNum, skipMessageUpdate) {
		this.starCount=starNum;
		this.showStars(starNum, skipMessageUpdate);
	}

	function clearStars() {
		this.starTimer = setTimeout(this.objectName + ".resetStars()", 300);
	}

	function resetStars() {
		this.clearStarTimer();
		if (this.starCount)
			this.drawStars(this.starCount);
		else
			this.greyStars();
		this.setMessage(0);
	}

	function clearStarTimer() {
		if (this.starTimer) {
			clearTimeout(this.starTimer);
			this.starTimer = null;
		}
	}

	this.clearStars = clearStars;
	this.clearStarTimer = clearStarTimer;
	this.greyStars = greyStars;
	this.colorStars = colorStars;
	this.resetStars = resetStars;
	this.setStars = setStars;
	this.drawStars = drawStars;
	this.showStars = showStars;
	this.setMessage = setMessage;

}


}
/*
     FILE ARCHIVED ON 13:28:11 Mar 31, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:09:13 Apr 28, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 336.651
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.077
  RedisCDXSource: 2.349
  esindex: 0.007
  LoadShardBlock: 118.446 (3)
  PetaboxLoader3.datanode: 106.282 (4)
  CDXLines.iter: 27.127 (3)
  load_resource: 94.803
  PetaboxLoader3.resolve: 52.589
*/
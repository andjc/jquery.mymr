/*
 * jquery.mymr.js
 *
 * License: MIT license
 *
 * Contact:
 * A. Cunningham
 * lang.support <AT> gmail <DOT> com
 *
 * Version 0.3
 *
 * 2014-07-13
 */

/*
 * Control flags for configuration of script
 */

if(typeof mymrLBFlag == 'undefined') {
    var mymrLBFlag = false;
}

if(typeof mymrLang == 'undefined') {
    var mymrLang = jQuery('html')[0].lang;
}

if(typeof olListType == 'undefined') {
	var olListType = "";
}

if(typeof ulListType == 'undefined') {
	var ulListType = "";
}

/*
if (!x) {
    do something
}
*/


/*
 * mymrLineBrk(mymrLang, content)
 * jQuery function to insert ZWSP at syllable boundaries to allow line breaking for Myanmar script languages.
 * Currently supports: Burmese, Mon, S'gaw Karen
 *
 * Burmese rules developed with assistance of Ngwe Tun
 * Mon rules developed with assistance of Talachan

 *
 * Supported languages:
 *   - Burmese (my)
 *   - Rakhine (rki)
 *   - Tavoyan (tvn)
 *   - Intha (int)
 *   - Mon (mnw)
 *   - Sgaw Karen (ksw)
 *   - Shan (shn)
 *   - Khamti Shan  kht)
 *
 * Todo:
 *  - Western Pwo Karen (pwo)
 *  - Eastern Pwo Karen (kjp)
 *  - Pa'o Karen (blk)
 *  - Kayah (kyu)
 *  - Asho Chin (csh)
 *  - Aiton (aio)
 *  - Phake (phk)
 *  - Tai Laing (tle)
 *  - Shwe Palaung (pll)
 *  - Pale Palaung (pce)
 *  - Rumai Palaung (rbb)
 */


function mymrLineBrk(docLang, content) {

    switch (docLang) {
        case "my":
        case "rki":
        case "tvn":
        case "int":
            // Unicode 5.1 to Unicode 5.2
            content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
            // Burmese break points - insert ZWSP before consonants and independant vowels
            // ([က-အဣ-ဧဩဪဿ၌-၏])
            content = content.replace(/([က-အဣ-ဧဩဪဿ၌-၏])/g, '\u200B$1');
            //Suppress unwanted breakpoints
            content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|>|\u201C|\u2018|\-|\(|\[|{|[\u2012-\u2014]|\u1039)\u200B([\u1000-\u1021])/g, '$1$2');
            content = content.replace(/\u200B(\u1004\u103A\u1039)/g, '$1');
            content = content.replace(/\u200B([က-အ]\u103A)/g, '$1');
            content = content.replace(/(\s|\n)\u200B([က-အဣ-ဧဩဪဿ၌-၏])/g, '$1$2');
            content = content.replace(/([က-အ])\u200B([က-အ])/g, "$1$2");
            break;
 
        case "ksw":
            // Unicode 5.1 to Unicode 5.2
            // content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
            // S'gaw Karen break points
            content = content.replace(/([\u1000-\u1006\u100a\u1010-\u1012\u1014-\u1016\u1018-\u101f\u1021\u1027\u1061])/g, '\u200B$1');
            //Suppress unwanted breakpoints
            content = content.replace(/(^|[\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|\||>|[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u104A-\u104F\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E]|\u200B)\|/g, '$1');
            break;
 
        case "pwo":
            break;
 
        case "kjp":
            break;
 
        case "blk":
            break;
 
        case "mnw":
            // Unicode 5.1 to Unicode 5.2
            content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
            // Mon break points
            content = content.replace(/([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u1023\u1025\u1028-\u102A\u105A-\u105D])/g, '\u200B$1');
            //Suppress unwanted breakpoints
            content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|>|\u201C|\u2018|\-|\(|\[|{|[\u2012-\u2014]|\u1039)\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u105A-\u105D])/g, '$1$2');
            content = content.replace(/\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u105A-\u105D]\u103A)/g, '$1');
            content = content.replace(/(\s|\n)\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u1023\u1025\u1028-\u102A\u105A-\u105D])/g, '$1$2');
            break;
 
        case "kyu":
            break;
 
        case "csh":
            break;
 
        case "shn":
            // Unicode 5.1 to Unicode 5.2
            // content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
            // Shan break points
            content = content.replace(/([\u1004\u1010\u1011\u1015\u1019-\u101E\u1022\u1075-\u1081\u109E\u109F])/g, '\u200B$1');
            //Suppress unwanted breakpoints
            content = content.replace(/\u200B([\u1004\u1010\u1011\u1015\u1019-\u101C\u101E\u1022\u1075-\u1079\u107B-\u1081\u109E\u109F]\u103A)/g, '$1');
            content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f>\u201C\u2018\-\(\[{\u2012-\u2014])\u200B([\u1004\u1010\u1011\u1015\u1019-\u101E\u1022\u1075-\u1081\u109E\u109F])/g, '$1$2');
            break;
 
        case "kht":
            // Unicode 5.1 to Unicode 5.2
            // content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
            // Khmati Shan break points
            content = content.replace(/([\u1000\u1002\u1004\u1010\u1011\u1015\u1019-\u101D\u1022\u1075\u1078\u1079\u107B\u107C\u107F\u1080\uAA60-\uAA6F\uAA71-\uAA76])/g, '\u200BjQuery1');
            //Suppress unwanted breakpoints
            content = content.replace(/\u200B([\u1000\u1004\u1010\u1015\u1019\u101D\uAA65\uAA6B]\u103A)/g, '$1');
            content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f>\u201C\u2018\-\(\[{\u2012-\u2014])\u200B([\u1000\u1002\u1004\u1010\u1011\u1015\u1019-\u101D\u1022\u1075\u1078\u1079\u107B\u107C\u107F\u1080\uAA60-\uAA6F\uAA71-\uAA76])/g, '$1$2');
            break;
 
        case "aio":
        case "phk":
            break;
 
        case "tle":
            break;
 
        case "pll":
            break;
 
        case "pce":
            break;
 
        case "rbb":
            break;
 
        default:
            content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
            break;
    }

    return content;

}

/*
 * Execute when document is ready
 *
 *
 */


function convertDigits(system,num) {

	String.prototype.allReplace = function(obj) {
        var retStr = this
        for (var x in obj) {
        	retStr = retStr.replace(new RegExp(x, 'g'), obj[x])
    	}
    	return retStr;
    }

    var map = ""
    switch (system) {
        case 'myanmar':
            map = {0:'\u1040',1:'\u1041',2:'\u1042',3:'\u1043',4:'\u1044',5:'\u1045',6:'\u1046',7:'\u1047',8:'\u1048',9:'\u1049'};
            break;     
        case 'shan':
            map = {0:'\u1090',1:'\u1091',2:'\u1092',3:'\u1093',4:'\u1094',5:'\u1045',6:'\u1096',7:'\u1097',8:'\u1098',9:'\u1099'};
            break;
        default:
            break;
	}
    return num.toString().allReplace(map);
}


function mymrGenerateNumericList(digitSystem) {
	$("ol>li:not(ol>li>ol>li)").each(function(i){
		$(this).attr('item-value', convertDigits(digitSystem,i+1));
	});

	$("ol ol").each(function(i){
		$(this).addClass("secondlvl");
	});

	$("ol.secondlvl").each(function(i){
		jQuery("li", this).each(function(i){
			$(this).attr('item-value', convertDigits(digitSystem,i+1));
		});
	});

	$("ol ol ol").each(function(i){
		$(this).addClass("thirdlvl");
	});

	$("ol.thirdlvl").each(function(i){
		jQuery("li", this).each(function(i){
			$(this).attr('item-value', convertDigits(digitSystem,i+1));
		});
	});
}

function mymrGenerateAlphabeticList(consonants) {
	$("ol>li:not(ol>li>ol>li)").each(function(i){
		if(i <= 31){
			$(this).attr('item-value', consonants[i]);
		} else {
			var quot = Math.floor(i/32) - 1;
			var rem = i%32;
			$(this).attr('item-value', consonants[quot] + consonants[rem]);
		}
	});

	$("ol>li>ol").each(function(i){
		$(this).addClass("secondlvl");
	});

	$("ol.secondlvl").each(function(){
		$(this).children("li").each(function(j){
			if(j <= 31){
				$(this).attr('item-value', consonants[j]);
			} else {
				var quot = Math.floor(j/32) - 1;
				var rem = j%32;
				$(this).attr('item-value', consonants[quot] + consonants[rem]);
			}
		});
	});
					
	$("ol ol ol").each(function(i){
		$(this).addClass("thirdlvl");
	});

	$("ol.thirdlvl").each(function(){
		$(this).children().each(function(k){
			if(k <= 31){
				$(this).attr('item-value', consonants[k]);
			} else {
				var quot = Math.floor(k/32) - 1;
				var rem = k%32;
				$(this).attr('item-value', consonants[quot] + consonants[rem]);
			}
		});
	});

}

/*
 * mymrLists(reqListTypeUL,reqListTypeOL)
 * 
 * Call:
 *  mymrLists("dash","");
 *  Requires only faalback for unordered lists
 * 
 *  mymrLists("dash","myanmar");
 *  Specifies fallback for both ordered and unordered lists.
 * 
 * Need to define list in pages CSS
 *
 */

function mymrLists(reqListTypeUL,reqListTypeOL) {
	if(reqListTypeUL) {
		var listTypeUL = jQuery( "ul" ).css( "list-style-type" );
		if(listTypeUL !== reqListTypeUL) {
      var listRuleUL = "";
			if(reqListTypeUL == "dash") {
				listRuleUL = 'ul{list-style-type:none} ul li {display:block} ul li:before {content:"– "}';
				jQuery('head').append('<style>' + listRuleUL + '</style>');
			} else if(reqListTypeUL == "hyphen") {
				listRuleUL = "ul{list-style-type:none}ul li{display:block}ul li:before{content:"- "}";
				jQuery('head').append('<style>' + listRuleUL + '</style>');
			}
		}
	}  

	if(reqListTypeOL) {
		var listTypeOL = jQuery( "ol" ).css( "list-style-type" );
		if(listTypeOL !== reqListTypeOL) {

			var listRuleOL = "ol{list-style-type:none}  ol li{display:block} ol li:before{content: '(' attr(item-value) ') '}";
			jQuery('head').append('<style>' + listRuleOL + '</style>');

			var mymrMap = "";
			var mymrDigitSystem = "";
			switch(reqListTypeOL) {
				case 'rakhine-consonant':
				case 'tavoyan-consonant':
				case 'intha-consonant':
				case 'burmese-consonant':
					var mymrMap = ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"];
			    	mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'mon-consonant':
					var mymrMap = ["က","ခ","ဂ","ဃ","ၚ","စ","ဆ","ဇ","ၛ","ဉ","ည","ဋ","ဌ","ဍ","ဎ","ဏ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ","ၜ","ၝ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'sgaw-karen-consonant':
					var mymrMap = ["က","ခ","ဂ","ဃ","င","စ","ဆ","ၡ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","အ","ဧ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'western-pwo-karen-consonant':
					var mymrMap = ["က","ခ","ဂ","ဎ","င","စ","ဆ","ဇ","ည","ၡ","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","ၥ","ဟ","အ","ဧ","ၦ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'eastern-pwo-karen-consonant':
					var mymrMap = ["က","ခ","င","စ","ဆ","ည","တ","ထ","ဍ","န","ၮ","ပ","ဖ","ၜ","မ","ယ","ရ","လ","ဝ","ဟ","အ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'poa-karen-consonant':
					var mymrMap = ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","ဏ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'kayah-consonant':
					var mymrMap = ["က","ခ","ဃ","င","စ","ဆ","ဇ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","အ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'asho-chin-consonant':
					var mymrMap = ["က","ခ","ဂ","င","စ","ဆ","ဇ","ည","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","ၡ","လ","ဝ","ဟ","အ","ဧ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'shan-consonant':
					var mymrMap = ["ၵ","ၶ","ၷ","င","ၸ","သ","ၺ","ၹ","တ","ထ","ၻ","ၼ","ပ","ၽ","ၾ","ၿ","မ","ယ","ရ","လ","ဝ","ႀ","ႁ","ဢ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'khamti-shan-consonant':
					var mymrMap = ["က","ၵ","ꩱ","ဂ","င","ꩡ","ꩢ","ꩣ","ꩤ","ꩥ","ꩦ","ꩧ","ꩨ","ꩩ","ၼ","တ","ထ","ၻ","ꩪ","ꩫ","ပ","ၸ","ၿ","ၹ","မ","ယ","ရ","လ","ဝ","ꩬ","ꩭ","ꩮ","ဢ","ꩯ","ႀ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'aiton-consonant':
				case 'phake-consonant':
					var mymrMap = ["က","ၵ","င","ꩡ","ၺ","တ","ထ","ꩫ","ပ","ၸ","မ","ယ","ꩺ","လ","ဝ","ꩭ","ဢ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				//case 'tai-laing-consonant':
				//	var mymrMap = ["က","ၵ","င","ၸ","ꩬ","ꧧ","တ","ထ","ꩫ","ပ","ꧤ","ꧨ","မ","ယ","ꩺ","လ","ဝ","ၯ","ဢ"];
				//	mymrGenerateAlphabeticList(mymrMap);
				//	break;
				//case 'shwe-palaung-consonant':
				//	var mymrMap = ["1000","ခ","ꩾ","ဂ","င","စ","ဆ","ꩿ","ဇ","ဈ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","ႎ","ႎှ","သ","ဟ","အ","ျ","ြ","ွ","ှ","္လ"];
				//	mymrGenerateAlphabeticList(mymrMap);
				//	break;
				case 'pale-palaung-consonant':
					var mymrMap = ["က","ခ","ဂ","င","စ","စှ","ဆ","ဇ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","ဟ","အ","ဝှ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'rumai-palaung-consonant':
					var mymrMap = ["က","ခ","ဂ","င","စ","ဆ","ဇ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ႎ","ဝ","ဟ","အ"];
					mymrGenerateAlphabeticList(mymrMap);
					break;
				case 'myanmar-parens':
				case 'myanmar':
					mymrDigitSystem = "myanmar";
					mymrGenerateNumericList(mymrDigitSystem);
					break;
				case 'shan':
					mymrDigitSystem = "shan";
					mymrGenerateNumericList(mymrDigitSystem);
					break;
				default:
					break;
			}

		}
	} 
}


/*
 * Execute when document is ready
 *
 *
 */

jQuery(document).ready(function () {
	if (mymrLBFlag) {
		if(mymrLang != null){
        	jQuery("body").html( function(i, oldhtml ) {
            	return mymrLineBrk( mymrLang, oldhtml );
        	});
    	} else {
        	jQuery('*:lang(my)').html( function(i, oldhtml) {
            	return mymrLineBrk( "my", oldhtml );
        	});
    	}
	}

	if (olListType != "" || ulListType != "" ) { mymrLists(ulListType,olListType); }

	
	
});


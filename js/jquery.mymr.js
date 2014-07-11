/*
 * jquery.mymr.js
 *
 *
 *
 * License: GPL 3.0
 *
 * Contact:
 * A. Cunningham
 * lang.support <AT> gmail <DOT> com
 *
 * 2013-04-08
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
 * Execute whe document is ready
 *
 *
 */


function convertDigits(system,num) {

    String.prototype.allReplace = function(obj) {
        var retStr = this
        for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x])
    }
    return retStr
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
    // alert(num.toString().allReplace(map));
    return num.toString().allReplace(map);
}


function convertConsonants(system,num) {

    String.prototype.allReplace = function(obj) {
        var retStr = this
        for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x])
    }
    return retStr
    }

    var map = ""
    switch (system) {
        case 'burmese-consonant':
            map = {0:"က",1:"ခ",2:"ဂ",3:"ဃ",4:"င",5:"စ",6:"ဆ",7:"ဇ",8:"ဈ",9:"ည",10:"ဋ",11:"ဌ",12:"ဍ",13:"ဎ",14:"တ",15:"ထ",16:"ဒ",17:"ဓ",18:"န",19:"ပ",20:"ဖ",21:"ဗ",22:"ဘ",23:"မ",24:"ယ",25:"ရ",26:"လ",27:"ဝ",28:"သ",29:"ဟ",30:"ဠ",31:"အ"};
            break;     
        case 'burmese-consonant-double':
            map = {0:"က",1:"ခ",2:"ဂ",3:"ဃ",4:"င",5:"စ",6:"ဆ",7:"ဇ",8:"ဈ",9:"ည",10:"ဋ",11:"ဌ",12:"ဍ",13:"ဎ",14:"တ",15:"ထ",16:"ဒ",17:"ဓ",18:"န",19:"ပ",20:"ဖ",21:"ဗ",22:"ဘ",23:"မ",24:"ယ",25:"ရ",26:"လ",27:"ဝ",28:"သ",29:"ဟ",30:"ဠ",31:"အ"};
            break;
        default:
            break;
}
    // alert(num.toString().allReplace(map));
    return num.toString().allReplace(map);
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
		alert("Unordered lists: " + listTypeUL);
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
		alert("Ordered lists: " + listTypeOL);
		if(listTypeOL !== reqListTypeOL) {

			var listRuleOL = "ol{list-style-type:none}  ol li{display:block} ol li:before{content: '(' attr(item-value) ') '}";
			jQuery('head').append('<style>' + listRuleOL + '</style>');

			// append css hack 
			
			/*
			if(reqListTypeOL == "burmese-consonant") {
				var alpha = ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"];

				
				$("ol>li:not(ol>li>ol>li)").each(function(i){
				    $(this).attr('item-value', alpha[i]);
				});

				$("ol ol").each(function(i){
				    $(this).addClass("secondlvl");
				});

				$("ol.secondlvl").each(function(i){
				    jQuery("li", this).each(function(i){
				    	$(this).attr('item-value', alpha[i]);
				    });
				});

				$("ol ol ol").each(function(i){
				    $(this).addClass("thirdlvl");
				});

				$("ol.thirdlvl").each(function(i){
				    jQuery("li", this).each(function(i){
				    	$(this).attr('item-value', alpha[i]);
				    });
				}); 
*/

			if(reqListTypeOL == "burmese-consonant") {
			    var consonants = ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"];
			    $("ol>li:not(ol>li>ol>li)").each(function(i){
				    if(i <= 31){
					$(this).attr('item-value', consonants[i]);
				    } else {
					var quot = Math.floor(i/32) - 1;
					var rem = i%32;
					$(this).attr('item-value', consonants[quot] + consonants[rem]);
				    }
				});

				$("ol ol").each(function(i){
				    $(this).addClass("secondlvl");
				});

				$("ol.secondlvl>li").each(function(j){
				    if(j <= 31){
					$(this).attr('item-value', consonants[j]);
				    } else {
					var quot = Math.floor(j/32) - 1;
					var rem = j%32;
					$(this).attr('item-value', consonants[quot] + consonants[rem]);
				    }
				});
				

				$("ol ol ol").each(function(i){
				    $(this).addClass("thirdlvl");
				});

				$("ol.thirdlvl>li").each(function(k){
				    if(k <= 31){
					$(this).attr('item-value', consonants[k]);
				    } else {
					var quot = Math.floor(k/32) - 1;
					var rem = k%32;
					$(this).attr('item-value', consonants[quot] + consonants[rem]);
				    }
				});
			    
			    
			    
			    
			    
			    

			// } else if(reqListTypeOL == "myanmar" || reqListTypeOL == "-moz-myanmar") {
			} else if(reqListTypeOL == "myanmar") {

				$("ol>li:not(ol>li>ol>li)").each(function(i){
				    $(this).attr('item-value', convertDigits('myanmar',i+1));
				});

				$("ol ol").each(function(i){
				    $(this).addClass("secondlvl");
				});

				$("ol.secondlvl").each(function(i){
				    jQuery("li", this).each(function(i){
				    	$(this).attr('item-value', convertDigits('myanmar',i+1));
				    });
				});

				$("ol ol ol").each(function(i){
				    $(this).addClass("thirdlvl");
				});

				$("ol.thirdlvl").each(function(i){
				    jQuery("li", this).each(function(i){
				    	$(this).attr('item-value', convertDigits('myanmar',i+1));
				    });
				});


			} else if(reqListTypeOL == "shan") {

				$("ol>li:not(ol>li>ol>li)").each(function(i){
				    $(this).attr('item-value', convertDigits('shan',i+1));
				});

				$("ol ol").each(function(i){
				    $(this).addClass("secondlvl");
				});

				$("ol.secondlvl").each(function(i){
				    jQuery("li", this).each(function(i){
				    	$(this).attr('item-value', convertDigits('shan',i+1));
				    });
				});

				$("ol ol ol").each(function(i){
				    $(this).addClass("thirdlvl");
				});

				$("ol.thirdlvl").each(function(i){
				    jQuery("li", this).each(function(i){
				    	$(this).attr('item-value', convertDigits('shan',i+1));
				    });
				});


			}


		}
	} 
}

jQuery(function () {

  if (mymrLBFlag) {

    if(mymrLang != null){
        jQuery("body").html( function(i, oldhtml ) {
            return mymrLineBrk( mymrLang, oldhtml );
        });
    }
    else{
        jQuery('*:lang(my)').html( function(i, oldhtml) {
            return mymrLineBrk( "my", oldhtml );
        });
    }

  }

});

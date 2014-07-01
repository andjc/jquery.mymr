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

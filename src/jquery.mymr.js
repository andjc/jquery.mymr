/*
 * jquery.mymr.js
 *
 * jQuery function to insert ZWSP at syllable boundaries to allow line breaking for Myanmar script languages.
 * Currently supports: Burmese, Mon, S'gaw Karen 
 *
 * Burmese rules developed by A. Cunningham and Ngwe Tun
 * Mon rules developed by A. Cunningham and Talachan
 * S'gaw Karen rules developed by A. Cunningham
 *
 * Todo:
 *  * replace \| with  
 *  * minify
 *
 * License: GPL 3.0
 *
 * Contact:
 * A. Cunningham
 * lang.support <AT> gmail <DOT> com
 *
 * 2013-03-31
 */
$(document).ready(function () {
    // var docLang = $('html').attr('lang');
    var docLang = "my";
    switch (docLang) {
        case "my":
            // Unicode 5.1 to Unicode 5.2
            $("body").html($("body").html().replace(/(\u103A)(\u1037)/g, '$2$1'));
            // Burmese break points - insert ZWSP before consonants and independant vowels
            // ([က-အဣ-ဧဩဪ])
            $("body").html($("body").html().replace(/([\u1000-\u1021\u1023-\u1027\u1029\u102A])/g, '\u200B$1'));
            //Suppress unwanted breakpoints
            $("body").html($("body").html().replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|>|\u201C|\u2018|\-|\(|\[|{|[\u2012-\u2014]|\u1039)\u200B([\u1000-\u1021])/g, '$1$2'));
            $("body").html($("body").html().replace(/\u200B(\u1004\u103A\u1039)/g, '$1'));
            $("body").html($("body").html().replace(/\u200B([က-အ]\u103A)/g, '$1'));
            $("body").html($("body").html().replace(/(\s|\n)\u200B([က-အဣ-ဧဩဪ])/g, '$1$2'));
            break;

        case "ksw":
            // Unicode 5.1 to Unicode 5.2 
            $("body").html($("body").html().replace(/(\u103A)(\u1037)/g, '$2$1'));
            // S'gaw Karen break points
            $("body").html($("body").html().replace(/([\u1000-\u1006\u100a\u1010-\u1012\u1014-\u1016\u1018-\u101f\u1021\u1027\u1061])/g, '\u200B$1'));
            //Suppress unwanted breakpoints
            $("body").html($("body").html().replace(/(^|[\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|\||>|[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u104A-\u104F\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E]|\u200B)\|/g, '$1'));
            break;

        case "mnw":
            // Unicode 5.1 to Unicode 5.2 
            $("body").html($("body").html().replace(/(\u103A)(\u1037)/g, '$2$1'));
            // Mon break points
            $("body").html($("body").html().replace(/([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u1023\u1025\u1028-\u102A\u105A-\u105D])/g, '\u200B$1'));
            //Suppress unwanted breakpoints
            $("body").html($("body").html().replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|>|\u201C|\u2018|\-|\(|\[|{|[\u2012-\u2014]|\u1039)\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u105A-\u105D])/g, '$1$2'));
            $("body").html($("body").html().replace(/\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u105A-\u105D]\u103A)/g, '$1'));
            $("body").html($("body").html().replace(/(\s|\n)\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u1023\u1025\u1028-\u102A\u105A-\u105D])/g, '$1$2'));
            break;

        default:
            $("body").html($("body").html().replace(/(\u103A)(\u1037)/g, '$2$1'));
            break;
    }
});
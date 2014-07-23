jQuery Mymr
===========

jQuery support for language specific Myanmar script languages. Currently implements hacks for:

1. line breaking at syllable boundaries, and
2. list markers

This is a javascript port of PHP functions and a Drupal module used by the State Library of Victoria.
This project is an Open Road initiative to provide language technology tools to wider audience outside our projects.


Quick start
----------

1. download jquery.mymr.min.js;
2. provide link to jQuery core library, eithe ron your server or through a CDN;
3. identify language; then
4. provide link to jquery.mymr.min.js.

There are two ways of defining the langauge rules to be used:

1. add a lang attribute ot the html element:
```html
<html lang="my">
<head>
    <meta charset="UTF-8"/>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" ></script>
    <script src="/path/to/jquery.mymr.min.js" ></script>
```
2. Enable and configure line breaking
```html
<html>
<head>
    <meta charset="UTF-8"/>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" ></script>
    <script src="/path/to/jquery.mymr.min.js" ></script>
    <script>
        /* set language for line breaking  */
        var mymrLang="my";
        /* Enable line breaking. This variable is false by default  */
        var mymrLBFlag = true;
    </script>
```
3. Enable and configure list support
```html
<html>
<head>
    <meta charset="UTF-8"/>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" ></script>
    <script src="/path/to/jquery.mymr.min.js" ></script>
    <script>
        /* Enable list support for unordered lists  */
        var ulListType = "dash";
        /* Enable list support for ordered lists  */
        var olListType = "myanmar-parens";
    </script>
```

The list types defeined for the script must match teh values defined in the stylesheet used by the page.

Supported markers
----------



Limitations
----------


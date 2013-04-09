jQuery Mymr
===========

jQuery support for language specific Myanmar script line breaking at syllable boundaries.
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
2. define a variable identifying language:
```html
<html>
<head>
    <meta charset="UTF-8"/>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" ></script>
    <script>var mymrLang = "my";</script>
    <script src="/path/to/jquery.mymr.min.js" ></script>
```









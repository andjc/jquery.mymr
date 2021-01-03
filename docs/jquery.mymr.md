# jQuery.mymr.js

## Adding jQuery.mymr

The jQuery.mymr script has been developed to provide an easy way to improve web typography and typesetting for web pages written in the Myanmar script. The script requires jQuery. Many websites currently use jQuery, but if it is not in use add the core jQuery library:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js" ></script>
```

But, if you are uncertain if jQuery is being used, the following code can be added to the website instead, to check for the presence of jQuery and insert it if required:

```html
<script>
if (!window.jQuery) {
    var jq = document.createElement('script'); jq.type = 'text/javascript';
    // Path to jquery.js file, eg. Google hosted version
    jq.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
    document.getElementsByTagName('head')[0].appendChild(jq);
}
</script>
```

Download [jquery.mymr.min.js](https://raw.githubusercontent.com/andjc/jquery.mymr/master/js/jquery.mymr.js)

Upload script to server and add the following code to page , theme or template:

```html
<script type="text/javascript" src="/path/to/jquery.mymr.min.js"></script>
```

** Using jQuery.mymr

* [Line breaking](jquery-line-breaking.md)
* [HTML Lists](jquery-html-lists.md)



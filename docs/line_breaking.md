Not all web browsers adequately support line breaking for Myanmar script, jQuery.mymr implements a stop gap measure to provide somewhat better line breaking. Ideally, line breaking opportunities should be available between words, where this is not feasible, the next best break opportunities are at syllable boundaries. Not all syllable boundaries need to be breakpoints.

The script attempts to insert _Zero Width Space_ automatically at potential line breaking points between syllables. The script is being improved and refined over time, and additional languages are being included.

## Configuring line breaking

It is necessary to:

* enable line breaking support; and 
* identify the language being used.

```html
<script>
  /* Enable line breaking. This variable is false by default  */
  var mymrLBFlag = true;
  /* set language for line breaking  */
  var mymrLang="my";
</script>
```

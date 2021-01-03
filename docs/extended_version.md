Extended Version of mymr
==========================

## Ready Work

**mymr** declare to find ordered list in document  
but for some purpose, it don't tie with ready assignment  
To declare will, this script should place in bottom of body  

Or we can use declare script as follow  
```js
$.mymr();
```

## Syllable Break Point
```js
$("p").mymrSyllBreak([langauge type])
```

language type can be iso or fullname.
support name can be found in ISO


## Ordered List

###Type

Can be use ISO or fullname  
For digits just add ```dig-``` in front of iso or fullname

###isRoot

```isRoot``` mean to work the whole ordered list as the same as that element

- start: Start count
- reversed: Reversed loop

###HTML

```html
<ol data-mymrol='dig-shan, isRoot'>
	<li>one</li>
	<li>
		two
		<ol>
			<li>two-one</li>
			<li>two-two</li>
		</ol>
	</li>
	<li>three</li>
</ol>
```

```data-mymrol='[type], [isRoot]'```

###JavaScript

```js
$("#id").mymrOrderList("shan", {
	affix: "-x-",
	start: 11,
	reversed: true
});
```

Type can be use iso, for digits just add dig- in front of iso

## ISO

Supported iso and fullnames  
**iso: fullname**

- "my": "myanmar",
- "rki": "rakhine",
- "tvn": "tavoyan",
- "int": "intha",
- "ksw": "sgawKaren",
- "pwo": "westernPwoKaren",
- "kjp": "easternPwoKaren",
- "blk": "poaKaren",
- "mnw": "mon",
- "kyu": "kayah",
- "csh": "ashoChin",
- "shn": "shan",
- "kht": "khamtiShan",
- "aio": "aiton",
- "phk": "phake",
- "tle": "taiLaing",
- "pll": "shwePalaung",
- "pce": "palePalaung",
- "rbb": "rumaiPalaung"

## Affix

- parens: (x)
- sm: x[Potema]

Affix can also set with "x" separator  
eg: "-x-", 'x> '

We can set global affix with the following function  
**Reamrk:** set the setting and reset the setting will run **mymr** agin

```js
$.mymrSetting({
	affix: "-x-"
});
```

For reset setting  
```js
$.mymrReset();
```

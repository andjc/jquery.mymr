# jquery.mymr.extend.js

## Example

### Ordered List
using type on ordered list
by adding dig- mean to list them as digits
```html
<ol type='dig-shan'>
    <li>Maung Maung</li>
    <li>Tun Tun</li>
</ol>
```

### available types
**Digits**: "dig-{my|myanmar|shn|shan}"
**Consonants** "{iso or fullname}"

### jquery function 
``` mymrOrderlist( [languagetype [iso or fullname]], [affix, default: parens], [isRoot] ```
**isRoot** mean change to the whole ol list
```js
$("#some").mymrOrderlist('dig-myanmar', false, true);
$("#some").mymrOrderlist('myanmar', false);
$("#some").mymrOrderlist('shan', false, true);
```
=========

# SyallBreak
```js
$("#someid").mymrSyllBreak("myanmar")
```


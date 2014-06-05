jquery.filterChildren.js
========================
Prepends an input field to an element, witch allows live-filtering of children by text.


Usage
----

```
var defaults = {
  childSelector: "> *" // only direct Children
};


$('ul').filterChildren();
$('table').filterChildren({
  childSelector: 'tr'
});
```

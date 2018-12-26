### Grid-like layout system.

The layout object provides us with a column-style layout system. This file contains the basic structural elements, but classes should be complemented with width utilities, for example:
 
```html
<div class="o-layout">
  <div class="o-layout__item  u-1/2">
  </div>
  <div class="o-layout__item  u-1/2">
  </div>
</div>
```

The above will create a two-column structure in which each column will fluidly fill half of the width of the parent. We can have more complex systems:
```html
<div class="o-layout">
  <div class="o-layout__item  u-1/1  u-1/3@medium">
  </div>
  <div class="o-layout__item  u-1/2  u-1/3@medium">
  </div>
  <div class="o-layout__item  u-1/2  u-1/3@medium">
  </div>
</div>
```

The above will create a system in which the first item will be 100% width until we enter our medium breakpoint, when it will become 33.333% width. The second and third items will be 50% of their parent, until they also become 33.333% width at the medium breakpoint.

We can also manipulate entire layout systems by adding a series of modifiers to the `.o-layout` block. For example:

```html
  <div class="o-layout  o-layout--reverse">
```

This will reverse the displayed order of the system so that it runs in the opposite order to our source, effectively flipping the system over.

```html
  <div class="o-layout  o-layout--[right|center]">
```

This will cause the system to fill up from either the centre or the right hand side. Default behaviour is to fill up the layout system from the left.

There are plenty more options available to us: explore them below.

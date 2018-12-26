# WIDTHS

inuitcss generates a series of utility classes that give a fluid width to whichever element they’re applied, e.g.:

```html
<img src="" alt="" class="u-1/2" />
```

These classes are most commonly used in conjunction with our layout system, e.g.:

```html
<div class="o-layout__item  u-1/2">
```

By default, inuitcss will also generate responsive variants of each of these classes by using your Sass MQ configuration, e.g.:

```html
  <div class="o-layout__item  u-1/1  u-1/2@tablet  u-1/3@desktop">
```

Optionally, inuitcss can generate offset classes which can push and pull elements left and right by a specified amount, e.g.:

```html
  <div class="o-layout__item  u-2/3  u-pull-1/3">
```

This is useful for making very granular changes to the rendered order of items in a layout.

N.B. This option is turned off by default.

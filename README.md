# Fabric is your friend

Fabric is a lightweight SCSS framework that you can use for just about any design related need. It artfully handles the boring plumbing of most common design tasks freeing you to focus on value added design.

While Fabric plays nicely with just about any build, and supports friendly aliasing in webpack [if you're using the NPM module](https://www.npmjs.com/package/@flickerbox/fabric), you could also just add the files to your project for selective use.


## Intro

Fabric makes extensive use of variables, placeholders, mixins, and functions. This makes it easy to extend and augment just the pieces you need to customize while allowing you to defer to Fabric for repetative, shared, or otherwise unchanged styles selectively without writing large blocks of repetative code to override default/base styles.

## Example

A nice example of this structure in action is header styling. In the base typography file (`fabric/sass/base/_typography.scss`) we target both the element `h1` and the class selector `.h1` to apply our styles. We use these selectors to extend the `%h1` placeholder located in our base placeholders (`fabric/sass/base-placeholders/_h1.scss`). 

In the base placeholder we extend the `%Heading` placeholder and include our `font` mixin. This font mixin serves as a type of wrapper which in trun utilizes a number of other mixins. For the sake of example we'll just look at one, but they are all similar in structure.

The `font-size` mixin utilized in `font` allows you to reference a single size, or a group of font sizes (via a map) with responsive sizing included by default from the `responsive-property` mixin. In the font variables file (`fabric/sass/variables/_font.scss`) you'll see the `$font-size` map that contains the defined font sizes. By default these are single values, however, in your own variables file you can override this with your own values and change the sizes to a map.

#### Single Value (Default)
```
$font-size: (
	...
	'h1':   48px
)                                                             !default;
```

This sets a font-size for all `h1` elements and `.h1` classes to 48px.

#### Map of Values (Responsive)
```
$font-size: (
	...
	'h1': ('x-large': 42px, 'large': 38px, 'medium': 32px, 'x-small': 32px)
)
```
This sets variable font sizes across the defined breakpoints (see: ./sass/variables/_breakpoints.scss) for responsive font display.

These mixins provide a convenient means to apply multiple styles to a given class with ease, however, they are also mix and match. Using the `font` mixin will allow you to apply; size, weight, spacing, and height, but you can also use the constituent mixins directly for custom styling.

```
.unique-header-variation {
	@include font(h2);
	@include font-weight(h3);
}
```

This makes it easy to style multiple elements in combination for further custom styling while keeping everything consistent.


## Documentation

[Browse our SassDoc documentation here to learn more about Fabric.](https://flickerbox.github.io/fabric/docs/index.html)

## Author

Fabric is a work of [our contributors](https://github.com/flickerbox/fabric/graphs/contributors) and is generously sponsored by [Flickerbox](https://www.flickerbox.com).

## Contributing 

We welcome feedback and pull requests! See our [contributing guide](https://github.com/flickerbox/fabric/blob/documentation/.github/CONTRIBUTING.md) for details.

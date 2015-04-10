# fabric
Fabric is an opinionated, yet very basic framework for Flickerbox, Inc. Fabric tries to add no styling as all of our sites have custom styles.

Fabric uses BEM SCSS for its SCSS. Because of this, HTML and SCSS will be VERY FLAT. Even a single nesting of elements is discouraged.

## SCSS/Sass/CSS ##

### FB Reset ###
This is Flickerbox's reset. It's small but opionionated. It completely abolishes list-item bullets (if you need a bulleted list, add the bullets yourself).

### Typography ###
The only place typography can be changed is in the _typography.scss file. This ensures that typography will consistent and one-offs font styles will be kept to a minimum. Doing so allows the font-sizes to resize in all breakpoints with ease - which also makes composing responsive CSS much faster.

### Padding Styles ###
Padding Styles are created in _padding-styles.scss. Similar to typography, padding styles are built to be responsive from the start. You are encouraged to use padding styles onto your blocks to further speed up responsive code writing.

### Utilities ###
Utilities are in the _utilities.scss partial. The syntax is as follows:
* All utitilies start with ".u-"
* utility class names with decimals are created by replacing the decimal with an underscore. (ex. 0.25 -> 0_25)
* by default, all class names with numbers are in written in ems
* class names in "px" end in "px"
* class names with "percentages" end in "p"
* Negative values written as "neg" (ex, -0.25% -> neg0_25p)
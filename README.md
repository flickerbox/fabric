# fabric
Fabric is a very opinionated, yet very basic framework Flickerbox, Inc. websites.

Fabric uses BEM SCSS for its SCSS file. Because of this, HTML and SCSS will be VERY FLAT. Even a single nesting of elements is discouraged.

### FB Reset ###
This is Flickerbox's reset. It's small but very opionionated. It completely abolishes list-items bullets (if you need a list, add the bullets yourself).

### Typography ###
The only place typography can be changed is in the _typography.scss file. This ensures that typography will consistent and one-offs will be kept to a minimum. It also allows the font-sizes to automatically resize - making writing responsive code much faster.

### Padding Styles ###
Padding Styles are created in _padding-styles.scss.

### Utilities ###
Utilities are in the _utilities.scss partial. The syntax is as follows:
* All utitilies start with ".u-"
* utility class names with decimals are created by replacing the decimal with an underscore. (ex. 0.25 -> 0_25)
* by default, all class names with numbers are in written in ems
* class names in "px" end in "px"
* class names with "percentages" end in "p"
* Negative values written as "neg" (ex, -0.25% -> neg0_25p)
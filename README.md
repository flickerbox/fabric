# fabric
Fabric is an opinionated, yet very basic framework for Flickerbox, Inc. Fabric tries to add no styling as all of our sites have custom styles.

## SCSS/Sass/CSS ##

### FB Reset ###
This is Flickerbox's reset. It's small but opionionated. It completely abolishes list-item bullets (if you need a bulleted list, add the bullets yourself).

### Typography ###
The only place typography can be changed is in the _typography.scss file. This ensures that typography will be consistent and one-offs font styles will be kept to a minimum. Doing so allows the font-sizes to resize in all breakpoints with ease - which also makes composing responsive CSS much faster.

If you choose to @extend a font-style, only do so from a root-level class. Never @extend from a nested class.

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

## Gulp ##
Run `npm install` in the gulpfile directory to install all dependencies.
### gulpfile.js ###
When using SASS, this gulpfile will do all of the following:
+ autoprefix
+ compress
+ livereload
+ sourcemap

For javascript, place js files in `_src/scripts` in separate folders. i.e. anything you want compiled into `master.js` should be placed in the `_src/scripts/master/` folder. The compiled js will take the name of the folder from which it came. Anything in `_src/scripts/header/` will minify and concat into `header.js`.

#### LiveReload note
Make sure you have the Chrome plugin installed and enabled, which you can find here
`https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei`

#### Processing images
You have a few options. Use a git pre-commit hook or optimize images individually with a third party application.

To use the pre-commit hook, you can use npm to manually install `npm install -g imageoptim-cli` or just run `npm install` for the gulpfile which includes this package by default.

To use this, add the following cold to `your_project/.git/hooks/pre-commit` which runs imageoptim-CLI each time you commit new and changed files into your project. Any files which aren't images will be ignored.

```shell
images=$(git diff --exit-code --cached --name-only --diff-filter=ACM -- '*.png' '*.jpg')
$(exit $?) || echo $images | imageoptim && git add $images
```

#### Sublime & Fetch
For a super fast site start, use Fetch with Sublime to download and install Fabric in one shot.
'https://github.com/weslly/Nettuts-Fetch'

+ Install Fetch
+ Grab the "Download ZIP" link from github
+ Open "Fetch: Manage"
+ Add line in Packages for Fabric

To download the latest Fabric to your current project, use "Fetch: Package" and tell fetch what directory to install it. Leave it empty for the root of your project.

![Fetch Manage](http://i.imgur.com/4qJeQXC.png)

![Package Link](http://i.imgur.com/aiOFZEw.png)

# fabric
Fabric is a very opinionated, yet very basic framework Flickerbox, Inc. websites.

Fabric uses BEM SCSS for its SCSS file.

### Utilities ###
Utilities are in the _utilities.scss partial. Their syntax is as follows:
* All utitilies start with ".u-"
* class names with decimals are replaced with underscores. (ex. 0.25 -> 0_25)
* unless otherwise stated, all class names with digits are in ems
* class names with px end in px
* class names with percentages end in p
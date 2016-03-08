<!DOCTYPE html>
<html>
<head>
	
	<title>Flickerbox Fabric</title>
	<link rel="stylesheet" type="text/css" href="/fonts/neue-haas-grotesk/neue-haas-grotesk.css">
	<link rel="stylesheet" type="text/css" href="/css/master.css">
	
	<script src="https://use.typekit.net/moy5rey.js"></script>
	
</head>

<body>
	
	<div id="Sidebar-menuToggle" class="Sidebar-menuToggle">
		<?php echo file_get_contents(__DIR__ . '/media/icon-Menu.svg'); ?>
	</div>
	
	<div class="Sidebar">
		
		<ul id="Sidebar-menu" class="Sidebar-menu">
			<li>
				<a href="#overview">Overview</a>
			</li>
			<li>
				<a href="#dev-environment">Dev Environment</a>
				<ul>
					<li><a href="#installation">Installation</a></li>
					<li><a href="#gulp">Gulp</a></li>
					<li><a href="#livereload">Live Reload</a></li>
					<li><a href="#javascript">Javascript</a>
					<li><a href="#sass">SASS</a></li>
				</ul>
			</li>
			<li>
				<a href="#html-coding-standards">HTML Coding Standards</a>
				<ul>
				</ul>
			</li>
			<li>
				<a href="#php-coding-standards">PHP Coding Standards</a>
				<ul>
				</ul>
			</li>
			<li>
				<a href="#sass-style-guide">SASS Style Guide</a>
				<ul>
					<li><a href="#whitespace">Whitespace &amp; Punctuation</a></li>
					<li><a href="#selectors">Selectors &amp; Naming</a></li>
					<li><a href="#colors">Colors</a></li>
					<li><a href="#numbers">Numbers</a></li>
					<li><a href="#sassy-things">Sassy Things</a></li>
					<li><a href="#miscellaneous">Miscellaneous</a></li>
				</ul>
			</li>
			<li>
				<a href="#fabric-framework">Fabric Framework</a>
				<ul>
					<li><a href="#responsive">Responsive Breakpoints</a></li>
					<li><a href="#layout">Layout &amp; The Grid</a></li>
					<li><a href="#margin-padding">Margin &amp; Padding</a></li>
					<li><a href="#typography">Typography &amp; Colors</a></li>
					<li><a href="#forms-buttons">Forms &amp; Buttons</a></li>
					<li><a href="#animations">Animations</a></li>
					<li><a href="#transitions">Transitions</a></li>
				</ul>
			</li>
			<li>
				<a href="#drupal-best-practices">Drupal Best Practices</a>
				<ul>
				</ul>
			</li>
			<li>
				<a href="#wordpress-best-practices">Wordpress Best Practices</a>
				<ul>
				</ul>
			</li>
		</ul>
		
	</div>
	
	<div class="Page">
		<div class="wrap">
			
			<section class="Page-section Text">
				
				<h1 id="overview" class="Entry-title">Overview</h1>
				
				<p>This is Flickerbox's general development style guide and coding standards. It includes an overview of our dev environment, coding standards for HTML and PHP, style guide for SASS, an overview of our home-brewed Fabric framework for SASS, and best practices for Drupal and Wordpress.</p>
				
				<p>this should be considered the evolving reference guide for development work. Legacy projects will not fit this structure perfectly and should generally follow their established code styles.</p>
				
			</section>
			
			<section class="Page-section Text">
				
				<h1 id="dev-environment" class="Entry-title">Dev Environment</h1>
				
				<p>Our standard dev environment consists of the following front end stack:</p>
				
				<ul class="FeatureList">
					<li>CSS Normalize <code>~/source/sass/fabric/layout/normalize.scss</code></li>
					<li>SCSS <code>~/source/sass/</code></li>
					<li>Fabric <code>~/source/sass/fabric/</code></li>
					<li>jQuery <span>(<a target="_blank" href="//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js">//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js</a>)</span></li>
					<li>NPM <code>$ npm install</code></li>
					<li>Gulp <code>$ gulp</code></li>
					<li>LiveReload <span>(<a target="_blank" href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en">Download Chrome Extension</a>)</span></li>
				</ul>
				
				
				<h2 id="installation" class="h3">Installation</h1>
				
				<p>For a new site install, download, unzip, and move the files into your main directory <em>(probably the theme's folder for Drupal or Wordpress)</em>, then <code>$ npm install</code>.</p>
				
				<p><a class="button--withArrow" target="_blank" href="/Fabric-2.0.0.zip">Download Fabric</a></p>
				
				
				<h2 id="gulp" class="h3">Gulp</h1>
				
				<p>The standard gulpfile we use is configured to do the following:</p>
				
				<ol class="FeatureList">
					<li>Check for NPM updates</li>
					<li>Start LiveReload</li>
					<li>Lint SCSS</li>
					<li>Compile javascript and SCSS</li>
					<li>Watch for changes</li>
				</ol>
				
				<p>Each site we build probably has a slight variation on this file, but it's written to require minimal changes between iterations.</p>
				
				
				<h2 id="livereload" class="h3">LiveReload</h1>
				
				<p>The default LiveReload setup in Gulp does not account for an existing LiveReload process on <code>:35729</code>. If while running Gulp, the process dies or is killed, LiveReload will be left running. To account for this, on startup, the gulp task <code>livereload:cleanup</code> checks if a LiveReload process is currently running, and if so, kills it before starting LiveReload.</p>
				
				<p><a class="button--withArrow" target="_blank" href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en">Download Chrome Extension</a>
				
				
				<h2 id="javascript" class="h3">Javascript</h2>
				
				<p>Drupal includes jQuery by default as does our parent Wordpress theme, <em>canvas</em>. Therefore, jQuery is not included as part of Fabric.</p>
				
				<p>All files under <code>~/source/js/</code> are compiled into a single file, <code>~/js/master.js</code>, that can be included on the site.</p>
					
				
				<h2 id="sass" class="h3">SASS</h1>
				
				<p>The SASS folders are structured, and loaded, in a rough order of priority. The highlighted files and folders below are where new code should be placed. Fabric base and component files should be left untouched - rather, they're something to extend upon.</p>
				
				<pre><code><strong>// normalize &amp; variables</strong>
~/source/sass/fabric/base/**/*.scss
<span class="highlight">~/source/sass/base/variables.scss</span>

<strong>// fabric components</strong>
~/source/sass/fabric/components/**/*.scss

<strong>// basic elements</strong>
<span class="highlight">~/source/sass/base/helpers.scss</span>
<span class="highlight">~/source/sass/base/typography.scss</span>
<span class="highlight">~/source/sass/base/forms.scss</span>
<span class="highlight">~/source/sass/base/buttons.scss</span>
<span class="highlight">~/source/sass/base/layout.scss</span>

<strong>// components</strong>
<span class="highlight">~/source/sass/components/**/*.scss</span>

<strong>// page specific overrides</strong>
<span class="highlight">~/source/sass/pages/**/*.scss</span></code></pre>

				<p>SASS is compiled down into a single file, <code>~/css/master.css</code>, that can then be included on the site.</p>
				
				<h3 class="h5">Components</h3>
				
				<p>Components should each exist in their own file. The filename should match the main component selector. E.g. <code>_MyComponent-childComponent.scss</code> &raquo; <code>.MyComponent-childComponent {}</code>.
				
				<h3 class="h5">Pages</h3>
				
				<p>Page specific overrides should be seperated out into their own files. This includes templates such as would exist in a Wordpress or Drupal theme. Filenames should match the directory structure and filename of the template. E.g. <code>_archive.scss</code> &raquo; <code>archive.php</code>.

			</section>
			
			<section class="Page-section Text">
				
				<h1 id="html-coding-standards" class="Entry-title">HTML Coding Standards</h1>
				
				<p>TBD</p>
				
			</section>
			
			<section class="Page-section Text">
				
				<h1 id="php-coding-standards" class="Entry-title">PHP Coding Standards</h1>
				
				<p>TBD</p>
				
			</section>
			
			<section class="Page-section Text">
				
				<h1 id="sass-style-guide" class="Entry-title">SASS Style Guide</h1>
				
				<p>We use a fairly strict style guide, based partially on personal preference while emphasizing readability. The style guide is enforced by SCSS-LINT in Gulp. The settings for linting are in <code>~/lint.yml</code>.</p>
				
				<p>The style guide is loosely adopted from <a target="_blank" href="http://davidtheclark.com/scss-lint-styleguide/">http://davidtheclark.com/scss-lint-styleguide/</a>.</p>
					
				
				<h2 id="whitespace" class="h3">Whitespace &amp; Punctuation</h2>
				
				<ul class="List">
					
					<li><strong>Indent using tabs.</strong></li>
					
					<li><strong>End each file with an empty newline.</strong> After all, you're not an animal, are you?</li>
					
					<li><strong>Include an empty line between all statements</strong> i.e. rule sets, at-rules, and Sass directives. Even the nested ones. Spaces help people, and people are important. (Variable definitions are like properties and don't need to be spaced.)</li>
					
					<li><strong>Include spaces after commas and colons, not before.</strong> As in written English.</li>
					
					<li><strong>Do not include spaces between parentheses and parenthesized.</strong> As in written English.</li>
					
					<li><strong>Use single quotation marks.</strong> That way you don't have to push shift, everyone's least favorite key.
					
					<li><strong>End every declaration with a semicolon, with no whitespace in front of it.</strong> (Did you even think about putting a space in front of it? What is wrong with you?)</li>
					
				</ul>
				
				
				<h2 id="selectors" class="h3">Selectors &amp; Naming</h2>
				
				<ul class="List">
					
					<li><strong>Never use ID selectors.</strong> Find another way. There's probably a better one.</li>
					
					<li>
						<p><strong>Do not qualify type selectors.</strong> Better yet, don't use them at all, if possible: just use classes.</p>
						<pre><code><strong>// bad</strong>
a[href='horse'] { ... }

<strong>// maybe fine</strong>
[href='horse'] { ... }

<strong>// good</strong>
.horse { ... }</code></pre>
					</li>
					
					<li><strong>Provide lowercase, hyphen-delimited names for Sass variables and directives.</strong> That way they fit in with standard CSS keywords and property names.</li>
					
					<li>
						<p><strong>Do not chain more than three simple selectors.</strong> In almost every case, one simple selector is best (that is, no chaining, flat specificity, world peace). Some situations call for two. But let's just draw the line at three. Find another way.</p>
						
						<pre><code><strong>// good</strong>
.horse { ... }

<strong>// often useful</strong>
.horse + .horse { ... }

<strong>// suspicious</strong>
.horse > .donkey { ... }

<strong>// uh ...</strong>
.horse > .donkey + .mule { ... }

<strong>// call the police</strong>
ul li a span { ... }</code></pre>
					</li>
					
					<li>
						<p><strong>Include a line break between each selector in a group.</strong></p>
						
						<pre><code><strong>// bad</strong>
.horse, .donkey, .mule { ... }

<strong>// good</strong>
.horse,
.donkey,
.mule { ... }</code></pre>
					</li>
					
					<li><strong>Include a single space between selectors and the curly braces that begin declaration blocks.</strong></li>
					
					<li>
						<p><strong>Name components consistently.</strong> Examples below, but generally, follow <a target="_blank" href="https://github.com/suitcss/suit/blob/master/doc/README.md">SUIT CSS naming conventions</a>.</p>
						
						<pre><code>.u-utilityClass {}
.is-stateClass {}
.has-stateClass {}

.ComponentName {}
.ComponentName-descendentName {}
.ComponentName--modifierName {}
.ComponentName-descendentName--modifierName {}</code></pre>
					</li>
				
				</ul>
				
				
				<h2 id="colors" class="h3">Colors</h2>
				
				<ul class="List">
					
					<li><strong>Do not use color keywords</strong> &mdash; such as <code>green</code> instead of <code>#008000</code>. Color keywords are for children, aging parents, and pranks.</li>
					
					<li><strong>Use the shortest possible hex value.</strong> <code>#fff</code> instead of <code>#ffffff</code>.</li>
					
					<li><strong>Use lowercase letters inside hex values.</strong> <code>#fff</code> instead of <code>#FFF</code>. Unnecessary capital letters are obnoxious to the sensitive soul. And, again, why use <code>shift</code> when you don't have to? Last reason: lowercase letters are, I think, a little bit easier to distinguish from numbers. I'm not making that up.</li>
					
				</ul>
				
				
				<h2 id="numbers" class="h3">Numbers</h2>
				
				<ul class="List">
					
					<li><strong>Do not include unnecessary trailing zeros after a decimal point.</strong> 2em instead of 2.0em.</li>
					
					<li><strong>Do include an unnecessary leading zero before decimal values less than 1.</strong> 0.5em instead of .5em. Don't you think it improves readability? I do.</li>
				
				</ul>
				
				
				<h2 id="sassy-things" class="h3">Sassy Things</h2>
				
				<ul class="List">
					
					<li><strong><code>@extend</code> placeholders only.</strong> This practice will help prevent some common <code>@extend</code>-related mistakes and misunderstandings.</li>
					
					<li><strong>Include one space before any <code>!</code> and no spaces after it,</strong> with <code>!important</code> and <code>!default</code> declarations. That's just how it's done.</li>
					
					<li>
						<p><strong>Put <code>@else</code> on the same line as the curly brace it follows.</strong></p>
						
						<pre><code><strong>// bad</strong>
@if {
  // ...
}
@else {
  // ...
}

<strong>// good</strong>
@if {
  // ...
} @else {
  // ...
}</code></pre>
					</li>
					
					<li><strong>Do not include leading underscores or filename extensions in the basenames of SCSS files that you <code>@import</code>.</strong> <code>@import 'horse/donkey'</code> instead of <code>@import 'horse/_donkey.scss'</code>.</li>
				
				</ul>
				
				
				<h2 id="miscellaneous" class="h3">Miscellaneous</h2>
				
				<ul class="List">
					
					<li><strong>Include a line break between each declaration.</strong> Keep declarations isolated: that way you can monitor and discipline them more easily.</li>
					
					<li><strong>Include quotation marks around URLs.</strong> SCSS-Lint documentation <a target="_blank" href="https://github.com/causes/scss-lint/blob/master/lib/scss_lint/linter/README.md#urlquotes">explains why</a>.</li>
					
					<li><strong>Use shorthand properties when you can.</strong>
					
					<li><strong>Do not include units on zero values.</strong> It could be zero of anything: we don't have to know.</li>
					
					<li><strong>Use <code>border: 0</code> instead of <code>border: none</code>.</strong> Cuz.</li>

					<li>
						<p><strong>Do not nest selectors more than 3 levels deep.</strong> Zero levels of nesting is best, of course. One level is often handy, and arguably helps organize some common code (especially pseudo-classes and pseudo-elements). Two or three raises eyebrows and specificity. More invites (induces?) disaster.</p>
						
						<pre><code><strong>// best</strong>
.horse {
  font-size: 10em;

  <strong>// handy</strong>
  &:hover {
    font-size: 20em;

    <strong>// eyebrow-raising</strong>
    & > .donkey {
    color: #eee;

      <strong>// disaster-inviting(-inducing?)</strong>
      & + .mule {
        margin: 100em;

        <strong>// disaster-in-progress</strong>
        ul li a span {
          color: $death;
        }
      }
    }
  }</code></pre>
					</li>
					
					<li><strong>Do not type vendor prefixes.</strong> Autoprefixer is setup in the <code>gulpfile.js</code>.</li>
					
					<li><strong>Order declarations alphabetically and in a logical manner.</strong> (A) <code>@extend</code> directives first; then (B) <code>@include</code> directives without inner @content; then (C) vanilla CSS declarations, with their properties and values; then (D) <code>@include</code> directives with inner @content; then (E) nested statements (rule sets and at-rules).</li>
					
			
			</section>
			
			<section class="Page-section Text">
				
				<h1 id="fabric-framework" class="Entry-title">Fabric Framework</h1>
				
				<h2 id="responsive" class="h3">Responsive Breakpoints</h2>
				
				<p>Fabric utilizes <a target="_blank" href="http://include-media.com">@include-media</a> and full documentation is there. Breakpoints are defined in <code>~/source/sass/base/_variables.scss</code> like:</p>
				
				<pre><code>$breakpoints: (
	'xx-small':	320px,
	'x-small':	480px,
	'small':	768px,
	'medium':	1024px,
	'large':	1200px,
	'x-large':	1400px,
	'xx-large':	1600px
);</code></pre>

				<p>In your components, you can then define breakpoints with the mixin like:</p>
				
				<pre><code>@include media("&lt;medium") {
	// ...
}</code></pre>

				<p>For readability, it's often best to define your breakpoints at the top level of a component file such as:</p>
				
				<pre><code>.myComponent {
	// ...
}
					
@include media("&lt;medium") {
	.myComponent {
		// ...
	}
}
					
@include media("&lt;small") {
	.myComponent {
		// ...
	}
}</code></pre>
				
				
				<h2 id="layout" class="h3">Layout &amp; The Grid</h2>
			
				<h3 class="h5">Basic Helper Classes</h3>
				
				<ul class="List">
					<li><code>.clearfix</code> &mdash; self explanatory</li>
					<li><code>.wrap</code> &mdash; utilizes <code>$site-width</code> &amp; <code>$gutter-width</code></li>
				</ul>
				
				<h3 class="h5">The Grid</h3>
				
				<p>The grid included in Fabric is loosely based on bootstrap's grid, but uses flexbox. Classes are generated based on the defined <code>$grid-width</code> &mdash; e.g. the number of columns; default is 12. It also is tied in with the responsive breakpoints and has classes for that.</p>
				
				<ul class="List">
					<li><code>.row</code></li>
					<li><code>.column-<em class="color-gray">(1-12)</em></code></li>
					<li><code>.columnOffset-<em class="color-gray">(0-11)</em></code></li>
					<li><code>.lg-column-<em class="color-gray">(1-12)</em></code></li>
					<li><code>.lg-columnOffset-<em class="color-gray">(0-11)</em></code></li>
					<li><code>.md-column-<em class="color-gray">(1-12)</em></code></li>
					<li><code>.md-columnOffset-<em class="color-gray">(0-11)</em></code></li>
					<li><code>.sm-column-<em class="color-gray">(1-12)</em></code></li>
					<li><code>.sm-columnOffset-<em class="color-gray">(0-11)</em></code></li>
					<li><code>.xs-column-<em class="color-gray">(1-12)</em></code></li>
					<li><code>.xs-columnOffset-<em class="color-gray">(0-11)</em></code></li>
				</ul>
				
				<p>Utility classes are also defined for a couple regular grid-type features:</p>
				
				<ul class="List">
					<li><code>.u-justify</code></li>
					<li><code>.u-stretch</code></li>
				</ul>
				
				
				<h2 id="margin-padding" class="h3">Margin &amp; Padding</h2>
				
				<p>Mixins are available to set both margin and padding utilizing the <code>$spacing</code> variable defined in <code>~/source/sass/base/_variables.scss</code>. These should only really be used sparingly, and only if using the named amounts defined in <code>$spacing</code>.</p>
				
				<p>If you don't need to set all of the margins or padding on an element, you can use the <code>get-spacing</code> function to retrieve values from this variable directly.</p>
				
				<p><strong>Example:</strong></p>
				
				<pre><code>.myComponent {
	margin-left: get-spacing(small);
}</code></pre>
				
				
				<h3 class="h5">Margin</h3>
				
				<p>The mixin expects an <strong>unquoted</strong> string of 1 to 4 values, just like you'd define them as a <code>margin:</code> property, except the spacing keywords <em>(e.g. x-small, small, medium, large, x-large)</em> will be replaced with their cooresponding values.</p>
				
				<p>It also includes <code>&:first-child</code> and <code>&:last-child</code> definitions that will set the margin respectively, at top or bottom, to zero.</p>
				
				<p><strong>Example:</strong></p>
				
				<pre><code>.myComponent {
	@include margin(small 0);
}</code></pre>

				
				<h3 class="h5">Padding</h3>
				
				<p>The mixin expects an <strong>unquoted</strong> string of 1 to 4 values, just like you'd define them as a <code>padding:</code> property, except the spacing keywords <em>(e.g. x-small, small, medium, large, x-large)</em> will be replaced with their cooresponding values.</p>
				
				<p><strong>Example:</strong></p>
				
				<pre><code>.myComponent {
	@include padding(large x-small x-small);
}</code></pre>
				
				
				<h2 id="typography" class="h3">Typography &amp; Colors</h2>
				
				<h3 class="h5">Font Size</h3>
				
				<p>Font size is defined as the <code>$font-size</code> variable in <code>~/source/sass/base/_variables.scss</code>. They should be defined as <code>px</code> units. They coorespond to sizes defined on <code>html</code>, <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, and <code>h6</code>.</p>
				
				<p>It also integrates with the responsive breakpoints, if you define them in the <code>$font-size</code> variable map. The only caveat being, you cannot define responsive breakpoints on the <code>base</code> size. <em class="color-gray">(planned to be a future feature)</em></p>
				
				<p><strong>Example:</strong></p>
				
				<pre><code>$font-size: (
	'base':	16px,
	'h6':	16px,
	'h5':	20px,
	'h4':	24px,
	'h3':	('small': 32px, 'medium': 36px, 'large': 40px),
	'h2':	('small': 40px, 'medium': 44px, 'large': 48px),
	'h1':	('small': 48px, 'medium': 52px, 'large': 56px)
);</code></pre>
				
				
				<h3 class="h5">Headings</h3>
				
				<p>Along with the heading font sizes, some basic properties are set like responsive margins. There is a placeholder defined if you'd like to extend upon these styles:</p>
				
				<ul class="List">
					<li><code>%u-heading</code></li>
				</ul>
				

				<h3 class="h5">Colors</h3>
				
				<p>All colors should be defined in the <code>$colors</code> variable in <code>~/source/sass/base/_variables.scss</code>. Based on this variable, utility classes are auto-generated for colors. It's <em>suggested</em> that color variations be named with <em>-darker</em>, <em>-darkest</em>, <em>-lighter</em>, and <em>-lightest</em> suffixes.</p>
				
				<p>The <code>default</code> and <code>accent</code> keys are used as the default font color, and color for links &amp; buttons.</p>
				
				<p><strong>Example:</strong></p>
				
				<pre><code>$colors: (
	'default':	#232323,
	'accent':	#fe5000,
	
	'black':	#000,
	'white':	#fff,
	
	'dark-gray':	#4a4a4a,
	'gray':		#9b9b9b,
	'light-gray':	#dedede
);</code></pre>

				<p><strong>Utility Classes <em class="color-gray">(generated)</em></strong></p>
				
				<ul class="List">
					<li><code>.color-default</code></li>
					<li><code>.color-accent</code></li>
					<li><code>.color-black</code></li>
					<li><code>.color-white</code></li>
					<li><code>.color-dark-gray</code></li>
					<li><code>.color-gray</code></li>
					<li><code>.color-light-gray</code></li>
				</ul>
				
				
				<h2 id="forms-buttons" class="h3">Forms &amp; Buttons</h2>
				
				<h3 class="h5">Forms</h3>
				
				<p>There is just some general style cleanup for form elements, nothing fancy. But it is suggested that you use the grid framework to layout your form elements.</p>
					
				<h3 class="h5">Buttons</h3>
				
				<p>There is a placeholder defined for buttons that can be extended, and two button classes available to build off of:</p>
				
				<ul class="List">
					<li><code>%button</code></li>
					<li><code>.button, [class^='button--'], [class*=' button--']</code></li>
					<li><code>.button--primary</code></li>
				</ul>
				
				<h2 id="animations" class="h3">Animations</h2>
				
				<p>This is mostly just a placeholder, cause there's only one animation right now. But all animations will be defined as both a placeholder, and a class, so they can be extended upon by components and use directly in html.</p>
				
				<ul class="List">
					<li><code>%animated-Underline</code> <code>.animated-Underline</code></li>
				</ul>
				
				<h2 id="transitions" class="h3">Transitions</h2>
				
				<p>The <code>transition</code> mixin utilizes the <code>$transition-speed</code> variable defined in <code>~/source/sass/base/_variables.scss</code>. This makes it really easy to change transition speed across the board.</p>
				
				<p>The mixin expects an <strong>unquoted</strong> string of comma seperated values, just like you'd define them as a <code>transition:</code> property, except the speed keywords <em>(e.g. x-slow, normal, fast)</em> will be replaced with their cooresponding values.</p>
				
				<p><strong>Example</strong></p>
				
				<pre><code>.myComponent {
	@include transition(background normal, color normal);
	color: #f00;
	
	&:active, &:hover {
		background: #ff0;
		color: #0f0;
	}
}</code></pre>
				
			</section>
			
			<section class="Page-section Text">
				
				<h1 id="drupal-best-practices" class="Entry-title">Drupal Best Practices</h1>
			
			</section>
			
			<section class="Page-section Text">
				
				<h1 id="wordpress-best-practices" class="Entry-title">Wordpress Best Practices</h1>
			
			</section>
		
		</div>
	</div>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="/js/master.js"></script>
	
</body>
</html>
### UI-Boilerplate

![Boilerplate UI](https://i.imgur.com/MTrBqvD.png)

This is an composition of the best things of Twitter [Bootstrap v4](https://getbootstrap.com/) for Design, [Gulp](https://gulpjs.com/) task-runner, and [jQuery](https://jquery.com/).

The [aim](#Aim-of-this-Boilerplate) of this Boilerplate is to use the free tiers of these services to get a live development environment up and running with minimal effort as a starter template.

This boilerplate comes with two language in mind [En, Ar], thanks to [gulp-rtlcss](https://www.npmjs.com/package/gulp-rtlcss).


### Table of Contents
<a name="table-of-contents"></a>
  1. [Aim](#Aim-of-this-Boilerplate)
  1. [Used Technologies](#used-technology)
  1. [Setup](#Local-Setup)
  1. [Scripts](#Available-scripts)
  1. [Folder Structure](#folder-structure)
  1. [Resources](#Resources)
  1. [Upcomming features](#TODOs)
  1. [License](#License)


### Aim of this Boilerplate
<a name="Aim-of-this-Boilerplate"></a>
You can be the best developer in the world—the smartest one with the best ideas! But one thing you’ll never have enough of is time.

Developing quality products rely so much on how much time we can spend on it—and it’s almost always not enough. Even if you’re the best in your field, everything still takes time. And if you’re not smart about the entire process, you’d be taking even more time away from doing your job than the already limited one that you have.

On the other hand, you can’t just constantly worry about time and end up doing things head on without proper planning. This can be counter-productive. And being counter-productive will shave off even more from your precious time. Not being efficient enough can be pain for developers. Sometimes, the situation worsens so much that it seems that the work is never going to finish.

If you’re tired of slow web development process, this UI-Boilerplate can help. I’m going to give you ways to speed up the web designing process with techniques, tools, and tips to make your time in development be spent a little more efficiently.

**[⬆ back to top](#table-of-contents)**


### Used technologies
<a name="used-technology"></a>
* `Bootstrap 4` (rtl & ltr)
* `FontAwesome`
* `SASS`
* `PUG`
* `ECS6`
* `Gulp`
* list of `gulp` tasks such as gulp-sass, gulp-pug, gulp-cssmin, gulp-uglify, gulp-autoprefixer, gulp-concat, and more.
* `JQuery`
* `animated.css`
* `Swiper.js`

**[⬆ back to top](#table-of-contents)**


### Local Setup
<a name="Local-Setup"></a>
* Clone the repository locally.
* If you don't have Node installed, [install it](https://nodejs.org/en/download/).
* In a console window, navigate to the repository directory and install the dependencies with `npm install`.
* In your console window, execute `npm start` to launch the application.  It will be viewable in your browser at [http://localhost:3000/](http://localhost:3000/).

**[⬆ back to top](#table-of-contents)**


### Available scripts
<a name="Available-scripts"></a>
+ `npm start` - run npm build:dev command.
+ `npm run build:dev` - run gulp for development mode, This enable some functionality belongs to development only, such as sourcemap files.
+ `npm run build:prod` - run gulp for production mode, This uglify scripts files and minify style files.
+ `npm run clean` - clean build folder.

**[⬆ back to top](#table-of-contents)**

### Folder structure
<a name="folder-structure"></a>

	.
	├── build/                   				# Compiled files (alternatively `dist`).
	├── node_modules/            				# Defines what libraries will be installed into `node_modules` when you run npm install.
	├── src/                     				# Source files (alternatively `lib` or `app`).
	│   ├── fonts/               				# Fonts folder.
	│   ├── images/	            				# Images folder.
	│   ├── sass/                				# Style folder using `SASS`.
	│   │  ├── partials/         				# `SASS`s partials and component folder.
	│   │  ├── helpers/         				# `SASS` helper files.
	│   │  ├── pages/         					# `SASS` files for each page of the application.
	│   │  ├── components/         				# `SASS` reusable components files.
	│   │  ├── libs/         				    # list of liberaries sourse files, such as bootstrap, swiper, fontawesome and material icons.
	│   │  ├── _cusrom_style                    # this file meant to exist for overwriting purpose..
    │   │  └── style				            # style root file, importing all style assets.
	│   ├── scripts/             				# Javascript folder using `ECS6`
	│   ├── videos/              				# Videos folder
	│   └── views/               				# `Pug` folder, that compiled to `html`.
	│      ├── partials/         				# `pug`s partials and component folder.
	│      ├── mixins/         					# some of `pugs` usefull mixins.
	│      ├── sections/         				# container for website's sections.
	│      ├── layouts/ 		        		# layouts folder for all pug files.
	│      └── index.pug         				# Entry pug file that compiled into `index.html` file.
	├── gulpfile.js             				# `Gulp` file, starter file of this boilerplate.
	├── README.md								# Github README.md file.
	└── LICENSE

**[⬆ back to top](#table-of-contents)**


### Resources
<a name="Resources"></a>

 1. [PUG Getting Started](https://pugjs.org/api/getting-started.html)
 1. [SASS](https://sass-lang.com/)
 1. [What is Es6?](https://www.quora.com/What-is-ES6)
 1. [Bootstrap 4 theming and customization](https://bootstrap.build/blog/tutorial.html)
 1. [How to build a bootstrap 4 theme](https://hackerthemes.com/kit/)

**[⬆ back to top](#table-of-contents)**


### TODOs
<a name="TODOs"></a>
* simple documentation on what exactly is eslint, how we included in our bolierplate to linting JS code, also including some links for JS style guides.

**[⬆ back to top](#table-of-contents)**


### License
<a name="License"></a>
(The MIT License)

Copyright (c) Mohamed Ashraf

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

**[⬆ back to top](#table-of-contents)**

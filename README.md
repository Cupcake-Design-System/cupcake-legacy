<img alt="cupcake-logo" src="src/img/cupcake-horizontal-logo.png" width="350">


Project Cupcake is the Ipreo design system that brings together UX guidelines, an HTML/CSS framework, and rich ui components. This repository includes everything you need to build, customize, test, and deploy Cupcake. For complete documentation, visit the Cupcake documentation site.


## Getting Started

1. If needed, [install](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) `node` and `npm` (Node Package Manager).
- If needed, install `gulp` with `npm install gulp -g`.
- Clone this repo with `git clone gitaddress` or download the zip.
- In terminal, `cd` to the folder containing your project. Alternatively, you can type `cd ` and drag the location of the folder into your terminal and hit enter (on Macs).
- In terminal, type `npm install`. If (and _only_ if) `npm install` isn't working, try `sudo npm install`. This should install all [dependencies](#dependencies).
- In terminal, enter `gulp`.
- Your browser should open at `http://localhost:3000`. You can access this same page on any device on the same wifi network and they'll see whats on your screen. It'll even sync scrolls and clicks!
- Edit your code inside of the `src` folder.
- Your complied and minified css, html, and javascript files will be created and updated in `dist/`. Never edit files within the `dist/` folder, as it gets deleted frequently.
- Keep `gulp` running while you're making changes. When you want to stop the gulp task, hit `ctrl + C`.

_For theming: Running 'gulp theme' will prompt you for a name. This name will be used to make your .scss file inside theme folder. The generated file will be properly linked to dependencies and all you to easily change the root variables._

## Requirements
- Node/NPM
- LibSass
- Gulp

## Features
- Live reloading with BrowserSync
- Github Pages deployment
- Sass compilation and linting
- Autoprefixer

## Current Dependencies
```
    "browser-sync": "^2.0.0-rc4",
    "colors": "^1.1.2",
    "del": "^2.0.2",
    "file-exists": "^2.0.0",
    "gulp": "^3.9.0",
    "gulp-autoprefixer": "^3.1.1",
    "gulp-clean-css": "^2.0.7",
    "gulp-gh-pages": "^0.5.4",
    "gulp-notify": "^2.2.0",
    "gulp-plumber": "^1.1.0",
    "gulp-prompt": "^0.2.0",
    "gulp-rename": "^1.2.0",
    "gulp-sass": "^3.1.0",
    "gulp-stylelint": "^3.7.0",
    "run-sequence": "^1.2.2",
    "stylelint-config-standard": "^15.0.1",
    "stylelint-declaration-use-variable": "^1.6.0",
    "stylelint-scss": "^1.4.1",    
    "gulp-sourcemaps": "^2.4.0",
    "vinyl-paths": "^2.0.0"
```

## Tasks
- clean:dist
- styles
- styles:prod
- browser-sync
- deploy
- lint
- watch
- stats
- themes
- default
  - clean:dist
  - html
  - styles
  - themes
  - copy
  - styles:prod
  - browser-sync
  - watch
- build
  - clean:dist
  - html
  - styles
  - themes
  - copy
  - styles:prod
- audit *in-progress
  - lint
  - stats

## Directory structure

```
┌── .gitignore
├── .htaccess
├── .stylelintrc.json
├── src
│   ├── img
│   ├── index.html
│   ├── fonts
│   ├── themes
│   └── scss
│       ├──── base
│       ├──── config
│       ├──── forms
│       ├──── grid
│       ├──── layouts
│       ├──── modules
│       ├──── navigation
│       ├──── ui
│       ├──── utility
│       └── default.scss
├── gulpfile.js
└── package.json
```

## Bugs & Support
Please list all bugs and feature requests in the Github issue tracker.


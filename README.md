<img alt="cupcake-logo" src="src/img/cupcake-horizontal-logo.png" width="350">


Project Cupcake is the Ipreo design system that brings together UX guidelines, an HTML/CSS framework, and rich ui components. This repository includes everything you need to build, customize, test, and deploy Cupcake. 

### Documentation
[Cupcake documentation site](https://pages.code.ipreo.com/Ipreo/cupcake-docs/).

### Changelog
[Visit page](CHANGELOG.md)


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

## Requirements
- Node/NPM
- LibSass
- Gulp

## Features
- Live reloading with BrowserSync
- Github Pages deployment
- Sass compilation and linting
- Autoprefixer

## Directory structure

```
┌── .gitignore
├── .htaccess
├── .stylelintrc.json
├── src
│   ├── img
│   ├── demo-js
│   ├── fonts
│   ├── flavors
│   └── scss
│       ├──── base
│       ├──── config
│       ├──── grid
│       ├──── layouts
│       ├──── modules
│       ├──── ui
│       ├──── utility
│       └── northstar.scss
├── gulpfile.js
├── index.html
├── grid.html
├── invis.html
└── package.json
```

## Bugs & Support
Please list all bugs and feature requests in the Github issue tracker.


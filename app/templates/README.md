Marrionette Coffeescript Express Project Boilerplate
====================================================

> Starting point for new backbone marionette project

TODO - create yeoman project generator

to use as a starting point for your marionette app, just clone repository and run
```[sudo] npm install && bower install```

```
|____app/
|
| |____assets/
| |
| | |____coffee/    **** all coffeescript in folder will be compiled to js/ folder ****
| | | |____app.coffee
| | | |____apps/
| | | |
| e x | |____sub_app/
| | | | |
| e x | | |_____sub_app_.coffee
| | | |____build.js   **** build configuration using almond shim to build single .js file ****
| | | |____common/    **** common views/helpers/etc used accross multiple sub applications ****
| | | |____entities/  **** for creating, storing, retrieving models ****
| | | | |_____.coffee
| | | |____require_main.coffee   **** main configuration file  *****
| | |____css/
| | | |____(Generated)app.css
| | | |____(Generated)app.css.map
| | |____img/  **** image assets  *****
| | |____scss/
| | | |____app.scss **** main app scss file, all scss files within folder be combined and compiled with compass  ****
| |____config/
| | |____compass.rb
| |____config.rb
| |____(Generated)index.html
| |____r.js **** r.js optimizer
| |____template.html **** generates html for app/ and dist/, uses targetAdmin to conditionally include certain lines  ****
|____server/
| |____app.js  **** express server  ****
|____test/
| |____coffee/   **** coffeescript for test specs ****
| | |____*.coffee
| |____spec/
| | |____(Generated)*.js
| |____SpecRunner.coffee
        **** Requirejs configuration for our tests
| |____(Generated)SpecRunner.js
| |____TestRunner.html

```
# generator-marionette-coffee [![Build Status](https://secure.travis-ci.org/dswaby/generator-marionette-coffee.png?branch=master)](https://travis-ci.org/dswaby/generator-marionette-coffee)

Yeoman generator for marrionette app written in coffescript

* Starting point for new marionette project

* includes hello world type module

* using boilerplate express server

###### Whats included

  * Marionette
  * Coffeescript
  * AMD configuration using Requirejs
  * Twitter Bootstrap (optional)
  * Mocha unit tests with html testrunner as well as grunt task that will run them headless using phantomjs
  * Organized using module pattern
    - for more information about the module pattern with marionette, I highly recommend David Sulac's [book on Marionette.js](https://leanpub.com/marionette-gentle-introduction)


To Install
-----------

This generator depends on phantomJS, mongoDb, yeoman, bower and grunt

Install phantomJS
```
$ brew install phantomjs
```
Install mongoDb
```
$ brew install mongodb
```
Install mocha-phantomjs:
```
$ npm install -g mocha-phantomjs
```
Install Yeoman, Bower and Grunt:
$ npm install -g yo grunt-cli bower
Install this generator
```
$ npm install -g generator-marionette-coffee
```
### Usage

scaffold a new app:

```
$ mkdir your-app-name && cd your-app-name
$ yo marionette-coffee
```

### Directory Structure

 * ____app/

  * index.html (Generated from template.html)

  * r.js
  _optimizer_

  * template.html
  _generates html template for index files in app/ and dist/ for more info see [targetHtml](https://github.com/changer/grunt-targethtml)_

   * ____assets/

      * ____coffee/    _all coffeescript in folder will be compiled to js/ folder_

        * ____app.coffee0
          * ____apps/
            * ____sub_app/ _for sub-application folders_

              * _____sub_app_.coffee
              _mediator for sub_application_

        * ____build.js
        _build configuration for r.js_

        * ____entities/
        _for entity files_

        * ____require_main.coffee
        _main configuration file_

      * ____css/



* server/
  * ____app.js
  _express server_

* ____test/
  * ____coffee/
  _coffeescript for test specs_
  * ____spec/
  _where the specs written in coffeescript are compiled to_

  * ____SpecRunner.coffee
  _Requirejs configuration for tests_
  * ____TestRunner.html


###### Still In development
 * SubGenerators
  * application module
  * entities

## License

MIT

[Another great marionette generator worth checking out](https://github.com/mrichard/generator-marionette)


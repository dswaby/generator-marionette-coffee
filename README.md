# generator-marionette-coffee [![Build Status](https://secure.travis-ci.org/dswaby/generator-marionette-coffee.png?branch=master)](https://travis-ci.org/dswaby/generator-marionette-coffee)

Yeoman generator for marrionette app written in coffescript

* Starting point for new marionette project

* includes hello world type module

* using boilerplate express server


###### Includes

  * Marionette
  * Coffeescript
  * Requirejs
  * Twitter Bootstrap (optional)
  * Mocha unit tests with html testrunner as well as run in phantomjs
  * Organized using module pattern
    - for more information about the module pattern with marionette, I highly recommend David Sulac's [book on Marionette.js](https://leanpub.com/marionette-gentle-introduction)


```
$ npm install -g generator-marionette-coffee
```

Finally, initiate the generator:

```
$ yo marionette-coffee
```



 * ____app/

 * ____assets/

    * ____coffee/    _all coffeescript in folder will be compiled to js/ folder_

      * ____app.coffee0
        * ____apps/
            *____sub_app/ _sub_applications_
              *_____sub_app_.coffee _mediator for sub_application_

      * ____build.js    _build configuration for r.js_
      * ____entities/
      _for entity files_

      * ____require_main.coffee
      _main configuration file_
    * ____css/

      * (Generated)index.html
      * r.js _optimizer_
      * template.html _generates html for app/ and dist/, uses targetAdmin to conditionally include certain lines_
    * server/
      * ____app.js   _express server_
  * ____test/
    * ____coffee/   _coffeescript for test specs_

    * ____spec/
      _where Specs in coffeescript is compiled to_
    * ____SpecRunner.coffee
          _Requirejs configuration for tests_
    * ____TestRunner.html

[More involved and further along marionette generator I recommend looking at before using this one](https://github.com/mrichard/generator-marionette)

### Still in development
Generators for
 * modules
 * entities

## License

MIT

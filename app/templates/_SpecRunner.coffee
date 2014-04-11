requirejs.config
  baseUrl: "./../app/assets"
  paths:
    backbone: "./../assets/bower_components/backbone/backbone"
    localstorage: "./../assets/bower_components/backbone.localstorage/backbone.localstorage"
    jquery: "./../assets/bower_components/jquery/jquery"
    # "jquery-ui": "./../assets/bower_components/jquery-ui/ui/jquery-ui"
    underscore: "./../assets/bower_components/underscore/underscore"
    marionette: "./../assets/bower_components/backbone.marionette/lib/backbone.marionette"
    tpl: "./../assets/bower_components/requirejs-tpl/tpl"
    json2: "./../assets/bower_components/json2/json2"
    chai: "./../assets/bower_components/chai/chai"
    mocha: "./../assets/bower_components/mocha/mocha"

  # sinon: "./bower_components/sinon/lib/sinon"
  shim:
    underscore:
      exports: "_"

    backbone:
      deps: [
        "jquery"
        "underscore"
        "json2"
      ]
      exports: "Backbone"

    marionette:
      deps: ["backbone"]
      exports: "Marionette"


    localstorage: ["backbone"]

require [
  #files being tested
  "./../../../test/hello"
  "./../../../test/spec/TestSpec"
  "./../../../test/spec/HelloSpec"

], (App) ->
  if window.mochaPhantomJS
    mochaPhantomJS.run()
  else
    mocha.run()
  return

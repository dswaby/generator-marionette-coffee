# coffescript output to app/assets/js directory
requirejs.config
  baseUrl: "assets"
  urlArgs: 'bust=' + Math.random() # cachebuster
  paths:
    backbone: "./bower_components/backbone-amd/backbone"
    localstorage: "./bower_components/backbone.localstorage/backbone.localstorage"
    jquery: "./bower_components/jquery/jquery"
    underscore: "./bower_components/underscore-amd/underscore"
    marionette: "./bower_components/backbone.marionette/lib/backbone.marionette"
    tpl: "./bower_components/requirejs-tpl/tpl"
    json2: "./bower_components/json2/json2"

  shim:
    underscore:
      exports: "_"

    backbone:
      deps: ["jquery", "underscore", "json2"]
      exports: "Backbone"

    marionette:
      deps: ["backbone"]
      exports: "Marionette"

  name: "app",
  out: "app.min.js"

require ["js/app"], (App) ->
  App.start()

requirejs [
  "jquery"
], ($) ->

  (($, window, undefined_) ->
    $doc = $(document)
  ) $, window
  return


define ["marionette"], (Marionette) ->

  App = new Marionette.Application()

  App.addRegions
    # add regions


  # route helpers
  App.navigate = (route, options) ->
    options or (options = {})
    Backbone.history.navigate route, options

  App.currentPath = ->
    Backbone.history.fragment

  App.on "initialize:after", ->
    if Backbone.history
        Backbone.history.start()
        # do stuff here based on route

  App
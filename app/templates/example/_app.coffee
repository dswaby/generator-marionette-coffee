define ["marionette"], (Marionette) ->

  App = new Marionette.Application()

  App.addRegions
    mainRegion: "#main-region"
    dialogRegion: "#dialog-Region"

  # route helpers
  App.navigate = (route, options) ->
    options or (options = {})
    Backbone.history.navigate route, options

  App.getCurrentRoute = ->
    Backbone.history.fragment

  App.on "initialize:after", ->
    require ["js/apps/sub_app/sub_app"], ->
      console.log "Marionette Application Started"
      if Backbone.history
        Backbone.history.start()
        if App.getCurrentRoute() is ""
          App.navigate "main"
          App.trigger "landing:home"

        if App.getCurrentRoute() is "main"
          App.trigger "landing:home"

  App
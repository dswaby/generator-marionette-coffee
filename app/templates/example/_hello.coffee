define ["app"], (App) ->
  App.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->
    Entities.Hello = Backbone.Model.extend(
      defaults:
        title: "Hello App"
    )
    initializeHello = new Entities.Hello(
      title: "Hello <%= appname %> "
      message: "Everything is working, ...purrfectly"
    )

    API =
      # get feed model by Id
      getHelloEntity: ->
        defer = $.Deferred()
        defer.resolve initializeHello
        defer.promise()

    App.reqres.setHandler "hello", ->
      API.getHelloEntity()

  return
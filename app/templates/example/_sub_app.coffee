define ["js/app"], (App) ->
  App.module "SubApp", (SubApp, App, Backbone, Marionette, $, _) ->
    App.Router = Marionette.AppRouter.extend(
      appRoutes:
        main:"sayHello"
    )
    API =
      sayHello: ->
        require ["js/apps/sub_app/hello/hello_controller"], ->
          console.log("API hello controller")
          App.SubApp.Hello.Controller.sayHello()

    App.on "landing:home", ->

      console.log("API.sayHello()")
      API.sayHello()

    App.addInitializer ->
      new App.Router(controller: API)

  App.SubApp
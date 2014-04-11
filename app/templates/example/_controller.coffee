define ["js/app", "js/apps/sub_app/hello/hello_view"], (App, View) ->
  App.module "SubApp.Hello", (Hello, App, Backbone, Marionette, $, _) ->
    Hello.Controller =
      HelloModel =
      sayHello: ->
        require ["js/entities/hello"], ->
          getHello = App.request "hello"
          $.when(getHello).done (hello) ->
            helloView = new View.HelloView(model: hello)

            App.mainRegion.show helloView

  App.SubApp.Hello.Controller


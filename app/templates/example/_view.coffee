define ["app", "tpl!apps/sub_app/hello/templates/hello_view.tpl"], (App, helloTpl) ->
  App.module "SubApp.View", (View, App, Backbone, Marionette, $, _) ->

    View.HelloView = Marionette.ItemView.extend(
      template: helloTpl
    )

  App.SubApp.View
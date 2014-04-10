define [
  "app"
  "apps/sub_app/hello/hello_view"
  "./../../app/assets/bower_components/chai/chai"
  "apps/sub_app/hello/hello_controller"
  "entities/hello"
], (App, View, chai) ->
  expect = undefined
  expect = chai.expect
  describe "Hello", ->
    describe "Model Creation", ->
      it "expect to be \"ok\"", ->
        hello = undefined
        hello = new App.Entities.Hello()
        expect(hello).to.be.ok
        return
      return
  return

define ["js/app",
  "./../../app/assets/bower_components/chai/chai",
  "./../../app/assets/bower_components/sinon/lib/sinon",
  "./../../../test/hello"
  ], (App, chai) ->
  expect = chai.expect;

  describe "Test libraries", ->
    describe "Chai", ->
      it "expect to be equal using \"/expect\" function", ->
        expect(hello()).to.equal("Hello World")
        return
      return
  return
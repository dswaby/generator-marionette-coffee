/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('marionette-coffee generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('marionette-coffee:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.,
     '.editorconfig',
     '.bowerrc',
     '.gitignore',
     'package.json',
     'bower.json',
     'Gruntfile.js',
     'README.md',
     'app/r.js',
     'app/favicon.ico',
     'app/404.html',
     'app/assets/css/app.css',
     'app/assets/require_main.coffee',
     'test/SpecRunner.coffee',
     'app/assets/build.js',
     'server/app.js',
     'test/TestRunner.html',
     'test/coffee/TestSpec.coffee',
     'test/hello.js',
     'app/template.html',
     'app/assets/coffee/app.coffee',
     'app/assets/coffee/apps/sub_app/sub_app.coffee',
     'app/assets/coffee/apps/sub_app/hello/hello_view.coffee',
     'app/assets/coffee/apps/sub_app/hello/hello_controller.coffee',
     'app/assets/coffee/apps/sub_app/hello/templates/hello_view.tpl',
     'app/assets/coffee/entities/hello.coffee',
     'test/coffee/HelloSpec.coffee'
    ];

    helpers.mockPrompt(this.app, {
      'someOption': true
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });

it('creates expected files when empty option is used', function (done) {
    var expected = [
      // add files you expect to exist here.,
     '.editorconfig',
     '.bowerrc',
     '.gitignore',
     'package.json',
     'bower.json',
     'Gruntfile.js',
     'README.md',
     'app/r.js',
     'app/favicon.ico',
     'app/404.html',
     'app/assets/css/app.css',
     'app/assets/require_main.coffee',
     'test/SpecRunner.coffee',
     'app/assets/build.js',
     'server/app.js',
     'test/TestRunner.html',
     'test/coffee/TestSpec.coffee',
     'test/hello.js',
     'app/template.html',
     'app/assets/coffee/app.coffee'
    ];

    helpers.mockPrompt(this.app, {
      'empty': true
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});

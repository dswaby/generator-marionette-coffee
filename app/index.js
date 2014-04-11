'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var Generator = module.exports = function Generator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);
    // for hooks to resolve on mocha by default
    this.options = options;
    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
    this.empty = this.options['empty'];
};
util.inherits(Generator, yeoman.generators.Base);
Generator.prototype.askFor = function askFor() {
    var cb = this.async();
    var done = this.async();
    // have Yeoman greet the user
    this.log(this.yeoman);
    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the marionette-coffeescript generator!!'));
    var prompts = [{
        type: 'string',
        name: 'appname',
        message: 'What would you like to name this app?',
        default: 'App'
    }, {
        type: 'confirm',
        name: 'bootstrap',
        message: 'Include twitter bootstrap?',
        default: true
    }];
    this.prompt(prompts, function (props) {
        this.appname = props.appname;
        this.bootstrap = props.bootstrap;
        done();
        cb();
    }.bind(this));
};
Generator.prototype.configFiles = function configFiles() {
    // configuration files
    this.copy('editorconfig', '.editorconfig');
    this.copy('bowerrc', '.bowerrc');
    this.copy('gitignore', '.gitignore');
    this.copy('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('Gruntfile.js');
    this.copy('_README.md', 'README.md');

    this.mkdir('app');
    this.copy('_r.js', 'app/r.js');
    this.copy('_favicon.ico', 'app/favicon.ico');
    this.copy('_404.html', 'app/404.html');

    this.mkdir('app/assets');
    this.mkdir('app/assets/css/');
    this.copy('_app.css', 'app/assets/css/app.css');
    this.mkdir('app/assets/coffee');
    this.copy('_require_main.coffee', 'app/assets/require_main.coffee');

    //test config
    this.mkdir('test');
    this.copy('_SpecRunner.coffee', 'test/SpecRunner.coffee');


    // build config
    // this.mkdir('app/assets/js');
    this.copy('_build.js', 'app/assets/build.js');
};
Generator.prototype.app = function app() {
    //folders

    this.mkdir('app/assets/coffee/apps');
    this.mkdir('app/assets/coffee/entities');
    this.mkdir('app/assets/coffee/common');
    this.mkdir('app/assets/img');
    this.mkdir('server');

    // this.copy('_scssApp.scss', 'app/assets/scss/app.scss');
    this.copy('_expressApp.js', 'server/app.js');
    this.copy('_TestRunner.html', 'test/TestRunner.html');
    this.mkdir('test/coffee/');
    this.copy('_TestSpec.coffee', 'test/coffee/TestSpec.coffee');
    this.copy('_hello.js', 'test/hello.js');
    if (this.options['empty']) {
        this.template('_template.html', 'app/template.html');
        this.copy('_app.coffee', 'app/assets/coffee/app.coffee');
    }
    else {
        // folders
        this.mkdir('app/assets/coffee/apps/sub_app');
        this.mkdir('app/assets/coffee/apps/sub_app/hello/');
        this.mkdir('app/assets/coffee/apps/sub_app/hello/templates/');
        // example files
        this.template('_template.html', 'app/template.html');
        this.copy('example/_app.coffee', 'app/assets/coffee/app.coffee');
        this.copy('example/_sub_app.coffee', 'app/assets/coffee/apps/sub_app/sub_app.coffee');
        this.copy('example/_view.coffee', 'app/assets/coffee/apps/sub_app/hello/hello_view.coffee');
        this.copy('example/_controller.coffee', 'app/assets/coffee/apps/sub_app/hello/hello_controller.coffee');
        this.copy('example/_template.tpl', 'app/assets/coffee/apps/sub_app/hello/templates/hello_view.tpl');
        this.template('example/_hello.coffee', 'app/assets/coffee/entities/hello.coffee');
        this.copy('example/_HelloSpec.coffee', 'test/coffee/HelloSpec.coffee');
    }
};
Generator.prototype.install = function () {
    if (this.options['skip-install']) {
        return;
    }
    var done = this.async();
    this.installDependencies({
        skipMessage: this.options['skip-install-message'],
        skipInstall: this.options['skip-install'],
        callback: done
    });
};
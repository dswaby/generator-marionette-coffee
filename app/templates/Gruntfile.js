var mountFolder = function (connect, dir) {
    'use strict';
    return connect.static(require('path').resolve(dir));
};
module.exports = function (grunt) {
    'use strict';
    var config = {
        app: 'app',
        dist: 'dist',
        test: 'test'
    };
    grunt.initConfig({
        config: config,
        watch: {
            coffee: {
                files: ['<%%= config.app %>/assets/coffee/{,**/}*.coffee'],
                tasks: ['coffee:glob_to_multiple','coffee:amdConfig', 'shell:mocha-phantomjs']
            },
            tests: {
                files: ['<%%= config.test %>/coffee/*.coffee'],
                tasks: ['coffee:testcoffee', 'shell:mocha-phantomjs']
            },
            templates: {
                files: ['<%%= config.app %>}/assets/**/templates/*.tpl'],
                tasks: ['copy:templates', 'coffe:glob_to_multiple']
            },
            indextemplate: {
                files: ['<%%= config.app %>/template.html'],
                tasks: ['targethtml:app']
            },
            css: {
                files: ['./<%%= config.app %>/assets/bower_components/bootstrap/dist/css/bootstrap.css', './<%%= config.app %>/assets/css/app.css'],
                <%
                if (bootstrap) { %> tasks: ['cssmin:combine'] <%
                }
                else { %>
                    //being lazy, will still live reload
                    tasks: [] <%
                } %>
            },
            livereload: {
                files: ['<%%= config.app %>/index.html', '{.tmp,<%%= config.app %>}/assets/css/{,**/}*.css', '{.tmp,<%%= config.app %>}/assets/js/{,**/}*.js', '{.tmp,<%%= config.app %>}/assets/**/templates/{,**/}*.tpl'],
                options: {
                    livereload: true
                }
            }
        },
        // express server
        express: {
            options: {
                // Override defaults here
                port: '9000'
            },
            dev: {
                options: {
                    port: '1337',
                    args: ['../app'],
                    cmd: process.argv[0],
                    script: 'server/app.js'
                }
            },
            dist: {
                options: {
                    args: ['../dist'],
                    cmd: process.argv[0],
                    port: '9000',
                    script: 'server/app.js'
                }
            }
        },
        // generate html based on target
        targethtml: {
            app: {
                files: {
                    '<%%= config.app %>/index.html': '<%%= config.app %>/template.html'
                }
            },
            dist: {
                files: {
                    './<%%= config.dist %>/index.html': '<%%= config.app %>/template.html'
                }
            }
        },
        // connect server
        connect: {
            test: {
                options: {
                    port: 1234,
                    base: './'
                }
            }
        },
        // coffeescript
        coffee: {
            glob_to_multiple: {
                expand: true,
                flatten: false,
                bare: true,
                cwd: '<%%= config.app %>/assets/coffee/',
                src: ['**/*.coffee', '*.coffee'],
                dest: '<%%= config.app %>/assets/js/',
                ext: '.js'
            },
            testcoffee: {
                expand: true,
                flatten: true,
                bare: true,
                cwd: './',
                src: ['test/coffee/*.coffee'],
                dest: 'test/spec/',
                ext: '.js'
            },
            specRunner: {
                flatten: true,
                options: {
                    bare: true
                },
                cwd: './',
                src: ['test/SpecRunner.coffee'],
                dest: 'test/SpecRunner.js'
            },
            amdConfig: {
                flatten: true,
                options: {
                    bare: true
                },
                cwd: './',
                src: ['<%%= config.app %>/assets/require_main.coffee'],
                dest: '<%%= config.app %>/assets/require_main.js'
            }
        },
        //copy templates
        copy: {
            templates: {
                files: [{
                    expand: true,
                    cwd: '<%%= config.app %>/assets/coffee/',
                    src: ['**/*.{tpl,md}'],
                    dest: '<%%= config.app %>/assets/js/'
                }]
            },
            requireBuilt: {
                files: [{
                    cwd: './',
                    src: ['<%%= config.app %>/assets/require_main_built.js'],
                    dest: '<%%= config.dist %>/js/require_main_built.js'
                }]
            }
        },
        cssmin: {
            combine: {
                options: {
                    banner: '/* css for <%%= appname %> v0.0.0 */'
                },
                files: {<% if (bootstrap) { %>
                    './<%%= config.app %>/assets/css/app.combined.css': ['./<%%= config.app %>/assets/bower_components/bootstrap/dist/css/bootstrap.css', './<%%= config.app %>/assets/css/app.css']
                <% } else if (foundation) { %>
                    './<%%= config.app %>/assets/css/app.combined.css': ['./<%%= config.app %>/assets/bower_components/foundation/css/foundation.css', './<%%= config.app %>/assets/css/app.css']
                <% } else if (!foundation && !bootstrap) { %>
                    './<%%= config.app %>/assets/css/app.css': ['./<%%= config.app %>/assets/css/app.css']
                <% } %>}
                },
                minify: {
                    cwd: './',<% if (!foundation && !bootstrap) { %>
                    src: '<%%= config.app %>/assets/css/app.css',<% } else { %>
                    src: '<%%= config.app %>/assets/css/app.combined.css',<% } %>
                    dest: '<%%= config.dist %>/css/app.min.css'
                }
        },
        shell: {
            'mocha-phantomjs': {
                command: 'mocha-phantomjs -R dot http://localhost:1234/test/TestRunner.html',
                options: {
                    stdout: true,
                    stderr: true
                }
            },
            'buildRequire': {
                command: 'node r.js -o assets/build.js',
                options: {
                    stdout: true,
                    execOptions: {
                        cwd: './app'
                    }
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:1337',
                app: 'Google Chrome'
            },
            build: {
                path: 'http://localhost:9000',
                app: 'Google Chrome'
            },
            testrunner: {
                path: 'http://localhost:1234/test/TestRunner.html',
                app: 'Google Chrome'
            }
        },
         rig: {
            compile: {
                files: {
                    'dist/simple.js': ['src/simple.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-open');
    grunt.registerTask('default', ['dev', 'express:dev', 'connect:test', 'shell:mocha-phantomjs', 'open:dev', 'open:testrunner', 'watch']);
    grunt.task.registerTask('dev', 'subset of common development tasks used in other tasks', function () {
        grunt.task.run(['copy:templates', 'cssmin:combine', 'coffee', 'targethtml:app'
        ]);
    });
    grunt.task.registerTask('test', 'for writing tests, only watches test folder and runs on change', function () {
        grunt.task.run(['coffee:testcoffee', 'connect:test', 'shell:mocha-phantomjs', 'watch:tests']);
    });
    grunt.task.registerTask('build', 'creates optimized distribution', function () {
        grunt.task.run(['dev', 'targethtml:dist', 'shell:buildRequire', 'copy:requireBuilt', 'cssmin:minify', 'express:dist', 'open:build', 'watch:indextemplate']);
    });
};
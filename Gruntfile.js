module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'app/public/**/*.js'],//, 'test/**/*.js'
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },


    express: {
      options: {
        port: process.env.PORT || 3000
      },
      dev: {
        options: {
          script: 'bin/www',
          debug: true,
          'node_env': 'development'
        }
      }
    },

    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },

    watch: {
      js: {
        files: ['app/public/scripts/**/*.js'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      express: {
        files: [
          'bin/www'
        ],
        tasks: ['express:dev', 'wait'],
        options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    },
    includeSource: {
      options: {
        basePath: 'app/'
      },
      myTarget: {
        files: {
          'app/index.html': 'template/index.tpl.html'
        }
      }
    },
    wiredep: {
      task: {

        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: ['app/index.html']
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'qunit']);

  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function () {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 500);
  });

  grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
    this.async();
  });

  grunt.registerTask('default', ['includeSource', 'wiredep', 'jshint', 'express:dev', 'express-keepalive']);//,  'qunit', 'concat', 'uglify']);

};
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-remove-logging");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('@lodder/grunt-postcss');

    grunt.initConfig({

        includes: {
            'html-files': {
                cwd: 'src',
                src: ['**/*.html', '!**/html-parts/**'],
                dest: 'dest/'
            }
        },

        copy: {
            'app-files': {
                expand: true,
                cwd: 'src',
                src: [
                    '**/*',                 // Match all the files inside the `src` directory.
                    '!**/html-parts/**',    // Exclude the `html-parts` folders since we don't need it in production.
                    '!**/scss/**',          // Exclude the SASS files since they are processed with the `sass` task.
                    '!**/*.html',           // Exclude the HTML files since they are processed with the `includes` task.
                    '!**/*.js',             // Exclude the JS files since they are processed with the `uglify` task.
                ],
                dest: 'dest/'
            }
        },

        concat: {
            options: {
                stripBanners: true
            },
            jsFiles: {
                src: 'src/js/**/*.js',
                dest: 'dest/js/scripts.js'
            }
        },

        sass: {
            options: {
                style: 'expanded',
                noCache: true,
                sourcemap: 'none'
            },
            scssFiles: {
                src: 'src/scss/styles.scss',
                dest: 'dest/css/styles.css'
            }
        },

        postcss: {
            options: {
                processors: [
                    require('autoprefixer')()
                ]
            },
            cssFiles: {
                src: '<%= sass.scssFiles.dest %>'
            }
        },

        cssmin: {
            cssFiles: {
                expand: true,
                cwd: 'dest/css',
                src: ['*.css', '!*.min.css'],
                dest: 'dest/css',
                ext: '.min.css'
            }
        },

        jshint: {
            'js-files': ['Gruntfile.js', 'src/**/*.js']
        },

        removelogging: {
            jsFiles: {
                src: '<%= concat.jsFiles.dest %>'
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= grunt.template.today("dd.mm.yyyy") %> */\n'
            },
            'js-files': {
                files: {
                    'dest/js/scripts.min.js': '<%= concat.jsFiles.dest %>'
                }
            }
        },

        watch: {
            options: {
                cwd: 'src'
            },
            'html-files': {
                files: ['**/*.html'],
                tasks: ['html']
            },
            'scss-files': {
                files: ['**/*.scss'],
                tasks: ['styles']
            },
            'js-files': {
                files: ['../Gruntfile.js', '**/*.js'],
                tasks: ['scripts']
            },
            'other-files': {
                files: ['**/*', '!**/*.html', '!**/*.scss', '!**/*.js'],
                tasks: ['assets']
            }
        }
    });

    grunt.registerTask('html', ['includes']);
    grunt.registerTask('styles', ['sass', 'postcss', 'cssmin']);
    grunt.registerTask('scripts', ['jshint', 'concat', 'removelogging', 'uglify']);
    grunt.registerTask('assets', ['copy']);

    grunt.registerTask('default', ['html', 'styles', 'scripts', 'assets', 'watch']);
};

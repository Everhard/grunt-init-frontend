module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

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
            'scss-files': {
                src: 'src/scss/styles.scss',
                dest: 'dest/css/styles.css'
            }
        },
        jshint: {
            'js-files': ['Gruntfile.js', 'src/**/*.js']
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
                tasks: ['includes']
            },
            'scss-files': {
                files: ['**/*.scss'],
                tasks: ['sass']
            },
            'js-files': {
                files: ['../Gruntfile.js', '**/*.js'],
                tasks: ['jshint', 'uglify']
            },
            'other-files': {
                files: ['**/*', '!**/*.html', '!**/*.scss'],
                tasks: ['copy']
            }
        }
    });

    grunt.registerTask('default', ['includes', 'copy', 'sass', 'jshint', 'concat', 'uglify', 'watch']);
};

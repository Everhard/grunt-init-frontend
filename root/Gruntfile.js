module.exports = function(grunt) {
    
    // Project configuration:
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        copy: {
            dist: {
                src: '**/*.html',
                dest: 'dist/',
                expand: true,
                cwd: 'src/'
            }
        },
        
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: ['src/js/**/*.js'],
                dest: 'dist/js/scripts.js'
            }
        },
        
        removelogging: {
            dist: {
                src: '<%= concat.dist.dest %>'
            }
        },
        
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/scripts.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        
        jshint: {
            files: ['Gruntfile.js', 'src/js/**/*.js']
        },
        
        less: {
            dist: {
                src: 'src/less/**/*.less',
                dest: 'dist/css/styles.css'
            }
        },
        
        cssmin: {
            dist: {
                src: '<%= less.dist.dest %>',
                dest: 'dist/css/styles.min.css'
            }
        },
        
        watch: {
            js: {
                files: 'src/js/**/*.js',
                tasks: ['scripts']
            },
            less: {
                files: 'src/less/**/*.less',
                tasks: ['styles']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-remove-logging");
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('styles', ['less', 'cssmin']);
    grunt.registerTask('scripts', ['concat', 'removelogging', 'uglify', 'jshint']);
    grunt.registerTask('html', ['copy']);
    grunt.registerTask('default', ['html', 'styles', 'scripts', 'watch']);
};
/*
 * grunt-init-frontend
 * https://github.com/Everhard/grunt-init-frontend
 *
 * Copyright (c) 2016 Andrew Dorokhov
 * https://dorokhov.dev
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Basic template description.
 * @type {string}
 */
exports.description = 'This is an easy to install grunt template to start developing your frontend in seconds.';

/**
 * Template-specific notes to be displayed before question prompts.
 * @type {string}
 */
exports.notes = 'Thank you for using this template! ' +
    'Take a look at the https://github.com/Everhard/grunt-init-frontend repo before using.';

/**
 * Any existing file or directory matching this wildcard will cause a warning.
 * @type {string}
 */
exports.warnOn = '*';

/**
 * The actual init template.
 *
 * @param grunt
 * @param init
 * @param done
 */
exports.template = function(grunt, init, done) {

    const userValues = [
        init.prompt('name', 'my-project'),
        init.prompt('description', 'My awesome project'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('author_url'),
        init.prompt('repository')
    ];

    init.process({'version':'0.1.0'}, userValues, function(err, props) {

        // Files to copy (and process).
        const files = init.filesToCopy(props);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // Generate package.json file, used by npm and grunt.
        init.writePackageJSON('package.json', {
            name: props.name,
            version: props.version,
            author_name: props.author_name,
            author_email: props.author_email,
            author_url: props.author_url,
            repository: {
                type: "git",
                url: props.repository
            },
            devDependencies: {
                "grunt": "^1.6.1",
                "grunt-includes": "^1.1.0",
                "grunt-contrib-concat": "^2.1.0",
                "grunt-contrib-copy": "^1.0.0",
                "grunt-contrib-jshint": "^3.2.0",
                "grunt-contrib-cssmin": "^5.0.0",
                "grunt-contrib-sass": "^2.0.0",
                "grunt-contrib-uglify": "^5.2.2",
                "grunt-remove-logging": "^0.2.0",
                "grunt-contrib-watch": "^1.1.0",
                "@lodder/grunt-postcss": "^3.1.1",
                "autoprefixer": "^10.4.20",
            }
        });

        // All done!
        done();
    });
};

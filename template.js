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

    init.process({}, [], function(err, props) {

        // Files to copy (and process).
        const files = init.filesToCopy(props);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // All done!
        done();
    });
};

/*
 * grunt-init-html5layout
 * https://gruntjs.com/
 *
 * Copyright (c) 2016 Andrew Dorokhov
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = "Create a basic file structure for HTML5-layouts.";

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
	init.process({'version':'0.1.0'}, [
		// Prompt for these values.
		init.prompt('title', 'HTML5 Layout'),
		init.prompt('name', 'html5-layout'),
		init.prompt('description', 'HTML5 Layout for exclusive web project.'),
		init.prompt('repository'),
		init.prompt('author_name'),
		init.prompt('author_email')
	], function(err, props) {
            
                // Creating folders:
                var join = require("path").join;
                grunt.file.mkdir( join(init.destpath(), 'src/js') );
                grunt.file.mkdir( join(init.destpath(), 'src/less') );
                grunt.file.mkdir( join(init.destpath(), 'src/img') );
                grunt.file.mkdir( join(init.destpath(), 'dist') );
            
		// Files to copy (and process).
		var files = init.filesToCopy(props);

		// Actually copy (and process) files.
		init.copyAndProcess(files, props);

		// Generate package.json file, used by npm and grunt.
		init.writePackageJSON('package.json', {
			name: props.name,
			version: props.version,
			devDependencies: {
				'grunt' : 'latest',
                                'grunt-contrib-copy' : 'latest',
                                'grunt-contrib-uglify' : 'latest',
                                'grunt-contrib-concat' : 'latest',
                                'grunt-contrib-jshint' : 'latest',
                                'grunt-remove-logging' : 'latest',
                                'grunt-contrib-less' : 'latest',
                                'grunt-contrib-cssmin' : 'latest',
                                'grunt-postcss' : 'latest',
                                'autoprefixer' : 'latest',
                                'grunt-contrib-watch' : 'latest'
			}
		});

		// All done!
    		done();
	});
}

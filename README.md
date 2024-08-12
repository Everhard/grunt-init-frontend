## grunt-init-frontend
This is an easy to install grunt template to start developing your frontend in seconds.

I included the following grunt plugins into the configuration:

| Plugin name             | Description                                                                                                                                                                                                                                |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `grunt-includes`        | This plugin allows us to include HTML files in other HTML files. It’s useful for breaking up large HTML files into smaller, reusable components, which can then be included where needed in your project.                                  |
| `grunt-contrib-concat`  | This plugin concatenates multiple files into a single file. It's particularly useful for combining several JavaScript or CSS files into one, reducing the number of HTTP requests your site needs to make, which can improve load times.   |
| `grunt-contrib-uglify`  | This plugin minifies JavaScript files by removing unnecessary characters like whitespace, comments, and reducing variable names to shorter versions. Uglify helps reduce the file size, which can enhance the performance of your website. |
| `grunt-contrib-sass`    | This plugin compiles Sass/SCSS files into CSS. It allows us to write styles in Sass, which provides features like variables, nesting, and mixins, and then compiles them into standard CSS files.                                          |
| `grunt-contrib-jshint`  | This plugin integrates JSHint, a popular JavaScript code quality tool, into our Grunt workflow. It helps us detect potential errors and enforce coding conventions in our JavaScript files.                                                |
| `grunt-contrib-copy`    | This plugin is used to copy files and directories from one location to another. I use it so that the destination folder contains all the files from the source folder.                                                                     |
| `grunt-contrib-watch`   | This plugin watches files for changes and automatically runs specified tasks when changes are detected. It’s useful for automating repetitive tasks during development, such as compiling Sass or running JSHint whenever you save a file. |

## Getting started
Install the template:
```shell
$ git clone https://github.com/Everhard/grunt-init-frontend.git ~/.grunt-init/frontend
```
Start using it:
```shell
grunt-init frontend
```

## grunt-init-frontend
This is an easy to install grunt template to start developing your frontend in seconds.

> [!TIP]
> To get started quickly, the template contains folder structure and dummy files - you can edit or replace them.

I included the following grunt plugins into the configuration:

| Plugin name                                                                             | Description                                                                                                                                                                                                                                                 |
|-----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [grunt&#8209;includes](https://www.npmjs.com/package/grunt-includes)                    | This plugin allows us to include HTML files in other HTML files. It’s useful for breaking up large HTML files into smaller, reusable components, which can then be included where needed in your project.                                                   |
| [grunt&#8209;contrib&#8209;concat](https://www.npmjs.com/package/grunt-contrib-concat)  | This plugin concatenates multiple files into a single file. It's particularly useful for combining several JavaScript or CSS files into one, reducing the number of HTTP requests your site needs to make, which can improve load times.                    |
| [grunt&#8209;contrib&#8209;uglify](https://www.npmjs.com/package/grunt-contrib-uglify)  | This plugin minifies JavaScript files by removing unnecessary characters like whitespace, comments, and reducing variable names to shorter versions. Uglify helps reduce the file size, which can enhance the performance of your website.                  |
| [grunt&#8209;contrib&#8209;sass](https://www.npmjs.com/package/grunt-contrib-sass)      | This plugin compiles Sass/SCSS files into CSS. It allows us to write styles in Sass, which provides features like variables, nesting, and mixins, and then compiles them into standard CSS files.                                                           |
| [grunt&#8209;contrib&#8209;jshint](https://www.npmjs.com/package/grunt-contrib-jshint)  | This plugin integrates JSHint, a popular JavaScript code quality tool, into our Grunt workflow. It helps us detect potential errors and enforce coding conventions in our JavaScript files.                                                                 |
| [grunt&#8209;contrib&#8209;copy](https://www.npmjs.com/package/grunt-contrib-copy)      | This plugin is used to copy files and directories from one location to another. I use it so that the destination folder contains all the files from the source folder.                                                                                      |
| [grunt&#8209;remove&#8209;logging](https://www.npmjs.com/package/grunt-remove-logging)  | This plugin removes `console.*` statements from your JS files. It's useful for cleaning up your production code by ensuring that debug logs and other console messages are not included.                                                                    |
| [@lodder/grunt&#8209;postcss](https://www.npmjs.com/package/@lodder/grunt-postcss)      | This plugin integrates PostCSS into the Grunt workflow. PostCSS is a tool for transforming CSS with JavaScript plugins. It allows us to automate tasks such as adding vendor prefixes, optimizing and minifying CSS, or even using future CSS syntax today. |
| [grunt&#8209;contrib&#8209;watch](https://www.npmjs.com/package/grunt-contrib-watch)    | This plugin watches files for changes and automatically runs specified tasks when changes are detected. It’s useful for automating repetitive tasks during development, such as compiling Sass or running JSHint whenever you save a file.                  |

## Getting started
Copy the template script:
```shell
git clone https://github.com/Everhard/grunt-init-frontend.git ~/.grunt-init/frontend
```
Install the template:
```shell
grunt-init frontend
```
Install the dependencies:
```shell
npm install
```
And start working:
```shell
npx grunt
```

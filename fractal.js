'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'BarryPlant Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/components');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

fractal.web.set( "static.path",  __dirname + "/public" );

fractal.components.engine('@frctl/nunjucks'); // use Nunjucks for components

fractal.components.set('ext', '.nunj');

// build directory
fractal.web.set('builder.dest', __dirname + '/build');

const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const baseCustomisedTheme = mandelbrot({
  favicon: '/img/favicon.ico',
  skin: "navy"
  // any other theme configuration values here
});

fractal.web.theme(baseCustomisedTheme);

// Context
const contextData = require('./src/contextData.js');
fractal.components.set('default.context', contextData);

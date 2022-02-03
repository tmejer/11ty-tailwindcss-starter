const path = require('path');
const fs = require("fs");

const { dir, imagePaths, scriptDirs, styleDirs } = require('./config/constants');
const { readableDate, sitemapDate, toAbsoluteUrl, } = require('./config/filters');
const { version, year } = require('./config/shortcodes');

const TEMPLATE_ENGINE = 'njk';

module.exports = function (eleventyConfig) {
    // watch targets
    eleventyConfig.addWatchTarget(styleDirs.source);

    // Custom shortCodes
    eleventyConfig.addShortcode('version', version);
    eleventyConfig.addShortcode('year', year);

    // Custom filters
    eleventyConfig.addFilter('readableDate', readableDate);
    eleventyConfig.addFilter('sitemapDate', sitemapDate);
    eleventyConfig.addFilter('toAbsoluteUrl', toAbsoluteUrl);

    // browser-sync settings
    eleventyConfig.setBrowserSyncConfig({
        open: true,
        browser: 'Microsoft edge',
        
        callbacks: {
            ready: function(err, bs) {
      
              bs.addMiddleware("*", (req, res) => {
                const content_404 = fs.readFileSync(`${dir.output}/404.html`);
                // Add 404 http status code in request header.
                res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
                // Provides the 404 content without redirect.
                res.write(content_404);
                res.end();
              });
            }
          }        

    });

    // Create an alias for the base layer
    // so we can reference it as base rather than the full path.
    eleventyConfig.addLayoutAlias('default', 'default.njk');

    return {
        dir,
        dataTemplateEngine: TEMPLATE_ENGINE,
        markdownTemplateEngine: TEMPLATE_ENGINE,
        htmlTemplateEngine: TEMPLATE_ENGINE,
        templateFormats: ['html', 'md', TEMPLATE_ENGINE],
    };
};

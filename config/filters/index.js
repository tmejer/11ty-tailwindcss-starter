const { DateTime } = require('luxon');
const site = require('../../src/_data/site');
const { throwIfNotType } = require('../utils');

// Format dates
// dd.mm.yyyy
const readableDate = (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('dd.MM.yyyy');
};
// yyyy.mm.dd
const sitemapDate = (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy-MM-dd');
};

// Formats the given string as an absolute url.
const toAbsoluteUrl = (url) => {
    throwIfNotType(url, 'string');
    // Replace trailing slash, e.g., site.com/ => site.com
    const siteUrl = site.url.replace(/\/$/, '');
    // Replace starting slash, e.g., /path/ => path/
    const relativeUrl = url.replace(/^\//, '');

    return `${siteUrl}/${relativeUrl}`;
};

module.exports = {
    readableDate,
    sitemapDate,
    toAbsoluteUrl,
};
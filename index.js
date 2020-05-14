'use strict';

const loaderUtils = require('loader-utils');
const marked = require('marked');

module.exports = (markdown) => {

    const options = loaderUtils.getOptions(this);

    marked.setOptions(options);

    return marked(markdown);
};
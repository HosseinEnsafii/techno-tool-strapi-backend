'use strict';

/**
 * best-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::best-price.best-price');

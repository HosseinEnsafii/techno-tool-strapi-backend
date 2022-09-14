'use strict';

/**
 * incredible-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::incredible-product.incredible-product');

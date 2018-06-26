/**
 * An implementation of the RDF Dataset Normalization specification.
 *
 * @author Dave Longley
 *
 * Copyright 2010-2017 Digital Bazaar, Inc.
 */
const _nodejs = (
  typeof process !== 'undefined' && process.versions && process.versions.node);
if(!_nodejs || require('semver').gte(process.versions.node, '8.0.0')) {
  module.exports = require('./lib');
} else {
  module.exports = require('./dist/node6/lib');
}

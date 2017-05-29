/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

const CSS_FILE_NAME = 'savvy';

module.exports = {
  name: 'ember-savvy-css',

  included() {
    this._super.included.apply(this, arguments);

    this.import(`vendor/${CSS_FILE_NAME}.css`);
  },

  treeForVendor(vendorTree) {
    const savvyTree = new Funnel(path.dirname(require.resolve('@savvy-css/savvy')), {
      files: [
        `${CSS_FILE_NAME}.css`
      ]
    });

    return new MergeTrees([vendorTree, savvyTree]);
  }
};

/* eslint-env node */
module.exports = {
  description: 'The default blueprint for instaling `ember-savvy-css`',

  normalizeEntityName() {},

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall(options) {
    return this.addPackagesToProject([
      { name: 'ember-cli-postcss', target: 'latest' }
    ]);
  }
};

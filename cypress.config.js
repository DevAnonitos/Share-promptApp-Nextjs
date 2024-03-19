const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qikb9b',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

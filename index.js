module.exports = {
  // relaxes airbnb rules
  rules: {
    "@typescript-eslint/quotes": [
      "warn",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    quotes: [
      "warn",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    "comma-dangle": ["error", "always-multiline"],
    "arrow-body-style": "off",
    "arrow-parens": ["warn", "always"],
    "lines-between-class-members": "off",
    "implicit-arrow-linebreak": "off",
    "no-shadow": "off",
    "padded-blocks": "off",
    "object-curly-newline": "off",
    "class-methods-use-this": "off",
    "no-confusing-arrow": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "rollup.config.js",
          "**/stories/**/*.js",
          "**/*test.ts",
          "**/*test.tsx",
          "**/*stories.tsx",
          "src/setupTests.js",
          "**/*__mocks__/**",
        ],
      },
    ],
  },
};

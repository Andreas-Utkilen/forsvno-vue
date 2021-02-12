module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "linebreak-style": "off",
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "no-cond-assign": [
      "error",
      "always"
    ],
    "eol-last": 0,
    "no-multi-assign": "off",
    "no-console": "off",
    "global-require": "off",
    "import/no-unresolved": "off",
    "import/no-absolute-path": "off",
    "no-underscore-dangle": "off",
    "object-shorthand": "off",
    "prefer-destructuring": "off",
    radix: [
      "error",
      "as-needed"
    ],
    "no-plusplus": "off",
    "max-len": "off",
    "func-names": "off",
    "vue/html-self-closing": "off",
    "vue/max-attributes-per-line": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue-a11y/click-events-have-key-events": "off"
  }
};
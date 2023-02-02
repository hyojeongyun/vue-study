module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": ['error', {
      singleQuote: true,
      semi: true,
      useTabs: true,
      tabWidth: 4,
      trailingComma: 'all',
      printWidth: 80,
      bracketSpacing: true,
      arrowParens: 'avoid',
      endOfLine: 'auto',
    }],
    "vue/no-side-effects-in-computed-properties": 0,
    "vue/no-use-v-if-with-v-for": "off",
    "vue/return-in-computed-property": 0,
    "no-case-declarations": 0,
    "no-constant-condition": 0,
    "no-prototype-builtins": 0,
    "no-empty": 0,
    "no-redeclare": 0,
    "no-unused-vars": 1,
    "no-unreachable": 1,
    "vue/no-unused-components": 1,
    "vue/require-prop-type-constructor": 1,
    "no-undef": 2,
    "no-irregular-whitespace": 2,
    "no-dupe-keys": 2,
    "no-useless-escape": 2,
    "no-fallthrough": 0
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};

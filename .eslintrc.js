module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports", "unicorn", "i18next"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-boolean-value": "error",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "ignore",
        propElementValues: "always",
      },
    ],
    "react/no-unknown-property": [
      "error",
      {
        ignore: ["css"],
      },
    ],
    "react/prop-types": "off",
    "unicorn/filename-case": [
      "warn",
      {
        cases: {
          kebabCase: true,
          camelCase: true,
        },
      },
    ],
    // "i18next/no-literal-string": "warn",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react-hook-form",
            importNames: [
              "useFormContext",
              "FormProvider",
              "useWatch",
              "useController",
              "useField",
              "useFieldArray",
            ],
            message: 'Please use from "react-hook-form-mui" instead.',
          },
          {
            name: "react-i18next",
            importNames: ["useTranslation"],
            message: 'Please use from "next-i18next" instead.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: [
        "src/stories/**/*.ts",
        "src/stories/**/*.tsx",
        "src/**/*.stories.tsx",
      ],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
  root: true,
};

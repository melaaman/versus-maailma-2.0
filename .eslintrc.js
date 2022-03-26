module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react",
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
        requireConfigFile: false,
    },
    plugins: ["import"],
    root: true,
    rules: {
        quotes: ["warn", "double"],
        "import/order": [
            "warn",
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: "asc",
                },
                groups: [
                    "builtin",
                    "external",
                    "index",
                    "sibling",
                    "parent",
                    "internal",
                ],
            },
        ],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            1,
            { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
    },
    settings: {
        react: {
            version: "detect", // Detect react version
        },
    },
    overrides: [
        {
            files: ["**/*.ts?(x)"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2018,
                sourceType: "module",
            },
            plugins: ["@typescript-eslint"],
            // You can add Typescript specific rules here.
            // If you are adding the typescript variant of a rule which is there in the javascript
            // ruleset, disable the JS one.
            rules: {
                "@typescript-eslint/no-array-constructor": "warn",
                "no-array-constructor": "off",
            },
        },
    ],
};

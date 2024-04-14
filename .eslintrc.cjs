module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier", // prettier
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react", "prettier"], // prettier
    rules: {
        // suppress errors for missing 'import React' in files
        "react/react-in-jsx-scope": "off",
        // allow jsx syntax in js files (for next.js project)
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        ], //should add ".ts" if typescript project
        "react/prop-types": "off",
    },
    settings: {
        "import/resolver": {
            typescript: {},
        },
        react: {
            version: "detect",
        },
    },
};

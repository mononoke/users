module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "no-console": "off",
        "indent": [
            "error",
            4
        ],
        "semi": [
            "warn",
            "never"
        ],
        "vue/html-indent": [
            "error",
            4,
            {
                "attribute": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": []
            }
        ]
    }
}

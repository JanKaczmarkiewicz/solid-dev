const path = require('path')

const ERROR = 'error'
const OFF = 'off'
const WARN = 'warn'

module.exports = {
    parser: '@typescript-eslint/parser',
    env: { browser: true, node: true, es2021: true },
    extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
    plugins: ['react', 'graphql', '@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },
    globals: {
        GatsbyTypes: 'readonly',
    },
    rules: {
        'no-use-before-define': OFF,
        'react/prop-types': OFF,
        'react/jsx-props-no-spreading': OFF,
        'react/require-default-props': OFF,
        'import/prefer-default-export': OFF,
        'import/extensions': [WARN, 'never'],
        'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx'] }],
        '@typescript-eslint/no-use-before-define': [ERROR],
        'graphql/template-strings': [
            ERROR,
            {
                env: 'relay',
                tagName: 'graphql',
                schemaJsonFilepath: path.resolve(
                    __dirname,
                    'src/__generated__/gatsby-introspection.json'
                ),
            },
        ],
    },
}

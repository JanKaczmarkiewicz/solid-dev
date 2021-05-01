exports.default = {
    extends: 'eslint:recommended',
    plugins: ['react', 'graphql', 'prettier'],
    rules: {
        'graphql/template-strings': [
            'error',
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

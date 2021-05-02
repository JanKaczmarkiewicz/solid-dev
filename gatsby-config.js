module.exports = {
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-typegen`,
            options: {
                emitSchema: {
                    'src/__generated__/gatsby-introspection.json': true,
                    'src/__generated__/gatsby-schema.graphql': true,
                },
                emitPluginDocuments: {
                    'src/__generated__/gatsby-plugin-documents.graphql': true,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'assets/favicon.svg',
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: ['.md'],
                defaultLayouts: {
                    default: require.resolve(
                        './src/components/pages/BlogPost/index.tsx'
                    ),
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/pages`,
            },
        },
    ],
}

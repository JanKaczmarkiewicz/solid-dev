const generatedPath = `src/__generated__`
const generatedTypesPath = `${generatedPath}/gatsby-types.d.ts`
const generatedSchemaPath = `${generatedPath}/gatsby-schema.graphql`
const generatedSchemaIntrospectionPath = `${generatedPath}/gatsby-introspection.json`
const generatedPluginDocumentsPath = `${generatedPath}/gatsby-plugin-documents.graphql`

module.exports = {
    flags: {
        FAST_DEV: true,
        PRESERVE_FILE_DOWNLOAD_CACHE: false,
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark',
        {
            resolve: `gatsby-plugin-typegen`,
            options: {
                outputPath: generatedTypesPath,
                emitSchema: {
                    [generatedSchemaPath]: true,
                    [generatedSchemaIntrospectionPath]: true,
                },
                emitPluginDocuments: {
                    [generatedPluginDocumentsPath]: true,
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
                path: `./src/pages`,
            },
        },
    ],
}

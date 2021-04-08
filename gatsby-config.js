module.exports = {
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
    ],
}

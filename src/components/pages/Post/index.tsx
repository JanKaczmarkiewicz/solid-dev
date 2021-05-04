import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { PageProps } from 'gatsby'
import Header from '../../molecules/Header'
import CodeHighlighter from '../../atom/CodeHighlighter'
import { PostContainer, PostParagraph, PostTitle } from './styled'

const components: MDXProviderComponentsProp = {
    p: PostParagraph,
    code: ({ children, className }) => {
        const language = className.replace(/language-/, '')
        return <CodeHighlighter code={children} language={language} />
    },
}

const Post = ({ data: { mdx } }: PageProps<GatsbyTypes.PostQuery>) => {
    const title = mdx?.frontmatter?.title
    const body = mdx?.body || ''

    const imageData =
        mdx?.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData

    return (
        <>
            <Header withShadow={false} variant="dark" />

            {imageData && (
                <GatsbyImage
                    alt=""
                    image={imageData}
                    style={{ width: '100%' }}
                />
            )}

            <PostContainer>
                <PostTitle>{title}</PostTitle>

                <MDXProvider components={components}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
            </PostContainer>
        </>
    )
}

export default Post

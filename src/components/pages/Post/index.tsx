import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { PageProps } from 'gatsby'
import Header from '../../molecules/Header'
import CodeHighlighter from '../../atom/CodeHighlighter'
import { PostContainer, PostParagraph, PostTitle } from './styled'
import Tags from '../../atom/Tags'

const components: MDXProviderComponentsProp = {
    p: PostParagraph,
    pre: ({ children }) => <>{children}</>,
    code: ({ children, className }) => {
        const language = className.replace(/language-/, '')
        return <CodeHighlighter code={children} language={language} />
    },
}

const Post = ({ data: { mdx } }: PageProps<GatsbyTypes.PostQuery>) => {
    const title = mdx?.frontmatter?.title
    const body = mdx?.body || ''
    const tags = mdx?.frontmatter?.tags || []

    const imageData =
        mdx?.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData

    return (
        <>
            <Header withShadow={false} isDarkMode />

            {imageData && <GatsbyImage alt="" image={imageData} />}

            <PostContainer>
                <PostTitle>{title}</PostTitle>

                <Tags tags={tags} />

                <MDXProvider components={components}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
            </PostContainer>
        </>
    )
}

export default Post

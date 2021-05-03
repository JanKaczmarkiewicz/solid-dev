import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
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

const BlogPost = ({
    data: { markdownRemark },
}: PageProps<GatsbyTypes.PostQuery>) => {
    const title = markdownRemark?.frontmatter?.title
    const html = markdownRemark?.html
    const imageData =
        markdownRemark?.frontmatter?.featuredImage?.childImageSharp
            ?.gatsbyImageData

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

                <MDXProvider components={components}>{html}</MDXProvider>
            </PostContainer>
        </>
    )
}

export default BlogPost

import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { PageProps } from 'gatsby'
import Header from '../../molecules/Header'
import {
    PostCodeHighlighter,
    PostContainer,
    PostH2,
    PostH3,
    PostParagraph,
    PostTags,
    PostTitle,
} from './styled'
import color from '../../../styles/color'

const components: MDXProviderComponentsProp = {
    h2: PostH2,
    h3: PostH3,
    p: PostParagraph,
    pre: ({ children }) => <>{children}</>,
    code: ({ children, className }) => {
        const language = className.replace(/language-/, '')
        return <PostCodeHighlighter code={children} language={language} />
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
            <Header textColor={color.white} />

            {imageData && <GatsbyImage alt="" image={imageData} />}

            <PostContainer>
                <PostTitle>{title}</PostTitle>

                <PostTags tags={tags} />

                <MDXProvider components={components}>
                    <MDXRenderer>{body}</MDXRenderer>
                </MDXProvider>
            </PostContainer>
        </>
    )
}

export default Post

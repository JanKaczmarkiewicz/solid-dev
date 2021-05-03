import { StaticImage } from 'gatsby-plugin-image'
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
    children,
    pageContext,
}: PageProps<undefined, GatsbyTypes.SitePageContext>) => {
    const title = pageContext?.frontmatter?.title

    return (
        <>
            <Header withShadow={false} variant="dark" />

            <StaticImage
                src="../../../../assets/cosmos.jpeg"
                alt=""
                style={{ width: '100%' }}
                placeholder="blurred"
                layout="fixed"
            />

            <PostContainer>
                <PostTitle>{title}</PostTitle>

                <MDXProvider components={components}>{children}</MDXProvider>
            </PostContainer>
        </>
    )
}

export default BlogPost

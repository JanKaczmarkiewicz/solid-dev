import React from 'react'
import {
    ArticleDescription,
    ArticleMeta,
    ArticleHeading,
    ArticleWrapper,
    ArticleTags,
    ArticleImage,
} from './styled'

type ArticleCardProps = GatsbyTypes.FrontPagePostsQuery['allMdx']['nodes'][number]

const ArticleCard = ({
    slug = '',
    excerpt,
    frontmatter,
    timeToRead,
}: ArticleCardProps) => {
    const title = frontmatter?.title
    const date = frontmatter?.date
    const tags = frontmatter?.tags || []
    const image = frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData

    return (
        <>
            <ArticleWrapper to={slug}>
                <ArticleHeading>{title}</ArticleHeading>

                <ArticleDescription>{excerpt}</ArticleDescription>

                <ArticleTags tags={tags} />

                <ArticleMeta>
                    {date} · {timeToRead} min czytania
                </ArticleMeta>

                {image && <ArticleImage alt="" image={image} />}
            </ArticleWrapper>
        </>
    )
}

export default ArticleCard

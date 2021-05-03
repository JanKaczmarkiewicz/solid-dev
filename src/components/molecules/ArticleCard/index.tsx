import React from 'react'
import {
    ArticleDescription,
    ArticleMeta,
    ArticleTitle,
    ArticleWrapper,
    Tag,
    TagsContainer,
} from './styled'

type ArticleCardProps = GatsbyTypes.FrontPagePostsQuery['allMarkdownRemark']['nodes'][number]

const ArticleCard = ({
    excerpt,
    frontmatter,
    timeToRead,
}: ArticleCardProps) => {
    const title = frontmatter?.title
    const date = frontmatter?.date
    const tags = frontmatter?.tags || []
    const slug = frontmatter?.slug || ''

    return (
        <ArticleWrapper to={slug}>
            <ArticleTitle>{title}</ArticleTitle>

            <ArticleDescription>{excerpt}</ArticleDescription>

            <TagsContainer>
                {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </TagsContainer>

            <ArticleMeta>
                {date} · {timeToRead} min czytania
            </ArticleMeta>
        </ArticleWrapper>
    )
}

export default ArticleCard

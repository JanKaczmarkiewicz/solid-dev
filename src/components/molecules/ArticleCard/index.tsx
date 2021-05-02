import React from 'react'
import {
    ArticleDescription,
    ArticleMeta,
    ArticleTitle,
    ArticleWrapper,
    Tag,
    TagsContainer,
} from './styled'

const ArticleCard = ({ title, description, date }) => (
    <ArticleWrapper>
        <ArticleTitle>{title}</ArticleTitle>

        <ArticleDescription>{description}</ArticleDescription>

        <TagsContainer>
            {['react', 'typescript', 'a11y'].map((tag) => (
                <Tag>{tag}</Tag>
            ))}
        </TagsContainer>

        <ArticleMeta>Mar 10 · 7 min read</ArticleMeta>
    </ArticleWrapper>
)

export default ArticleCard

import React from 'react'
import {
    ArticleDescription,
    ArticleMeta,
    ArticleTitle,
    ArticleWrapper,
    Tag,
    TagsContainer,
} from './styled'

const ArticleCard = () => (
    <ArticleWrapper>
        <ArticleTitle>
            The 5 Most Overrated Personalities on The Planet
        </ArticleTitle>

        <ArticleDescription>Our heroes reveal our values.</ArticleDescription>

        <TagsContainer>
            {['react', 'typescript', 'a11y'].map((tag) => (
                <Tag>{tag}</Tag>
            ))}
        </TagsContainer>

        <ArticleMeta>Mar 10 · 7 min read</ArticleMeta>
    </ArticleWrapper>
)

export default ArticleCard

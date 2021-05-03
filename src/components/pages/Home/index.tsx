import React from 'react'
import { PageProps } from 'gatsby'
import ArticleCard from '../../molecules/ArticleCard'
import Header from '../../molecules/Header'
import { Toolbar } from '../../molecules/Header/styled'
import Search from '../../molecules/Search'
import {
    GalaxyImage,
    MainTitle,
    NewsContainer,
    SearchContainer,
    SectionTitle,
    SectionContainer,
} from './styled'

const Home = ({ data }: PageProps<GatsbyTypes.FrontPagePostsQuery>) => {
    const posts = data.allMarkdownRemark.nodes

    return (
        <>
            <Header withShadow variant="light" />
            <Toolbar />
            <SectionContainer>
                <MainTitle>Witaj na blogu o web</MainTitle>
                <GalaxyImage />
                <NewsContainer>
                    <SectionTitle>Nowości</SectionTitle>
                    {posts.map((post) => (
                        <ArticleCard
                            key={post.frontmatter?.slug || ''}
                            {...post}
                        />
                    ))}
                </NewsContainer>

                <SearchContainer>
                    <SectionTitle>Wyszukiwarka</SectionTitle>
                    <Search />
                </SearchContainer>
            </SectionContainer>
        </>
    )
}

export default Home

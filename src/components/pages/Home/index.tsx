import { Link, PageProps } from 'gatsby'
import React from 'react'
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
    const posts = data.allMarkdownRemark.nodes.map(({ frontmatter }) => ({
        title: frontmatter?.title || '',
        description: 'lorem ipsum dolor sit amet',
        date: frontmatter?.date || '',
        slug: frontmatter?.slug || '/',
    }))

    return (
        <>
            <Header withShadow variant="light" />
            <Toolbar />
            <SectionContainer>
                <MainTitle>Witaj na blogu o web</MainTitle>
                <GalaxyImage />
                <NewsContainer>
                    <SectionTitle>Nowości</SectionTitle>
                    {posts.map(({ title, description, date, slug }) => (
                        <Link to={slug}>
                            <ArticleCard
                                title={title}
                                description={description}
                                date={date}
                            />
                        </Link>
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

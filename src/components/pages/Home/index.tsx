import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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

const Home = () => {
    const { allMdx } = useStaticQuery<GatsbyTypes.FrontPagePostsQuery>(graphql`
        query FrontPagePosts {
            allMdx {
                nodes {
                    slug
                    timeToRead
                    excerpt(pruneLength: 64)
                    frontmatter {
                        title
                        date
                        tags
                        featuredImage {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FIXED
                                    width: 100
                                    height: 100
                                )
                            }
                        }
                    }
                }
            }
        }
    `)

    const posts = allMdx.nodes

    return (
        <>
            <Header withShadow isDarkMode={false} />
            <Toolbar />
            <SectionContainer>
                <MainTitle>Witaj na blogu o web</MainTitle>
                <GalaxyImage />
                <NewsContainer>
                    <SectionTitle>Nowości</SectionTitle>
                    {posts.map((post) => (
                        <ArticleCard key={post.slug} {...post} />
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

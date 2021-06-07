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
    TagsTitle,
} from './styled'
import Tags from '../../atom/Tags'
import color from '../../../styles/color'

const Home = () => {
    const { allMdx } = useStaticQuery<GatsbyTypes.FrontPagePostsQuery>(graphql`
        query FrontPagePosts {
            allMdx {
                group(field: frontmatter___tags) {
                    fieldValue
                }

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
                                    width: 200
                                    height: 160
                                )
                            }
                        }
                    }
                }
            }
        }
    `)

    const posts = allMdx.nodes
    const tags = allMdx.group.map(({ fieldValue }) => fieldValue)

    return (
        <>
            <Header textColor={color.black} />
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
                    <TagsTitle>Tags</TagsTitle>
                    <Tags tags={tags} />
                </SearchContainer>
            </SectionContainer>
        </>
    )
}

export default Home

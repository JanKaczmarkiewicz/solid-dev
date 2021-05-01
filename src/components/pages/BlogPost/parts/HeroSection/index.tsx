import React from 'react'
import ArticleCard from '../../../../molecules/ArticleCard'
import Search from '../../../../molecules/Search'
import {
    SectionContainer,
    GalaxyImage,
    MainTitle,
    NewsContainer,
    SectionTitle,
    SearchContainer,
} from './styled'

const HeroSection = () => (
    <SectionContainer>
        <MainTitle>Witaj na blogu o web</MainTitle>
        <GalaxyImage />
        <NewsContainer>
            <SectionTitle>Nowości</SectionTitle>
            {['', ''].map(() => (
                <ArticleCard />
            ))}
        </NewsContainer>

        <SearchContainer>
            <SectionTitle>Wyszukiwarka</SectionTitle>
            <Search />
        </SearchContainer>
    </SectionContainer>
)

export default HeroSection

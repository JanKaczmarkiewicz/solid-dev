import React from 'react'
import Header from '../molecules/Header'
import { Toolbar } from '../molecules/Header/styled'
import HeroSection from './BlogPost/parts/HeroSection'

const Home = () => (
    <>
        <Header withShadow variant="light" />
        <Toolbar />
        <HeroSection />
    </>
)

export default Home

import React from 'react'
import {
    HeaderWrapper,
    LogoWrapper,
    NavigationLink,
    Navigation,
} from './styled'
import Logo from '../../../../../assets/logo.svg'

const Header = () => (
    <HeaderWrapper>
        <NavigationLink to="/">
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
        </NavigationLink>
        <Navigation>
            <NavigationLink to="/">o mnie</NavigationLink>
            <NavigationLink to="/blog">blog</NavigationLink>
            <NavigationLink to="/contact">kontakt</NavigationLink>
        </Navigation>
    </HeaderWrapper>
)

export default Header

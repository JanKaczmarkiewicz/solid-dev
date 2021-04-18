import React, { useState } from 'react'
import {
    HeaderWrapper,
    LogoWrapper,
    NavigationLink,
    Navigation,
    OpenIcon,
    CloseIcon,
} from './styled'
import Logo from '../../../../../assets/logo.svg'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleToggleMobileMenuOpen = () =>
        setIsMobileMenuOpen((isOpen) => !isOpen)

    return (
        <HeaderWrapper>
            <NavigationLink to="/">
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
            </NavigationLink>

            <Navigation isMobileMenuOpen={isMobileMenuOpen}>
                <CloseIcon onClick={handleToggleMobileMenuOpen} />

                <NavigationLink to="/">o mnie</NavigationLink>
                <NavigationLink to="/blog">blog</NavigationLink>
                <NavigationLink to="/contact">kontakt</NavigationLink>
            </Navigation>

            <OpenIcon onClick={handleToggleMobileMenuOpen} />
        </HeaderWrapper>
    )
}

export default Header

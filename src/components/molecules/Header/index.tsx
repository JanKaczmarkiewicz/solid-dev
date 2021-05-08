import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
    HeaderWrapper,
    LogoWrapper,
    NavigationLink,
    Navigation,
    OpenIcon,
    CloseIcon,
    HeaderContent,
} from './styled'
import Logo from '../../../../assets/logo.svg'

export type HeaderProps = {
    isDarkMode: boolean
    withShadow: boolean
}

const LINKS = [
    {
        label: 'o mnie',
        link: '/about',
    },
    {
        label: 'blog',
        link: '/',
    },
    {
        label: 'kontakt',
        link: '/contact',
    },
]

const Header = ({ isDarkMode, withShadow }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleToggleMobileMenuOpen = () =>
        setIsMobileMenuOpen((isOpen) => !isOpen)

    return (
        <HeaderWrapper isDarkMode={isDarkMode} withShadow={withShadow}>
            <HeaderContent>
                <Link to="/">
                    <LogoWrapper>
                        <Logo />
                    </LogoWrapper>
                </Link>

                <Navigation isMobileMenuOpen={isMobileMenuOpen}>
                    <CloseIcon onClick={handleToggleMobileMenuOpen} />

                    {LINKS.map(({ link, label }) => (
                        <NavigationLink
                            key={link}
                            isDarkMode={isDarkMode}
                            to={link}
                        >
                            {label}
                        </NavigationLink>
                    ))}
                </Navigation>

                <OpenIcon
                    isDarkMode={isDarkMode}
                    onClick={handleToggleMobileMenuOpen}
                />
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header

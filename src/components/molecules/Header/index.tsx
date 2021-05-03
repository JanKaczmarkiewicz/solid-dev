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
    variant: 'light' | 'dark'
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

const Header = (props: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleToggleMobileMenuOpen = () =>
        setIsMobileMenuOpen((isOpen) => !isOpen)

    return (
        <HeaderWrapper {...props}>
            <HeaderContent>
                <Link to="/">
                    <LogoWrapper>
                        <Logo />
                    </LogoWrapper>
                </Link>
                <Navigation isMobileMenuOpen={isMobileMenuOpen}>
                    <CloseIcon onClick={handleToggleMobileMenuOpen} />

                    {LINKS.map(({ link, label }) => (
                        <NavigationLink key={link} {...props} to={link}>
                            {label}
                        </NavigationLink>
                    ))}
                </Navigation>
                <OpenIcon {...props} onClick={handleToggleMobileMenuOpen} />
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header

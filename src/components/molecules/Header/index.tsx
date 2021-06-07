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
    MobileNavigation,
    MenuWrapper,
} from './styled'
import Logo from '../../../../assets/logo.svg'

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

type HeaderProps = { textColor: string }

const MobileMenu = ({ textColor }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleOpenMobileNavigation = () => setIsMobileMenuOpen(true)
    const handleCloseMobileNavigation = () => setIsMobileMenuOpen(false)

    return (
        <MenuWrapper>
            <OpenIcon color={textColor} onClick={handleOpenMobileNavigation} />

            {isMobileMenuOpen && (
                <MobileNavigation role="dialog" aria-labelledby="menu">
                    <CloseIcon onClick={handleCloseMobileNavigation} />

                    {LINKS.map(({ link, label }) => (
                        <NavigationLink key={link} to={link}>
                            {label}
                        </NavigationLink>
                    ))}
                </MobileNavigation>
            )}
        </MenuWrapper>
    )
}

const Header = ({ textColor }: HeaderProps) => (
    <HeaderWrapper>
        <HeaderContent>
            <Link to="/">
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
            </Link>

            <Navigation>
                {LINKS.map(({ link, label }) => (
                    <NavigationLink color={textColor} key={link} to={link}>
                        {label}
                    </NavigationLink>
                ))}
            </Navigation>

            <MobileMenu textColor={textColor} />
        </HeaderContent>
    </HeaderWrapper>
)

export default Header

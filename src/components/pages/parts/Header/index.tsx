import React, { useState } from 'react'
import {
    HeaderWrapper,
    LogoWrapper,
    NavigationLink,
    Navigation,
} from './styled'
import Logo from '../../../../../assets/logo.svg'
import Icon from '@mdi/react'
import { mdiClose, mdiMenu } from '@mdi/js'
import styled from 'styled-components'
import mediaQuery from '../../../../styles/mediaQuery'
import spacing from '../../../../styles/spacing'

const NavigationButton = styled.div`
    display: none;
    width: 24px;

    @media ${mediaQuery.mobile} {
        display: block;
    }
`

const OpenButton = styled(NavigationButton)``

const CloseButton = styled(NavigationButton)`
    @media ${mediaQuery.mobile} {
        position: absolute;
        top: ${spacing(1)};
        right: ${spacing(1)};
    }
`

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
                <CloseButton onClick={handleToggleMobileMenuOpen}>
                    <Icon path={mdiClose} />
                </CloseButton>

                <NavigationLink to="/">o mnie</NavigationLink>
                <NavigationLink to="/blog">blog</NavigationLink>
                <NavigationLink to="/contact">kontakt</NavigationLink>
            </Navigation>

            <OpenButton onClick={handleToggleMobileMenuOpen}>
                <Icon path={mdiMenu} />
            </OpenButton>
        </HeaderWrapper>
    )
}

export default Header

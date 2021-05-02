import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import SectionBase from '../../atom/SectionBase'
import { typographyParagraphBig } from '../../../styles/font'
import spacing from '../../../styles/spacing'
import color from '../../../styles/color'
import mediaQuery from '../../../styles/mediaQuery'
import zIndex from '../../../styles/zIndex'
import Icon from '../../atom/Icon'
import { mdiClose, mdiMenu } from '@mdi/js'
import { HeaderProps } from '.'

const toolbarStyles = css`
    height: 64px;
`

export const Toolbar = styled.div`
    ${toolbarStyles}
`

export const HeaderWrapper = styled.header<HeaderProps>`
    position: absolute;
    width: 100%;
    z-index: ${zIndex.header};
    background-color: ${({ variant }) =>
        variant === 'light' ? color.white : color.transparent};
    box-shadow: ${({ withShadow }) =>
        withShadow ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none'};
`

export const HeaderContent = styled(SectionBase)`
    ${toolbarStyles}
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const LogoWrapper = styled.div`
    display: flex;
    padding: ${spacing(1 / 2)} ${spacing(1)};
    background-color: ${color.white};
`

const navigationMobileStyles = css`
    display: flex;
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding-top: ${spacing(5)};
`

export const Navigation = styled.nav<{
    isMobileMenuOpen: boolean
}>`
    display: flex;
    gap: ${spacing(3)};

    @media ${mediaQuery.mobile} {
        display: none;
        ${({ isMobileMenuOpen }) => isMobileMenuOpen && navigationMobileStyles}
    }
`

const getContrastColor = ({ variant }: HeaderProps) =>
    variant === 'light' ? color.black : color.white

// FIXME: find better way to style current link (than &[aria-current])
export const NavigationLink = styled(Link)<HeaderProps>`
    ${typographyParagraphBig}
    text-decoration: none;
    color: ${getContrastColor};

    &[aria-current] {
        color: ${color.primary};
    }
`

const hideOnMobileStyles = css`
    display: none;

    @media ${mediaQuery.mobile} {
        display: block;
    }
`

export const OpenIcon = styled(Icon).attrs({ path: mdiMenu })<HeaderProps>`
    ${hideOnMobileStyles}
    color: ${getContrastColor};
`

export const CloseIcon = styled(Icon).attrs({ path: mdiClose })`
    ${hideOnMobileStyles}
    position: absolute;
    top: ${spacing(1)};
    right: ${spacing(1)};
`
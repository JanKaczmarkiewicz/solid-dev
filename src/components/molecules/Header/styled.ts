import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { mdiClose, mdiMenu } from '@mdi/js'
import SectionBase from '../../atom/SectionBase'
import { typographyParagraphBig } from '../../../styles/font'
import spacing from '../../../styles/spacing'
import color from '../../../styles/color'
import mediaQuery from '../../../styles/mediaQuery'
import zIndex from '../../../styles/zIndex'
import Icon from '../../atom/Icon'

const toolbarStyles = css`
    height: 64px;
`

export const Toolbar = styled.div`
    ${toolbarStyles}
`

export const HeaderWrapper = styled.header`
    position: absolute;
    z-index: ${zIndex.header};
    width: 100%;
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

const hideOnMobileStyles = css`
    @media ${mediaQuery.mobile} {
        display: none;
    }
`

export const Navigation = styled.nav`
    ${hideOnMobileStyles}

    display: flex;
    gap: ${spacing(3)};
`

export const MobileNavigation = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: ${spacing(3)};
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${color.white};
`

export const NavigationLink = styled(Link).attrs({
    activeStyle: { color: color.primary },
})`
    color: ${({ color: textcolor }) => textcolor};
    ${typographyParagraphBig}
`

export const OpenIcon = styled(Icon).attrs({ path: mdiMenu })`
    display: block;
`

export const CloseIcon = styled(Icon).attrs({ path: mdiClose })`
    position: absolute;
    top: ${spacing(1)};
    right: ${spacing(1)};
`

export const MenuWrapper = styled.div`
    @media ${mediaQuery.notMobile} {
        display: none;
    }
`

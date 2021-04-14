import styled from 'styled-components'
import { Link } from 'gatsby'
import SectionBase from '../SectionBase'
import { typographyParagraphBig } from '../../../styles/font'
import spacing from '../../../styles/spacing'
import color from '../../../styles/color'
import mediaQuery from '../../../styles/mediaQuery'
import zIndex from '../../../styles/zIndex'

export const HeaderWrapper = styled(SectionBase).attrs({ as: 'header' })`
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: space-between;
    z-index: ${zIndex.header};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const LogoWrapper = styled.div`
    display: flex;
    padding: ${spacing(1 / 2)} ${spacing(1)};
`

export const Navigation = styled.nav`
    display: flex;
    gap: ${spacing(3)};
    background-color: white;

    @media ${mediaQuery.mobile} {
        top: 0;
        left: 0;
        position: fixed;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
    }
`

// FIXME: find better way to style current link (than &[aria-current])
export const NavigationLink = styled(Link)`
    text-decoration: none;
    ${typographyParagraphBig}

    &[aria-current] {
        color: ${color.primary};
    }
`

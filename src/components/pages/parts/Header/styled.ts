import styled from 'styled-components'
import { Link } from 'gatsby'
import Section from '../Section'
import { typographyParagraphBig } from '../../../font'
import spacing from '../../../spacing'
import color from '../../../color'

export const HeaderWrapper = styled(Section).attrs({ as: 'header' })`
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const LogoWrapper = styled.div`
    display: flex;
    padding: ${spacing(1 / 2)} ${spacing(1)};
`

export const Navigation = styled.nav`
    display: flex;
    gap: ${spacing(3)};
`

// FIXME: find better way to style current link (than &[aria-current])
export const NavigationLink = styled(Link)`
    text-decoration: none;
    ${typographyParagraphBig}

    &[aria-current] {
        color: ${color.primary};
    }
`

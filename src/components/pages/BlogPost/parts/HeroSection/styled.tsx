import styled from 'styled-components'
import {
    typographyHeading2,
    typographyHeading5,
} from '../../../../../styles/font'
import SectionBase from '../../../../atom/SectionBase'
import GalaxySvg from '../../../../../assets/bgGalaxy.svg'
import spacing from '../../../../../styles/spacing'
import mediaQuery from '../../../../../styles/mediaQuery'

export const SectionContainer = styled(SectionBase)`
    display: grid;
    gap: ${spacing(1)};
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
        't t t t t t t . i i i i'
        'n n n n n n n . s s s s';
    padding-top: ${spacing(1)};

    @media ${mediaQuery.mobile} {
        grid-template-columns: auto;
        gap: ${spacing(3)};
        grid-template-areas:
            't'
            'i'
            's'
            'n';
    }
`

export const MainTitle = styled.h1`
    grid-area: t;
    ${typographyHeading2}
`

export const GalaxyImage = styled(GalaxySvg)`
    grid-area: i;
`

export const SectionTitle = styled.h2`
    ${typographyHeading5}
    text-decoration: underline;
`

export const SearchContainer = styled.div`
    grid-area: s;
    display: flex;
    flex-direction: column;
    gap: ${spacing(2)};
`

export const NewsContainer = styled.div`
    grid-area: n;
    display: flex;
    flex-direction: column;
    gap: ${spacing(2)};
`

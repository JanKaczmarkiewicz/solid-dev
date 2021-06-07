import styled from 'styled-components'
import {
    typographyHeading2,
    typographyHeading5,
    typographyHeading6,
} from '../../../styles/font'
import SectionBase from '../../atom/SectionBase'
import GalaxySvg from '../../../../assets/galaxy.svg'
import spacing from '../../../styles/spacing'
import mediaQuery from '../../../styles/mediaQuery'

export const SectionContainer = styled(SectionBase)`
    display: grid;
    grid-template-areas:
        't t t t t t i i i i'
        'n n n n n n s s s s';
    grid-template-columns: repeat(10, 1fr);
    gap: ${spacing(3)};
    padding-top: ${spacing(1)};

    @media ${mediaQuery.mobile} {
        grid-template-areas:
            't'
            'i'
            's'
            'n';
        grid-template-columns: auto;
        gap: ${spacing(3)};
    }
`

export const MainTitle = styled.h1`
    grid-area: t;
    align-self: center;
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
    display: flex;
    flex-direction: column;
    grid-area: s;
    gap: ${spacing(2)};
`

export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: n;
    gap: ${spacing(2)};
`

export const TagsTitle = styled.h3`
    ${typographyHeading6}
`

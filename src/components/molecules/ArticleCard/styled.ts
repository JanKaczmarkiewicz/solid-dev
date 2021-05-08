import styled from 'styled-components'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import spacing from '../../../styles/spacing'
import {
    typographyHeading6,
    typographyParagraphNormal,
    typographyParagraphSmall,
} from '../../../styles/font'
import Tags from '../../atom/Tags'
import mediaQuery from '../../../styles/mediaQuery'

export const ArticleHeading = styled.h3`
    grid-area: h;
    ${typographyHeading6};
`
export const ArticleDescription = styled.p`
    grid-area: d;
    ${typographyParagraphNormal}
`

export const ArticleWrapper = styled(Link)`
    display: grid;
    gap: ${spacing(1)};
    grid-template-columns: 1fr 200px;
    grid-template-areas:
        'h i'
        'd i'
        't i'
        'm i';

    @media ${mediaQuery.mobile} {
        grid-template-columns: auto;
        grid-template-areas:
            'i'
            'h'
            'd '
            't'
            'm';
    }
`

export const ArticleMeta = styled.span`
    grid-area: m;
    ${typographyParagraphSmall};
`

export const ArticleTags = styled(Tags)`
    grid-area: t;
`

export const ArticleImage = styled(GatsbyImage)`
    grid-area: i;
`

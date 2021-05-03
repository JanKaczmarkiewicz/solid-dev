import styled from 'styled-components'
import color from '../../../styles/color'
import spacing from '../../../styles/spacing'
import {
    typographyHeading6,
    typographyParagraphNormal,
    typographyParagraphSmall,
} from '../../../styles/font'
import { Link } from 'gatsby'

export const ArticleTitle = styled.h3`
    ${typographyHeading6}
`
export const ArticleDescription = styled.p`
    ${typographyParagraphNormal}
`

export const ArticleWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: ${spacing(1)};

    :hover {
        ${ArticleTitle}, ${ArticleDescription} {
            -webkit-text-stroke: 1px ${color.primary};
        }
    }
`

export const ArticleMeta = styled.span`
    ${typographyParagraphSmall}
`

export const Tag = styled.button`
    color: white;
    background-color: ${color.primary};
    padding: ${spacing(1 / 2)} ${spacing(1)};
`

export const TagsContainer = styled.div`
    display: flex;
    gap: ${spacing(1)};
`

import styled from 'styled-components'
import color from '../../../color'
import spacing from '../../../spacing'
import {
    typographyHeading6,
    typographyParagraphNormal,
    typographyParagraphSmall,
} from '../../../font'

export const ArticleWrapper = styled.a`
    display: flex;
    flex-direction: column;
    gap: ${spacing(1)};
`

export const ArticleTitle = styled.h3`
    ${typographyHeading6}
`

export const ArticleDescription = styled.p`
    ${typographyParagraphNormal}
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

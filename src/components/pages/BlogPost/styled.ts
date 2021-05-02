import styled from 'styled-components'
import {
    typographyHeading2,
    typographyParagraphNormal,
} from '../../../styles/font'
import spacing from '../../../styles/spacing'
import SectionBase from '../../atom/SectionBase'

export const PostTitle = styled.h1`
    ${typographyHeading2}
`

export const PostContainer = styled(SectionBase).attrs({ as: 'article' })`
    max-width: ${spacing(46)};
`

export const PostParagraph = styled.p`
    ${typographyParagraphNormal}
    margin-top: ${spacing(2)};
`

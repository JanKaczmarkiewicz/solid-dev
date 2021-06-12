import styled from 'styled-components'
import {
    typographyHeading2,
    typographyHeading3,
    typographyHeading4,
    typographyParagraphBig,
} from '../../../styles/font'
import spacing from '../../../styles/spacing'
import CodeHighlighter from '../../atom/CodeHighlighter'
import SectionBase from '../../atom/SectionBase'
import Tags from '../../atom/Tags'

export const PostTitle = styled.h1`
    ${typographyHeading2};
    margin-bottom: ${spacing(3)};
`

export const PostCodeHighlighter = styled(CodeHighlighter)`
    margin-bottom: ${spacing(2)};
`

export const PostH2 = styled.h1`
    ${typographyHeading3};
    margin-top: ${spacing(3)};
    margin-bottom: ${spacing(2)};
`

export const PostH3 = styled.h1`
    ${typographyHeading4};
    margin-bottom: ${spacing(2)};
`

export const PostContainer = styled(SectionBase).attrs({ as: 'article' })`
    max-width: ${spacing(46)};
    padding-top: ${spacing(1)};
    padding-bottom: ${spacing(1)};
`

export const PostParagraph = styled.p`
    ${typographyParagraphBig}
    margin-bottom: ${spacing(2)};
`

export const PostTags = styled(Tags)`
    margin-bottom: ${spacing(2)};
`

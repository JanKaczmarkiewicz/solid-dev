import styled from 'styled-components'
import color from '../../../styles/color'
import { typographyParagraphBig } from '../../../styles/font'
import spacing from '../../../styles/spacing'
import borderRadius from '../../../styles/borderRadius'
import Icon from '../../atom/Icon'

export const SearchInput = styled.input`
    ${typographyParagraphBig}
    flex: 1;
    padding: ${spacing(1 / 2)};
    border: 1px solid ${color.secondary};
    border-radius: ${borderRadius.normal};

    ::placeholder {
        color: ${color.secondary};
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    display: flex;
    color: ${color.secondary};
`

export const SearchIcon = styled(Icon)`
    position: absolute;
    top: ${spacing(1 / 2)};
    right: ${spacing(1 / 2)};

    path {
        fill: ${color.secondary};
    }
`

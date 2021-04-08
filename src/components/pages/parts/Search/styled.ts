import styled from 'styled-components'
import color from '../../../styles/color'
import { typographyParagraphBig } from '../../../styles/font'
import spacing from '../../../styles/spacing'
import SearchSvg from '../../../../../assets/search.svg'

export const SearchInput = styled.input`
    ${typographyParagraphBig}
    padding: ${spacing(1 / 2)};
    border: 1px solid ${color.secondary};
    border-radius: 12px;
    flex: 1;

    ::placeholder {
        color: ${color.secondary};
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    display: flex;
    color: ${color.secondary};
`

export const SearchIcon = styled(SearchSvg)`
    position: absolute;
    right: ${spacing(1 / 2)};
    top: ${spacing(1 / 2)};

    path {
        fill: ${color.secondary};
    }
`

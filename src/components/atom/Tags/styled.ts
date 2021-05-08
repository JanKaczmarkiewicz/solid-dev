import styled from 'styled-components'
import color from '../../../styles/color'
import spacing from '../../../styles/spacing'

export const Tag = styled.button`
    color: white;
    background-color: ${color.primary};
    padding: ${spacing(1 / 2)} ${spacing(1)};
`

export const TagsContainer = styled.div`
    display: flex;
    gap: ${spacing(1)};
`

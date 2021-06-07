import styled from 'styled-components'
import color from '../../../styles/color'
import spacing from '../../../styles/spacing'

export const Tag = styled.button`
    padding: ${spacing(1 / 2)} ${spacing(1)};
    color: white;
    background-color: ${color.primary};
`

export const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${spacing(1)};
`

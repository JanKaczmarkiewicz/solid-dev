import styled from 'styled-components'
import mediaQuery from '../../../styles/mediaQuery'
import spacing from '../../../styles/spacing'

export const SectionContainer = styled.div`
    max-width: ${spacing(72)};
    padding: 0 ${spacing(1)};
    margin: 0 auto;

    @media ${mediaQuery.tablet} {
        max-width: ${spacing(60)};
    }
`

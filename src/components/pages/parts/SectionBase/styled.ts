import styled from 'styled-components'
import mediaQuery from '../../../styles/mediaQuery'
import spacing from '../../../styles/spacing'

export const SectionContainer = styled.section`
    padding: 0 ${spacing(5)};

    @media ${mediaQuery.mobile} {
        padding: 0 ${spacing(1)};
    }
`

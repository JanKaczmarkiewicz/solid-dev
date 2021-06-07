import { css } from 'styled-components'

const BASE_FONT_SIZE = '1rem'
const SCALE = 1.25

const getFontSize = (n: number) => `calc(${BASE_FONT_SIZE} * ${SCALE ** n})`

export const typographyHeading1 = css`
    font-size: ${getFontSize(7)};
    font-weight: bold;
    line-height: 100px;
`
export const typographyHeading2 = css`
    font-size: ${getFontSize(6)};
    font-weight: bold;
    line-height: 71px;
`

export const typographyHeading3 = css`
    font-size: ${getFontSize(5)};
    font-weight: 500;
    line-height: 73px;
`

export const typographyHeading4 = css`
    font-size: ${getFontSize(4)};
    font-weight: 500;
    line-height: 59px;
`

export const typographyHeading5 = css`
    font-size: ${getFontSize(3)};
    font-weight: 500;
    line-height: 40px;
`

export const typographyHeading6 = css`
    font-size: ${getFontSize(2)};
    font-weight: 500;
    line-height: 28px;
`

export const typographyParagraphBig = css`
    font-size: ${getFontSize(1)};
    font-weight: normal;
    line-height: 30px;
`

export const typographyParagraphNormal = css`
    font-size: ${getFontSize(0)};
    font-weight: normal;
    line-height: 24px;
`

export const typographyParagraphSmall = css`
    font-size: ${getFontSize(-1)};
    font-weight: 300;
    line-height: 19px;
    color: #bdbdbd;
`

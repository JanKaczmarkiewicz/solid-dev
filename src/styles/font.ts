import { css } from 'styled-components'

const BASE_FONT_SIZE = '1rem'
const SCALE = 1.25

const getFontSize = (n: number) =>
    `calc(${BASE_FONT_SIZE} * ${Math.pow(SCALE, n)})`

export const typographyHeading1 = css`
    font-weight: bold;
    font-size: ${getFontSize(7)};
    line-height: 100px;
`
export const typographyHeading2 = css`
    font-weight: bold;
    font-size: ${getFontSize(6)};
    line-height: 62px;
`

export const typographyHeading3 = css`
    font-weight: 500;
    font-size: ${getFontSize(5)};
    line-height: 73px;
`

export const typographyHeading4 = css`
    font-weight: 500;
    font-size: ${getFontSize(4)};
    line-height: 59px;
`

export const typographyHeading5 = css`
    font-weight: 500;
    font-size: ${getFontSize(3)};
    line-height: 40px;
`

export const typographyHeading6 = css`
    font-weight: 500;
    font-size: ${getFontSize(2)};
    line-height: 28px;
`

export const typographyParagraphBig = css`
    font-weight: normal;
    font-size: ${getFontSize(1)};
    line-height: 30px;
    color: black;
`

export const typographyParagraphNormal = css`
    font-weight: normal;
    font-size: ${getFontSize(0)};
    line-height: 24px;
`

export const typographyParagraphSmall = css`
    font-weight: 300;
    font-size: ${getFontSize(1 / 2)};
    line-height: 19px;
    color: #bdbdbd;
`

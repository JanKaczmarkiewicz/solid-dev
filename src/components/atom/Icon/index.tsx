import React, { AllHTMLAttributes } from 'react'
import BaseIcon from '@mdi/react'
// eslint-disable-next-line import/no-unresolved
import { IconProps } from '@mdi/react/dist/IconProps'

const Icon = (props: IconProps & AllHTMLAttributes<SVGElement>) => {
    const { onClick } = props
    const isClickable = !!onClick

    return (
        <BaseIcon
            {...props}
            style={{ width: 32, cursor: isClickable ? 'pointer' : 'default' }}
        />
    )
}

export default Icon

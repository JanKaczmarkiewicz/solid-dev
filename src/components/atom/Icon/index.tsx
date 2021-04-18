import React, { AllHTMLAttributes } from 'React'
import BaseIcon from '@mdi/react'
import { IconProps } from '@mdi/react/dist/IconProps'

const Icon = (props: IconProps & AllHTMLAttributes<SVGElement>) => {
    const isClickable = !!props.onClick

    return (
        <BaseIcon
            {...props}
            style={{ width: 32, cursor: isClickable ? 'pointer' : 'default' }}
        />
    )
}

export default Icon

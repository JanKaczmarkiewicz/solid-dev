import React, { ComponentProps } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import { Pre } from './styled'

type CodeHighlighterProps = Pick<
    ComponentProps<typeof Highlight>,
    'code' | 'language'
>

const CodeHighlighter = (props: CodeHighlighterProps) => (
    <Highlight {...defaultProps} theme={vsDark} {...props}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={i} {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span
                                // eslint-disable-next-line react/no-array-index-key
                                key={key}
                                {...getTokenProps({ token, key })}
                            />
                        ))}
                    </div>
                ))}
            </Pre>
        )}
    </Highlight>
)

export default CodeHighlighter

import React, { ComponentProps } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'

type CodeHighlighterProps = Pick<
    ComponentProps<typeof Highlight>,
    'code' | 'language'
>

const CodeHighlighter = (props: CodeHighlighterProps) => (
    <Highlight {...defaultProps} theme={vsDark} {...props}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, padding: '20px' }}>
                {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span
                                key={key}
                                {...getTokenProps({ token, key })}
                            />
                        ))}
                    </div>
                ))}
            </pre>
        )}
    </Highlight>
)

export default CodeHighlighter
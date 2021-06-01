import React, { ComponentProps } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import { CodeContainer } from './styled'

type CodeHighlighterProps = Pick<
    ComponentProps<typeof Highlight>,
    'code' | 'language'
>

const withoutLast = <T extends unknown[]>(elements: T[]): T[] => {
    const newElements = [...elements]
    newElements.splice(newElements.length - 1)
    return newElements
}

const CodeHighlighter = (props: CodeHighlighterProps) => (
    <Highlight {...defaultProps} theme={vsDark} {...props}>
        {({ className, style, tokens: lines, getLineProps, getTokenProps }) => (
            <CodeContainer className={className} style={style}>
                {withoutLast(lines).map((line, lineIndex) => (
                    <div {...getLineProps({ line, key: lineIndex })}>
                        {line.map((token, tokenIndex) => (
                            <span
                                {...getTokenProps({ token, key: tokenIndex })}
                            />
                        ))}
                    </div>
                ))}
            </CodeContainer>
        )}
    </Highlight>
)

export default CodeHighlighter

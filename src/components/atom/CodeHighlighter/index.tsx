import React, { ComponentProps } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import { CodeContainer } from './styled'
import { composeClassNames } from '../../../styles/helpers'

type CodeHighlighterProps = Pick<
    ComponentProps<typeof Highlight>,
    'code' | 'language'
> & { className?: string }

const omitLastElement = <T extends unknown[]>(elements: T[]): T[] => {
    const newElements = [...elements]
    newElements.splice(newElements.length - 1)
    return newElements
}

const CodeHighlighter = ({
    className: codeContainerClassName,
    code,
    language,
}: CodeHighlighterProps) => (
    <Highlight {...defaultProps} theme={vsDark} code={code} language={language}>
        {({ className, style, tokens: lines, getLineProps, getTokenProps }) => (
            <CodeContainer
                className={composeClassNames(className, codeContainerClassName)}
                style={style}
            >
                {omitLastElement(lines).map((line, lineIndex) => (
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

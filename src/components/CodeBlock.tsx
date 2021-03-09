import React, {memo} from 'react'
import Highlight, {defaultProps, Language} from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/vsDark"
import styled from "styled-components";

export interface CodeBlockProps {
    className: string
}

const CodeBlock: React.FC<CodeBlockProps> = memo(function CodeBlock({children, className}) {
    const language = className.replace(/language-/, '')

    return (
        <Highlight {...defaultProps} theme={theme} code={(children as string).trim()} language={language as Language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <Line key={i} {...getLineProps({ line, key: i })}>
                            <LineNo>{i + 1}</LineNo>
                            <LineContent>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </LineContent>
                        </Line>
                    ))}
                </Pre>
            )}
        </Highlight>
    )
})

export default CodeBlock

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;
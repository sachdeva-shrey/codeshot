import React from "react";
import { Pre, LineNo, Wrapper } from "../lib/styles";
import Highlight, { defaultProps } from "prism-react-renderer";

export default function CodeEditor(props) {
  return (
    <Highlight {...defaultProps}  code={props.snippet} language={props.lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Wrapper>
          <Pre
            className={className}
            style={style}
            size={props.fontSize}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </Wrapper>
      )}
    </Highlight>
  );
}

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { CodeBlockStyle } from '../demo-containers'

const CodeBlock = ({children, ...props}) => {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark} customStyle={CodeBlockStyle} showLineNumbers {...props}>
      {children}
    </SyntaxHighlighter>
  )
}

export default CodeBlock

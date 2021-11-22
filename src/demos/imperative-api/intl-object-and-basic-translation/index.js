import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { cb } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { createIntl } from '@formatjs/intl'
import { useState } from 'react'
import Button from '../../../components/demo-button'
import DemoHeading from '../../../components/demo-heading'
import { CodeBlockStyle, Container, DemoContainer } from '../../../components/demo-containers'
import DynamicLocaleDemo from './dynamic-locale'
import NextButton from '../../../components/next-demo-button'
import { useNavigate } from 'react-router-dom'

const messagesString =
  `import {createIntl} from '@formatjs/intl'

// Declare messages for translation
const messages = {
  'en-GB': {
    greeting: 'Hello! How are you?',
  },
  'de': {
    greeting: 'Hallo! Wie geht es Ihnen?',
  }
}`

const createIntlString =
  `const locale = 'de'
  
// Initialise an intl object using createIntl()
const intl = createIntl(
  {
    // Use German translations
    locale: locale,
    // Pass in the messages this object will know about when translating
    messages: messages[locale],
    // Get the users timezone
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    // Fallback locale, the default locale if one is not set or it fails to find German translations
    defaultLocale: 'en-GB',
    // Custom error function when translations or formatting fails (e.g. when trying to translate something outside of the objects context
    onError: (err) => {console.log('Oops there was an error')}
  }
)`

const translationString =
  `// Define a greeting message using intl object - returns a string with German translation
const greetingString = intl.formatMessage(
  {
    id: 'greeting',
    defaultMessage: messages['en-GB'].greeting
  }
)`

const messages = {
  'en-GB': {
    greeting: 'Hello! How are you?'
  },
  'de': {
    greeting: 'Hallo! Wie geht es Ihnen?'
  }
}

const IntlObjectDemo = () => {
  const [greeting, setGreeting] = useState('Hello! How are you?')
  const navigate = useNavigate()

  const intl = createIntl(
    {
      locale: 'de',
      messages: messages['de'],
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      defaultLocale: 'en-GB',
      onError: (err) => {console.log('Oops there was an error: ' + err)}
    }
  )

  const onClick = () => {
    setGreeting(intl.formatMessage(
        {
          id: 'greeting',
          defaultMessage: messages['en-GB'].greeting
        }
      )
    )
  }

  return (
    <>
      <Container>
        <DemoHeading>Setting up the intl object & basic text translation</DemoHeading>
        <h3>Set up i18n dictionary</h3>
        <SyntaxHighlighter language="javascript" style={cb} customStyle={CodeBlockStyle} showLineNumbers>
          {messagesString}
        </SyntaxHighlighter>
        <h3>Initialise intl object</h3>
        <SyntaxHighlighter language="javascript" style={cb} customStyle={CodeBlockStyle} showLineNumbers>
          {createIntlString}
        </SyntaxHighlighter>
        <h3>Use intl object to get a translated string</h3>
        <SyntaxHighlighter language="javascript" style={cb} customStyle={CodeBlockStyle} showLineNumbers>
          {translationString}
        </SyntaxHighlighter>
        <DemoContainer>
          <h1>{greeting}</h1>
          <Button onClick={() => onClick()}>
            Translate to German
          </Button>
        </DemoContainer>
      </Container>
      <DynamicLocaleDemo/>
      <NextButton onClick={() => navigate('/advanced-translation')}>Next: Advanced translation features</NextButton>
    </>
  )
}

export default IntlObjectDemo

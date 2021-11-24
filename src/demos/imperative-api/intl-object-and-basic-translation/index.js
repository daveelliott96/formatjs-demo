import { createIntl } from '@formatjs/intl'
import { useState } from 'react'
import Button from '../../../components/demo-button'
import DemoHeading from '../../../components/demo-heading'
import { Container, DemoContainer } from '../../../components/demo-containers'
import DynamicLocaleDemo from './dynamic-locale'
import NextButton from '../../../components/next-demo-button'
import { useNavigate } from 'react-router-dom'
import CodeBlock from '../../../components/CodeBlock'
import Notice from '../../../components/notice'

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
        <Notice>Any translations or formatting using the imperative API begins with the intl object. This is where we set up the i18n context, including the dictionary of translation strings, the language to translate strings into (locale) and other bits like error handling and timezones.</Notice>
        <DemoHeading>Creating an I18n context with the intl object & basic text translation</DemoHeading>
        <DemoContainer>
          <h2>{greeting}</h2>
          <Button onClick={() => onClick()}>
            Translate to German
          </Button>
        </DemoContainer>
        <h3>Set up i18n dictionary</h3>
        <CodeBlock>
          {messagesString}
        </CodeBlock>
        <h3>Initialise intl object</h3>
        <CodeBlock>
          {createIntlString}
        </CodeBlock>
        <h3>Use intl object to get a translated string</h3>
        <CodeBlock>
          {translationString}
        </CodeBlock>
      </Container>
      <DynamicLocaleDemo/>
      <NextButton onClick={() => {navigate('/advanced-translation'); window.scrollTo(0,0)}}>Next: Message syntax</NextButton>
    </>
  )
}

export default IntlObjectDemo

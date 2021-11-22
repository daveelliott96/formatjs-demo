import Select from '../../../../components/select'
import { CodeBlockStyle, Container, DemoContainer } from '../../../../components/demo-containers'
import { useEffect, useState } from 'react'
import { createIntl } from '@formatjs/intl'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { cb } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const codeBlockString =
`const messages = {
  'en-GB': {
    greeting: 'Hello! How are you?'
   },
   'de': {
    greeting: 'Hallo! Wie geht es Ihnen?'
   },
   'es': {
    greeting: '¡Hola! ¿Cómo estás?'
   },
   'fr': {
    greeting: 'Salut! Comment ca va?'
  }
}`

const DynamicLocaleDemo = () => {
  const [locale, setLocale] = useState('en-GB')
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    getTranslatedString()
  }, [locale])

  const messages = {
    'en-GB': {
      greeting: 'Hello! How are you?'
    },
    'de': {
      greeting: 'Hallo! Wie geht es Ihnen?'
    },
    'es': {
      greeting: '¡Hola! ¿Cómo estás?'
    },
    'fr': {
      greeting: 'Salut! Comment ca va?'
    }
  }

  const intl = createIntl(
    {
      locale: locale,
      messages: messages[locale],
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      defaultLocale: 'en-GB',
      onError: (err) => {console.log('Oops there was an error: ' + err)}
    }
  )

  const getTranslatedString = () => {
    let greetingString = intl.formatMessage(
      {
        id: 'greeting',
        defaultMessage: messages['en-GB'].greeting
      }
    )

    setGreeting(greetingString)
  }

  return (
    <>
      <Container>
        <h3>Where this becomes useful: user-defined locales</h3>
        <SyntaxHighlighter language="javascript" style={cb} customStyle={CodeBlockStyle} showLineNumbers>
          {codeBlockString}
        </SyntaxHighlighter>
        <DemoContainer>
          <h1>{greeting}</h1>
          <Select
            options={
              [
                { value: 'en-GB', label: 'English (UK)' },
                { value: 'de', label: 'German' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' }
              ]
            }
            onChange={e => setLocale(e.target.value)}>
          </Select>
        </DemoContainer>
      </Container>
    </>
  )
}

export default DynamicLocaleDemo

import Select from '../../../../components/select'
import { Container, DemoContainer } from '../../../../components/demo-containers'
import { useEffect, useState } from 'react'
import { createIntl } from '@formatjs/intl'
import CodeBlock from '../../../../components/CodeBlock'
import DemoHeading from '../../../../components/demo-heading'
import Notice from '../../../../components/notice'

const codeBlockString =
`// Declare messages for translation
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

// Initialise an intl object using createIntl()
const intl = createIntl(
  {
    locale: getLocale(), // Custom function gets locale from dropdown option selected and uses that as the intl objects locale
    messages: messages[locale],
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    defaultLocale: 'en-GB',
    onError: (err) => {console.log('Oops there was an error')}
  }
)

// Define a greeting message using intl object - returns a string with translation for chosen locale
const greetingString = intl.formatMessage(
  {
    id: 'greeting',
    defaultMessage: messages['en-GB'].greeting
  }
)`

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
        <Notice>Where this translation feature brings its benefits is in its ability to dynamically translate strings based on user input or system settings. By configuring the locale for the intl object dynamically an entire app and all of its text can be translated on the fly and changed through user input.</Notice>
        <DemoHeading>User-defined locales</DemoHeading>
        <DemoContainer>
          <h2>{greeting}</h2>
          <Select
            options={
              [
                { value: 'en-GB', label: 'English (UK)' },
                { value: 'de', label: 'German' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' }
              ]
            }
            onChange={e => setLocale(e.target.value)}/>
        </DemoContainer>
        <CodeBlock>
          {codeBlockString}
        </CodeBlock>
      </Container>
    </>
  )
}

export default DynamicLocaleDemo

import { CodeBlockStyle, Container, DemoContainer } from '../../../../components/demo-containers'
import DemoHeading from '../../../../components/demo-heading'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { createIntl } from '@formatjs/intl'
import { useEffect, useState } from 'react'
import Button from '../../../../components/demo-button'
import Select from '../../../../components/select'
import CodeBlock from '../../../../components/CodeBlock'
import TextBox from '../../../../components/text-box'

const messages = {
  'en-GB': {
    click_count: 'Hello {name}, you have clicked the button {count} times'
  },
  'de': {
    click_count: 'Hallo {name}, sie haben die Schaltfläche {count} Mal angeklickt'
  },
  'es': {
    click_count: 'Hola {name}, has pulsado el botón {count} veces'
  },
  'fr': {
    click_count: 'Bonjour {name}, vous avez cliqué sur le bouton {count} fois'
  }
}

const messagesString =
`// Define our messages - variables are declared in curly brackets {}
const messages = {
  'en-GB': {
    click_count: 'You have clicked the button {count} times'
  },
  'de': {
    click_count: 'Sie haben die Schaltfläche {count} Mal angeklickt'
  },
  'es': {
    click_count: 'Has pulsado el botón {count} veces'
  },
  'fr': {
    click_count: 'Vous avez cliqué sur le bouton {count} fois'
  }
}`

const createIntlString =
`const defaultLocale = 'en-GB'

const intl = createIntl(
  {
    locale: locale,
    messages: messages[locale],
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    defaultLocale: defaultLocale,
    onError: (err) => {console.log('Oops there was an error')}
   }`

const translationString =
`intl.formatMessage(
  {
    id: 'click_count',
    defaultMessage: messages[defaultLocale].click_count
  },
  { name: usersName, count: clickCount } // Set the keys name and count to have a value of our user defined usersName and clickCount variables
)`

const buttonString =
`<button onClick={() => setCount(count + 1)}>
  Click me!
</button>

<input type="text" onChange={(e) => setUsersName(e.target.value)} />`

const VariablesDemo = () => {
  const [text, setText] = useState('')
  const [locale, setLocale] = useState('en-GB')
  const [count, setCount] = useState(0)
  const [usersName, setUsersName] = useState('Dave')

  const defaultLocale = 'en-GB'

  const intl = createIntl(
    {
      locale: locale,
      messages: messages[locale],
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      defaultLocale: defaultLocale,
      onError: (err) => {console.log('Oops there was an error: ' + err)}
    }
  )

  useEffect(() => {
    setText(intl.formatMessage({
      id: 'click_count',
      defaultMessage: messages[defaultLocale].click_count
    }, { name: usersName, count: count }))
  }, [locale, count, intl, usersName])

  return (
    <Container>
      <DemoHeading>Message syntax: Key</DemoHeading>
      <DemoContainer>
        <h2>{text}</h2>
        <Button onClick={() => setCount(count + 1)}>Click me!</Button>
        <TextBox onChange={(e) => setUsersName(e.target.value === '' ? 'Dave' : e.target.value)} placeholder={'Type your name here'}/>
        <Select options={
          [
            { value: 'en-GB', label: 'English (UK)' },
            { value: 'de', label: 'German' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' }
          ]
        }
        onChange={e => setLocale(e.target.value)}
        />
      </DemoContainer>
      <h3>Define messages</h3>
      <CodeBlock>{messagesString}</CodeBlock>
      <h3>Set up intl object</h3>
      <CodeBlock>{createIntlString}</CodeBlock>
      <h3>Button to increment count and textbox for users name</h3>
      <CodeBlock>{buttonString}</CodeBlock>
      <h3>Get translated string for message</h3>
      <CodeBlock>{translationString}</CodeBlock>
    </Container>
  )
}

export default VariablesDemo

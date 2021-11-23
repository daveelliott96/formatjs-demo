import { Container, DemoContainer } from '../../../../../components/demo-containers'
import DemoHeading from '../../../../../components/demo-heading'
import { createIntl } from '@formatjs/intl'
import { useEffect, useState } from 'react'
import Select from '../../../../../components/select'
import CodeBlock from '../../../../../components/CodeBlock'
import TextBox from '../../../../../components/text-box'
import NumberInput from '../../../../../components/number-input'

const messages = {
  'en-GB': {
    pending_letter: `Hello {usersName}, {letterCount, plural,
      =0 {there are no letters} 
      one {there is one letter} 
      other {there are # letters}}
      with a status of pending.`,
  },
  'de': {
    pending_letter: `Hallo {usersName}, {letterCount, plural,
    =0 {es gibt keine buchstaben}
    one {es gibt einen buchstaben}
    other {es gibt # buchstaben}}
    mit dem status ausstehend`
  },
  'es': {
    pending_letter: `Hola {usersName}, {letterCount, plural,
    =0 {no hay cartas}
    one {hay una carta}
    other {hay # cartas}}
    con un estado de pendiente`
  },
  'fr': {
    pending_letter: `Bonjour {usersName}, {letterCount, plural,
    =0 {il n'y a pas de lettres}
    one {il y a une lettre}
    other {il y a # lettres}}
    avec le statut en attente`
  }
}

const messagesString =
  `const messages = {
  'en-GB': {
    // Set up strings for pluralisation: separate text for none, single or multiple letters. The 'other' key is always required - its equivalent to a default case
    pending_letter: \`Hello {name}, {letterCount, plural,
    =0 {there are no letters} 
    one {there is one letter} 
    other {there are # letters}}
    with a status of pending.\`
  },
  'de': {
    pending_letter: \`Hallo {name}, {letterCount, plural,
    =0 {es gibt keine buchstaben}
    one {es gibt einen buchstaben}
    other {es gibt # buchstaben}}
    mit dem status ausstehend.\`
  },
  'es': {
    pending_letter: \`Hola {name}, {letterCount, plural,
    =0 {no hay cartas}
    one {hay una carta}
    other {hay # cartas}}
    con un estado de pendiente.\`
  },
  'fr': {
    pending_letter: \`Bonjour {name}, {letterCount, plural,
    =0 {il n'y a pas de lettres}
    one {il y a une lettre}
    other {il y a # lettres}}
    avec le statut en attente.\`
  }
}`

const createIntlString =
`const intl = createIntl(
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
    id: 'pending_letter',
    defaultMessage: messages[defaultLocale].pending_letter
  },
  { name: usersName, letterCount: letterCount } // Set the keys name and letterCount to have a value of our user defined usersName and letterCount variables
)`

const PluralisationDemo = () => {
  const [text, setText] = useState('')
  const [locale, setLocale] = useState('en-GB')
  const [letterCount, setLetterCount] = useState(0)
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
      id: 'pending_letter',
      defaultMessage: messages[defaultLocale].pending_letter
    }, { usersName: usersName, letterCount: letterCount }))
  }, [locale, letterCount, intl, usersName])

  return (
    <Container>
      <DemoHeading>Message syntax: Format (plural)</DemoHeading>
      <DemoContainer>
        <h2>{text}</h2>
        <NumberInput onChange={(e) => setLetterCount(e.target.value)} min={0} value={letterCount}/>
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
      <h3>Get translated string for message</h3>
      <CodeBlock>{translationString}</CodeBlock>
    </Container>
  )
}

export default PluralisationDemo

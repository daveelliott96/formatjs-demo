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
    letter_received: `{gender, select,
    male {He has}
    female {She has}
    other {They have}}
    received your letter and will respond shortly.`,
  },
  'de': {
    letter_received: `{gender, select,
    male {Er hat}
    female {Sie hat}
    other {Sie haben}}
    Ihren Brief erhalten und wird in Kürze antworten.`,
  },
  'es': {
    letter_received: `{gender, select,
    male {Ha}
    female {Ella}
    other {Han}}
    recibido su carta y le responderá en breve.`,
  },
  'fr': {
    letter_received: `{gender, select,
    male {Il a}
    female {Elle a}
    other {Ils ont}}
    reçu votre lettre et vous répondront sous peu.`,
  }
}

const messagesString =
  `const messages = {
  'en-GB': {
    // Set up strings for select: works similarly to a switch statement
    letter_received: \`{gender, select,
    male {He has}
    female {She has}
    other {They have}}
    received your letter and will respond shortly.\`,
  },
  'de': {
    letter_received: \`{gender, select,
    male {Er hat}
    female {Sie hat}
    other {Sie haben}}
    Ihren Brief erhalten und wird in Kürze antworten.\`,
  },
  'es': {
    letter_received: \`{gender, select,
    male {Ha}
    female {Ella}
    other {Han}}
    recibido su carta y le responderá en breve.\`,
  },
  'fr': {
    letter_received: \`{gender, select,
    male {Il a}
    female {Elle a}
    other {Ils ont}}
    reçu votre lettre et vous répondront sous peu.\`,
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
    id: 'letter_received',
    defaultMessage: messages[defaultLocale].letter_received
  },
  { gender: gender } // Set the key gender to have a value of our user defined gender variable
)`

const SelectTypeDemo = () => {
  const [text, setText] = useState('')
  const [locale, setLocale] = useState('en-GB')
  const [gender, setGender] = useState('male')

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
      id: 'letter_received',
      defaultMessage: messages[defaultLocale].letter_received
    }, { gender: gender }))
  }, [locale, intl, gender])

  return (
    <Container>
      <DemoHeading>Message syntax: Type (select)</DemoHeading>
      <DemoContainer>
        <h2>{text}</h2>
        <Select options={
          [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
          ]
        }
        onChange={e => setGender(e.target.value)}
        />
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

export default SelectTypeDemo

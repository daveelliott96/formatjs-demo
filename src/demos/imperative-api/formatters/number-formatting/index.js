import { Container, DemoContainer } from '../../../../components/demo-containers'
import { createIntl } from '@formatjs/intl'
import { useEffect, useState } from 'react'
import Select from '../../../../components/select'
import CodeBlock from '../../../../components/CodeBlock'
import DemoHeading from '../../../../components/demo-heading'

const NumberFormatting = () => {
  const [numberOption, setNumberOption] = useState('')
  const [number, setNumber] = useState('')
  const [locale, setLocale] = useState('en-GB')

  useEffect(() => {
    setFormattedNumber()
  }, [numberOption, locale])

  const intl = createIntl(
    {
      locale: locale,
      messages: {},
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      defaultLocale: 'en-GB',
      onError: (err) => {console.log('Oops there was an error: ' + err)}
    }
  )

  const numberOptionsMap = {
    'kilobyte': {style: 'unit', unit: 'kilobyte', unitDisplay: 'narrow'},
    'celsius': {unit: 'celsius', unitDisplay: 'long', style: 'unit'},
    'mile-per-hour': {style: 'unit', unit: 'mile-per-hour', unitDisplay: 'long'}
  }

  const setFormattedNumber = () => {
    setNumber(intl.formatNumber(1000, numberOptionsMap[numberOption]))
  }

  const numberFormatOptionsString =
`const numberOptionsMap = {
  'kilobyte': {style: 'unit', unit: 'kilobyte', unitDisplay: 'narrow'},
  'celsius': {style: 'unit', unit: 'celsius', unitDisplay: 'long'}
  'mile-per-hour': {style: 'unit', unit: 'mile-per-hour', unitDisplay: 'narrow'}
}`

  const numberFormatString =
`// Number formatting options are taken from vanilla Javascript's Intl.NumberFormatOptionss
intl.formatNumber(1000, numberOptionsMap[numberOption])`

  return (
    <Container>
      <DemoHeading>Number formatting</DemoHeading>
      <DemoContainer>
        <h2>{number}</h2>
        <Select
          options={
            [
              { value: '', label: 'Number' },
              { value: 'kilobyte', label: 'Kilobyte'},
              { value: 'celsius', label: 'Celsius'},
              { value: 'mile-per-hour', label: 'MPH'}
            ]
          }
          onChange={(e) => setNumberOption(e.target.value)}/>
        <Select options={
          [
            { value: 'en-GB', label: 'English (UK)' },
            { value: 'de', label: 'German' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' }
          ]
        }
        onChange={(e) => setLocale(e.target.value)}/>
      </DemoContainer>
      <h3>Define some number format options (there are lots more possibilities!)</h3>
      <CodeBlock>{numberFormatOptionsString}</CodeBlock>
      <h3>intl.formatNumber()</h3>
      <CodeBlock>{numberFormatString}</CodeBlock>
    </Container>
  )
}

export default NumberFormatting

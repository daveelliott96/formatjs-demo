import { Container, DemoContainer } from '../../../../components/demo-containers'
import { createIntl } from '@formatjs/intl'
import { useEffect, useState } from 'react'
import Select from '../../../../components/select'
import CodeBlock from '../../../../components/CodeBlock'
import DemoHeading from '../../../../components/demo-heading'

const CurrencyFormatting = () => {
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
    'GBP': {style: 'currency', currency: 'GBP'},
    'USD': {style: 'currency', currency: 'USD'},
    'EUR': {style: 'currency', currency: 'EUR'},
  }

  const setFormattedNumber = () => {
    setNumber(intl.formatNumber(1000, numberOptionsMap[numberOption]))
  }

  const numberFormatOptionsString =
    `const numberOptionsMap = {
  'GBP': {style: 'currency', currency: 'GBP'},
  'USD': {style: 'currency', currency: 'USD'},
  'EUR': {style: 'currency', currency: 'EUR'},
}`

  const numberFormatString =
    `// Number formatting options are taken from vanilla Javascript's Intl.NumberFormatOptionss
intl.formatNumber(1000, numberOptionsMap[numberOption])`

  return (
    <Container>
      <DemoHeading>Currency formatting</DemoHeading>
      <DemoContainer>
        <h2>{number}</h2>
        <Select
          options={
            [
              { value: '', label: 'Number' },
              { value: 'GBP', label: 'GBP'},
              { value: 'USD', label: 'USD' },
              { value: 'EUR', label: 'EUR'},
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
      <h3>Define some currency format options (there are lots more possibilities!)</h3>
      <CodeBlock>{numberFormatOptionsString}</CodeBlock>
      <h3>intl.formatNumber()</h3>
      <CodeBlock>{numberFormatString}</CodeBlock>
    </Container>
  )
}

export default CurrencyFormatting

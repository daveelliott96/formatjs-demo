import { Container, DemoContainer } from '../../../../components/demo-containers'
import { createIntl } from '@formatjs/intl'
import { useEffect, useState } from 'react'
import Select from '../../../../components/select'
import CodeBlock from '../../../../components/CodeBlock'
import DemoHeading from '../../../../components/demo-heading'

const DateFormatting = () => {
  const [dateOptions, setDateOptions] = useState({year: 'numeric', month: 'numeric', day: 'numeric'})
  const [date, setDate] = useState('')
  const [locale, setLocale] = useState('en-GB')

  useEffect(() => {
    setFormattedDate()
  }, [dateOptions, locale])

  const intl = createIntl(
    {
      locale: locale,
      messages: {},
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      defaultLocale: 'en-GB',
      onError: (err) => {console.log('Oops there was an error: ' + err)}
    }
  )

  const dateOptionsMap = {
    'dd/mm/yyyy': {year: 'numeric', month: 'numeric', day: 'numeric'},
    'weekday, dd mm yyyy': {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
    'month year weekday': {weekday: 'long', year: 'numeric', month: 'long'},
    'short date': {weekday: 'short', year: '2-digit', month: 'short', day: '2-digit'}
  }

  const timeOptionsMap = {
    'dd/mm/yyyy': {hour: '2-digit', minute: '2-digit'},
    'weekday, dd mm yyyy': {hour: '2-digit', minute: '2-digit'},
    'month year weekday': {hour: 'numeric', minute: 'numeric'},
    'short date': {hour: 'numeric', minute: 'numeric'},
  }

  const setFormattedDate = () => {
    setDate(intl.formatDate(Date.now(), dateOptionsMap[dateOptions]) + ' ' + intl.formatTime(Date.now(), timeOptionsMap[dateOptions]))
  }

  const dateOptionsString =
`const dateOptionsMap = {
  'dd/mm/yyyy': {year: 'numeric', month: 'numeric', day: 'numeric'},
  'weekday, dd mm yyyy': {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'},
  'month year weekday': {weekday: 'long', year: 'numeric', month: 'long'},
  'short date': {weekday: 'short', year: '2-digit', month: 'short', day: '2-digit'}`

  const dateFormatString =
`// Date formatting options are taken from vanilla Javascript's Intl.DateTimeFormat()
intl.formatDate(Date.now(), dateOptionsMap[dateOptions])`

  const timeFormatString =
`// Time formatting options are taken from vanilla Javascript's Intl.DateTimeFormat()
intl.formatTime(Date.now(), {hour: 'numeric', minute: 'numeric'})`

  return (
    <Container>
      <DemoHeading>Date/time formatting</DemoHeading>
      <DemoContainer>
        <h2>{date}</h2>
        <Select
          options={
            [
              { value: 'dd/mm/yyyy', label: 'dd/mm/yyyy' },
              { value: 'weekday, dd mm yyyy', label: 'weekday, dd mm yyyy'},
              { value: 'month year weekday', label: 'month year weekday'},
              { value: 'short date', label: 'short date'}
            ]
          }
          onChange={(e) => setDateOptions(e.target.value)}/>
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
      <h3>Define some date format options (there are lots more possibilities!)</h3>
      <CodeBlock>{dateOptionsString}</CodeBlock>
      <h3>intl.formatDate()</h3>
      <CodeBlock>{dateFormatString}</CodeBlock>
      <h3>intl.formatTime()</h3>
      <CodeBlock>{timeFormatString}</CodeBlock>
    </Container>
  )
}

export default DateFormatting

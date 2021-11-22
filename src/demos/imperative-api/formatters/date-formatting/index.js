import { CodeBlockStyle, Container, DemoContainer } from '../../../../components/demo-containers'
import { createIntl } from '@formatjs/intl'
import { useEffect, useState } from 'react'
import Select from '../../../../components/select'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { cb } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import CodeBlock from '../../../../components/CodeBlock'

const DateFormatting = () => {
  const [dateOptions, setDateOptions] = useState({year: 'numeric', month: 'numeric', day: 'numeric'})
  const [date, setDate] = useState('')

  useEffect(() => {
    setFormattedDate()
  }, [dateOptions])

  const intl = createIntl(
    {
      locale: 'en-GB',
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

  const setFormattedDate = () => {
    setDate(intl.formatDate(Date.now(), dateOptionsMap[dateOptions]))
  }

  const dateFormatString =
`// Date formatting options are taken from vanilla Javascript's Intl.DateTimeFormat()
intl.formatDate(Date.now(), dateOptionsMap[dateOptions])`

  return (
    <Container>
      <CodeBlock>{dateFormatString}</CodeBlock>
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
      </DemoContainer>
    </Container>
  )
}

export default DateFormatting

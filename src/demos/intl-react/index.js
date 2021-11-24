import { Container } from '../../components/demo-containers'
import styled from 'styled-components'
import CodeBlock from '../../components/CodeBlock'
import Spacer from '../../components/spacer'

const LeftContainer = styled.div`
  width: 45%;
`

const RightContainer = styled.div`
  width: 45%;;
  margin-left: 5%;
`

const createIntlString =
`const intl = createIntl(
  {
    locale: '##LOCALE_STRING##',
    messages: '##OBJECT_OF_MESSAGES##',
    timeZone: '##TIMEZONE_STRING##',
    defaultLocale: '##LOCALE_STRING##',
    onError: '##CUSTOM_FUNCTION##'}
  }
)`

const IntlProviderString =
`<IntlProvider
   locale={'##LOCALE_STRING##'}
   messages={'##OBJECT_OF_MESSAGES##'}
   timeZone={'##TIMEZONE_STRING##'}
   defaultLocale={'##LOCALE_STRING##'}
   onError={'##CUSTOM_FUNCTION##'}
>
<App />
</IntlProvider>`

const formatMessageString =
`intl.formatMessage(
   {
     id: '##OBJECT_KEY_STRING',
     defaultMessage: '##OBJECT_KEY_STRING'
   },
   { '##OBJECT_WITH_KEY/VALUE PAIRS' }
)`

const FormattedMessageString =
`<FormattedMessage
  id={'##OBJECT_KEY_STRING'}
  defaultMessage={'##OBJECT_KEY_STRING'}
  values={
    '##OBJECT_WITH_KEY/VALUE PAIRS'
  }
/>`

const formatDateAndTimeStrings =
`// Date formatting
intl.formatDate(
  {
    '##DATE_VALUE_TO_FORMAT##',
    {
      year: '##YEAR_VALUE##',
      month: '##MONTH_VALUE##',
      day: '##DAY_VALUE##'
    }
  }
)

// Time formatting
intl.formatTime(
  {
    '##DATE_VALUE_TO_FORMAT##',
    {
      hour: '##HOUR_VALUE##',
      minute: '##MINUTE_VALUE##',
      second: '##SECOND_VALUE##'
    }
  }
)`

const FormattedDateAndTimeStrings =
`// Date formatting
<FormattedDate
  value={'##DATE_VALUE_TO_FORMAT##'}
  year={'##YEAR_VALUE##'}
  month={'##MONTH_VALUE##'}
  day={'##DAY_VALUE##'}
/>

// Time formatting
<FormattedTime
  value={'##TIME_VALUE_TO_FORMAT##'}
  hour={'##HOUR_CONFIG##'}
  minute={'##MINUTE_CONFIG##'}
  second={'##SECOND_CONFIG##'}
/>







`

const formatNumberString =
`// Number format
intl.formatNumber(
  {
    '##NUMBER_VALUE##'
    {
      style: '##STYLE_VALUE##',
      unit: '##UNIT_VALUE##',
      unitDisplay: '##UNIT_DISPLAY_VALUE##'
    }
  }
)

// Currency format
intl.formatNumber(
  {
    '##NUMBER_VALUE##'
    {
      style: 'currency',
      currency: '##CURRENCY_VALUE##',
    }
  }
)`

const FormattedNumberString =
`// Number format
<FormattedNumber
  value={'##NUMBER_VALUE##'}
  style={'##STYLE_VALUE##'}
  unit={'##UNIT_VALUE##'}
  unitDisplay={'##UNIT_DISPLAY_VALUE##'}
/>

// Currency format
<FormattedNumber
  value={'##NUMBER_VALUE##'}
  style={'currency'}
  currency={'##CURRENCY_VALUE##'}
/>







`

const IntlReactDemo = () => {
  return (
    <>
      <Container>
        <LeftContainer>
          <h1>Imperative API</h1>
          <h3>createIntl()</h3>
          <CodeBlock>{createIntlString}</CodeBlock>
        </LeftContainer>
        <RightContainer>
          <h1>React component</h1>
          <h3>IntlProvider</h3>
          <CodeBlock>{IntlProviderString}</CodeBlock>
        </RightContainer>

        <Spacer/>

        <LeftContainer>
          <h3>intl.formatMessage</h3>
          <CodeBlock>{formatMessageString}</CodeBlock>
        </LeftContainer>
        <RightContainer>
          <h3>FormattedMessage</h3>
          <CodeBlock>{FormattedMessageString}</CodeBlock>
        </RightContainer>

        <Spacer />

        <LeftContainer>
          <h3>intl.formatDate and intl.formatTime</h3>
          <CodeBlock>{formatDateAndTimeStrings}</CodeBlock>
        </LeftContainer>
        <RightContainer>
          <h3>FormattedDate and FormattedTime</h3>
          <CodeBlock>{FormattedDateAndTimeStrings}</CodeBlock>
        </RightContainer>

        <Spacer />

        <LeftContainer>
          <h3>intl.formatNumber</h3>
          <CodeBlock>{formatNumberString}</CodeBlock>
        </LeftContainer>
        <RightContainer>
          <h3>FormattedNumber</h3>
          <CodeBlock>{FormattedNumberString}</CodeBlock>
        </RightContainer>

        <Spacer />
      </Container>
    </>
  )
}

export default IntlReactDemo

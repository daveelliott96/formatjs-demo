import { useNavigate } from 'react-router-dom'
import DemoHeading from '../../../components/demo-heading'
import DateFormatting from './date-formatting'
import NextButton from '../../../components/next-demo-button'

const FormattersDemo = () => {
  const navigate = useNavigate()

  return (
    <>
      <DemoHeading>Formatters</DemoHeading>
      <DateFormatting />  TODO: Translate dates for different locales too!!
      <NextButton onClick={() => {navigate('/react-provider'); window.scrollTo(0,0)}}>Next: React intl basics</NextButton>
    </>
  )
}

export default FormattersDemo

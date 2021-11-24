import { useNavigate } from 'react-router-dom'
import DateFormatting from './date-formatting'
import NextButton from '../../../components/next-demo-button'
import NumberFormatting from './number-formatting'
import CurrencyFormatting from './currency-formatting'
import Spacer from '../../../components/spacer'

const FormattersDemo = () => {
  const navigate = useNavigate()

  return (
    <>
      <DateFormatting />
      <Spacer />
      <NumberFormatting />
      <Spacer />
      <CurrencyFormatting />
      <NextButton onClick={() => {navigate('/react-comparison'); window.scrollTo(0,0)}}>Next: React Intl integration</NextButton>
    </>
  )
}

export default FormattersDemo

import { Container } from '../../../components/demo-containers'
import { useNavigate } from 'react-router-dom'
import DemoHeading from '../../../components/demo-heading'
import DateFormatting from './date-formatting'
import NextButton from '../../../components/next-demo-button'

const FormattersDemo = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <DemoHeading>Formatters</DemoHeading>
      <DateFormatting />
      <NextButton onClick={navigate('/react-provider')}/>
    </Container>
  )
}

export default FormattersDemo

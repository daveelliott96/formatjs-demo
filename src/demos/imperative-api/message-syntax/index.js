import NextButton from '../../../components/next-demo-button'
import { useNavigate } from 'react-router-dom'
import VariablesDemo from './key'
import Spacer from '../../../components/spacer'
import FormatDemo from './format'
import Notice from '../../../components/notice'

const AdvancedTranslation = () => {
  const navigate = useNavigate();

  return (
    <>
      <Notice>As well as simple string-literal translations, Format.JS supports replacements called "arguments". They are enclosed in curly braces and refer to a variables you can pass into the messages in your code. Arguments are made up of 3 parts: key, type and format.</Notice>
      <VariablesDemo/>
      <Spacer/>
      <FormatDemo/>
      <NextButton onClick={() => {navigate('/imperative-formatter'); window.scrollTo(0,0)}}>Next: Formatters</NextButton>
    </>
  )
}

export default AdvancedTranslation

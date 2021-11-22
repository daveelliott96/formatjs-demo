import styled from 'styled-components'

const Container = styled.div
  `
  width: 100%;
  margin-top: 30px;
`

const StyledInput = styled.input`
  width: 390px;
  height: 24px;
  padding: 4px;
`


const TextBox = ({ onChange, placeholder, ...props }) => {
  return (
    <Container>
      <StyledInput type={'text'} onChange={onChange} placeholder={placeholder || 'Type here'} {...props}/>
    </Container>
  )
}

export default TextBox

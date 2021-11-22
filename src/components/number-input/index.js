import styled from 'styled-components'

const StyledNumberInput = styled.input`
  width: 400px;
  height: 24px;
`

const NumberInput = ({onChange, ...props}) => {
  return (
    <StyledNumberInput type='number' onChange={onChange} {...props}/>
  )
}

export default NumberInput

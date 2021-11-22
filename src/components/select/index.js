import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-top: 42px;
`

const StyledSelect = styled.select`
  width: 400px;
  height: 30px;
`

const Select = ({ options, onChange }) => {

  return (
    <Container>
      <StyledSelect onChange={onChange}>
        {options.map(option => {
          return <option key={option.value} value={option.value} label={option.label}/>
        })}
      </StyledSelect>
    </Container>
  )
}

export default Select

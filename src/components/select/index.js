import styled from 'styled-components'

const StyledSelect = styled.select`
  width: 400px;
  height: 30px;
`

const Select = ({options, onChange}) => {


  return (
    <StyledSelect onChange={onChange}>
      {options.map(option => {
        return <option key={option.value} value={option.value} label={option.label} />
      })}
    </StyledSelect>
  )
}

export default Select

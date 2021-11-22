import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
`

const StyledButton = styled.button`
  align-self: flex-start;
  width: 240px;
  padding: 16px 16px 16px 16px;
  background-color: ${props => props.theme.blueOne};
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: white;
  transition: .2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.blueTwo};
  }
`

function NextButton ({ onClick, children, ...props }) {

  return (
    <ButtonContainer>
      <StyledButton
        onClick={onClick}
        {...props}
      >
        {children}
      </StyledButton>
    </ButtonContainer>
  )
}

export default NextButton

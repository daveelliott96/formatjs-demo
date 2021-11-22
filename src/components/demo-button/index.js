import React from "react"
import styled from 'styled-components'

const StyledButton = styled.button`
  align-self: flex-start;
  width: 240px;
  padding: 12px 16px 12px 16px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: ${props => props.theme.greenTwo};
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: white;
  transition: .2s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.greenThree};
  }
  &:active {
    background-color: ${props => props.theme.greenFour};
  }
`

function Button({ onClick, children, ...props }) {

  return (
    <StyledButton
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button

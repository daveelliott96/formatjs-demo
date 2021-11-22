import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const StyledDemoHeading = styled.h1`
  margin-top: 2rem;
  text-align: left;
`

function DemoHeading ({ children, ...props }) {

  return (
    <Container>
      <StyledDemoHeading>
        {children}
      </StyledDemoHeading>
    </Container>
  )
}

export default DemoHeading

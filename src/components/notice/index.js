import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  background-color: #ADFA90;
  padding: 16px 32px 16px 32px;
  margin: 16px;
  font-size: 1.2rem;
`

const Notice = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Notice

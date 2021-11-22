import styled from 'styled-components'
import './App.css'
import IntlObjectDemo from './demos/imperative-api/intl-object-and-basic-translation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormattersDemo from './demos/imperative-api/formatters'

const AppContainer = styled.div`
    margin-left: 5%;
    margin-right: 5%;
  `

const PageHeaderContainer = styled.div`
  text-align: center;
  background-color: ${props => props.theme.blueTwo};
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
`

const StyledPageTitle = styled.h1`
  color: white;
  font-weight: lighter;
  font-size: 2rem;

  @media only screen and (max-width: 992px) {
    font-size: 2rem;
  }
`

function App () {
  return (
    <>
      <PageHeaderContainer>
        <StyledPageTitle>Format.JS demo</StyledPageTitle>
      </PageHeaderContainer>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<IntlObjectDemo/>}/>
            <Route path='/advanced-translation' element={<h1>hello</h1>}/>
            <Route path='/imperative-formatter' element={<FormattersDemo/>}/>
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </>
  )
}

export default App


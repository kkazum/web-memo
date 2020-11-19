import * as React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import Editor from './pages/editor'

const GlobalStyle = createGlobalStyle`
  html,
  body *{
      width: 650px;
      height: 650px;
      box-sizing: border-box;
  }
`

const Main = (
  <>
    <GlobalStyle />
    <Editor/>
  </>
)

render(Main, document.getElementById('app'))

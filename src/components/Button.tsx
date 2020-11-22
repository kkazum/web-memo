import React from 'react'
import styled from 'styled-components'
import { Action } from '../utils'


const NewButton = styled.button`
  background-color: #0071b2;
  height: 100%;
  width: 100%;
  color: #fff;
`

interface Props {
  children: string
  dispatch: React.Dispatch<Action>
}

const Button = ( props: Props ) => {
  const { children, dispatch } = props;
  return (
    <>
      <NewButton onClick={() => {
        dispatch({type: 'ADD_MEMO'})
      }}>{children}</NewButton>
    </>
  )
}

export default Button

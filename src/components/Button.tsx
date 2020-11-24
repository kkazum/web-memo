import React, { useContext } from 'react'
import styled from 'styled-components'
import { ADD_MEMO } from '../utils'
import AppContext from '../contexts/AppContext'

const NewButton = styled.button`
  background-color: #0071b2;
  height: 100%;
  width: 100%;
  color: #fff;
`

interface ButtonProps {
  children: string
}

const Button = ({ children }: ButtonProps) => {
  const { dispatch } = useContext(AppContext)
  return (
    <>
      <NewButton onClick={() => {
        dispatch({type: ADD_MEMO})
      }}>{children}</NewButton>
    </>
  )
}

export default Button

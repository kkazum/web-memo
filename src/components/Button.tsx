import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../contexts/AppContext'

const NewButton = styled.button`
  background-color: #0071b2;
  height: 100%;
  width: 100%;
  color: #fff;
`
interface Props {
  storageKey: string
  children: string
}

interface Memo {
  id: number
  text: string
  date: string
}

const Button = ( props: Props ) => {
  const { storageKey, children } = props;
  return (
    <>
      <NewButton onClick={() => {
        const memos: Memo[] = JSON.parse(localStorage.getItem(storageKey))
        memos.push
      }}>{children}</NewButton>
    </>
  )
}

export default Button

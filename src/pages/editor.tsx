import React, { useState } from 'react'
import styled from 'styled-components'
import ListItem from '../components/ListItem'
import { useStateWithStorage } from '../hooks/use_state_with_storage'

const Wrapper = styled.div`
  border: 10px solid black;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`

const Side = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: scroll;
`

const TextArea = styled.textarea`
  bottom: 0;
  font-size: 1rem;
  right: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  outline: none;
`
const storageKey = 'pages/editor:memo'
const editor = () => {
  const [memo, setMemo] = useStateWithStorage("", storageKey)
  return (
    <>
      <Wrapper>
        <Side>
          <ListItem />
        </Side>
        <TextArea value={memo} onChange={(e) => {
          setMemo(e.target.value)
        }} />
      </Wrapper>
    </>
  )
}

export default editor

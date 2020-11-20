import React, { useState } from 'react'
import styled from 'styled-components'
import ListItem from '../components/ListItem'
import { useStateWithStorage } from '../hooks/use_state_with_storage'
import AppContext from '../contexts/AppContext'
import moment from 'moment'

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
  const [state, setState] = useStateWithStorage([{id: 1, text: "ブラウザで使用できるメモです", date: moment().format("YYYY-MM-DD HH:mm:ss")}, {id: 2, text: "ブラウザで使用できるメモです", date: moment().format("YYYY-MM-DD HH:mm:ss")}], storageKey)
  const [target, setTarget] = useState<number>(1)

  return (
    <>
    <AppContext.Provider value={[target, setTarget]}>
      <Wrapper>
        <Side>
          {
            state.map((ele, index) => {
              return(<ListItem key={index} memo={ele}/>)
            })
          }
        </Side>
        <TextArea onChange={(e) => {
          setState(target - 1,e.target.value)
        }} value={state[target - 1].text}  />
      </Wrapper>
    </AppContext.Provider>
    </>
  )
}

export default editor

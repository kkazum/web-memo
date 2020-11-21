import React, { useState } from 'react'
import styled from 'styled-components'
import ListItem from '../components/ListItem'
import { useStateWithStorage } from '../hooks/use_state_with_storage'
import AppContext from '../contexts/AppContext'
import moment from 'moment'
import Button from '../components/Button'
const Wrapper = styled.div`
  border: 1px solid black;
  background-color: #303030;
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
  top: 30px;
  width: 50%;
  height: calc(100% - 30px);
  overflow: scroll;
`

const ButtonWrapper = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  font-size: 14px;
  border: 1px grey solid;
  &:hover {
    border: none;
  }
`

const TextArea = styled.textarea`
  bottom: 0;
  font-size: 1rem;
  right: 0;
  padding: 0.5rem;
  position: absolute;
  top: 30px;
  width: 50%;
  height: calc(100% - 30px);
  outline: none;
  background-color: #303030;
  color: white;
`

const storageKey = 'pages/editor:memo'
const editor = () => {
  const [state, setState] = useStateWithStorage([{id: 1, text: "ブラウザで使用できるメモです", date: moment().format("YYYY-MM-DD HH:mm:ss")}, {id: 2, text: "ブラウザで使用できるメモです", date: moment().format("YYYY-MM-DD HH:mm:ss")}], storageKey)
  const [target, setTarget] = useState<number>(1)

  return (
    <>
    <AppContext.Provider value={[target, setTarget]}>
      <Wrapper>
        <ButtonWrapper >
          <Button storageKey={storageKey}>新規メモを追加</Button>
        </ButtonWrapper>
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

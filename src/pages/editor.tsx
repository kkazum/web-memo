import React, { useState, useReducer } from 'react'
import styled from 'styled-components'
import ListItem from '../components/ListItem'
import AppContext from '../contexts/AppContext'
import moment from 'moment'
import Button from '../components/Button'
import memos from '../reducers/index'
import { Memo, storageKey } from '../utils'

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

const editor = () => {
  const init: Memo[] = [{id: 1, text: "ブラウザで使用できるメモです", date: moment().format("YYYY-MM-DD HH:mm:ss")}]
  const initialState: Memo[] = JSON.parse(localStorage.getItem(storageKey)) || init
  const [state, dispatch] = useReducer(memos, initialState)
  const [target, setTarget] = useState<number>(1)

  return (
    <>
    <AppContext.Provider value={[target, setTarget]}>
      <Wrapper>
        <ButtonWrapper >
          <Button dispatch={dispatch} >新規メモを追加</Button>
        </ButtonWrapper>
        <Side>
          {
            state.map((ele, index) => {
              return(<ListItem key={index} memo={ele}/>)
            })
          }
        </Side>
        <TextArea onChange={(e) => {
          dispatch({type: 'EDIT_MEMO' ,index: target -1, nextText: e.target.value})
        }} value={state[target - 1].text}  />
      </Wrapper>
    </AppContext.Provider>
    </>
  )
}

export default editor

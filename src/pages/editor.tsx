import React, { useState, useReducer, useEffect } from 'react';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import AppContext from '../contexts/AppContext';
import moment from 'moment';
import Button from '../components/Button';
import reducer from '../reducers';
import { storageKey, dateFormat, EDIT_MEMO, MemoState } from '../utils';

const Wrapper = styled.div`
  border: 1px solid black;
  background-color: #303030;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Side = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  top: 30px;
  width: 50%;
  height: calc(100% - 30px);
  overflow: scroll;
`;

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
`;

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
`;

const editor = (props: MemoState) => {
  let initialState: MemoState;
  let storageItem: MemoState = JSON.parse(
    localStorage.getItem(storageKey)!
  ) || { memos: [] };
  if (!storageItem.memos.length) {
    initialState = props;
  } else {
    initialState = storageItem;
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  localStorage.setItem(storageKey, JSON.stringify(state));

  const [target, setTarget] = useState<number>(0);
  useEffect(() => {
    if (!state.memos[target]) setTarget(target - 1);
    if (!state.memos.length) setTarget(0);
  }, [state.memos]);

  return (
    <>
      <AppContext.Provider value={{ target, setTarget, state, dispatch }}>
        <Wrapper>
          <ButtonWrapper>
            <Button>新規メモを追加</Button>
          </ButtonWrapper>
          <Side>
            {state.memos.map((ele, index) => {
              return <ListItem index={index} key={index} memo={ele} />;
            })}
          </Side>
          <TextArea
            autoFocus={true}
            disabled={!state.memos.length}
            onChange={(e) => {
              dispatch({
                type: EDIT_MEMO,
                index: target,
                nextText: e.target.value,
              });
            }}
            value={!state.memos[target] ? '' : state.memos[target].text}
          />
        </Wrapper>
      </AppContext.Provider>
    </>
  );
};

editor.defaultProps = {
  memos: [
    {
      id: 1,
      text: 'ブラウザで使用できるメモです',
      date: moment().format(dateFormat),
    },
  ],
};

export default editor;

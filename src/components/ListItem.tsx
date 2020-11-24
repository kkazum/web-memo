import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../contexts/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Memo, DELETE_MEMO } from '../utils'

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #595757;
  color: #fff;
  font-size: 14px;
  padding: 10px 50px 10px 10px;
  border: 1px grey solid;
  cursor: pointer;
  &:hover {
    border: none;
  }
`

const ItemTop = styled.p`
  width: 100%;
  height: 50%;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
`

const ItemBotton = styled.p`
  width: 100%;
  height: 50%;
  margin: 0;
`

const TrashIcon = styled(FontAwesomeIcon)`
  color: #ffffff;
  position: absolute;
  top: 20px;
  right: 10%;
  &:hover {
    font-size: 20px;
  }
`;

interface ListItemProps {
  memo: Memo
  index: number
}

const ListItem = ({memo, index}: ListItemProps) => {
  const {text, date} = memo
  const {setTarget , dispatch} = useContext(AppContext)
  return (
    <>
     <Item onClick={() => {
       setTarget(index)
     }}>
        <ItemTop>{text}</ItemTop>
        <ItemBotton>{date}</ItemBotton>
        <TrashIcon onClick={() => dispatch({type: DELETE_MEMO, index: index})} color={"white"} icon={faTrashAlt} />
     </Item>
    </>
  )
}

export default ListItem

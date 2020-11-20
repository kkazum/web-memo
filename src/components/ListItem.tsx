import React, { useContext } from 'react'
import styled from 'styled-components'
import AppContext from '../contexts/AppContext'

const Item = styled.div`
  width: 100%;
  height: 60px;
  background-color: #595757;
  color: #fff;
  font-size: 14px;
  padding: 10px;
  border: 1px grey solid;
  &:hover {
    border: none;
  }
`

const ItemTop = styled.p`
  width: 100%;
  height: 50%;
  margin: 0;
  white-space: nowrap;
`

const ItemBotton = styled.p`
  width: 100%;
  height: 50%;
  margin: 0;
`

const ListItem = ({memo}) => {
  const {id, text, date} = memo
  const [target, setTarget] = useContext(AppContext)
  return (
    <>
     <Item onClick={() => {
       setTarget(id)
     }}>
        <ItemTop>{text}</ItemTop>
        <ItemBotton>{date}</ItemBotton>
     </Item>
    </>
  )
}

export default ListItem

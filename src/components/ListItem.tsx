import React from 'react'
import styled from 'styled-components'

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
`

const ItemBotton = styled.p`
  width: 100%;
  height: 50%;
  margin: 0;
`

const ListItem = () => {
  return (
    <>
     <Item>
        <ItemTop>ItemTopです</ItemTop>
        <ItemBotton>ItemBottomです</ItemBotton>
     </Item>
    </>
  )
}

export default ListItem

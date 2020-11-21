import { useState, useEffect } from 'react'
import moment from 'moment'

interface Memo {
  id: number
  text: string
  date: string
}

export const useStateWithStorage = (init: Memo[], key: string): [Memo[], (index: number, nextState: string) => void] => {
  const [state, setState] = useState(JSON.parse(localStorage.getItem(key)) || init)
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  },[])
  const setStateWithStorage = (index: number, nextText: string): void => {
    // 再描画のキックをさせるためにsetStateで変更する、そしてeditor側で再描画する際にはlocalstorageにないと駄目
    setState((prevState: Memo[]) => {
      prevState[index].text = nextText
      prevState[index].date = moment().format("YYYY-MM-DD HH:mm:ss");
      localStorage.setItem(key, JSON.stringify(prevState))
      return [...prevState]
    })
  }
  // 描画の際の一度だけ意味のあるreturn
  return [state, setStateWithStorage]
}

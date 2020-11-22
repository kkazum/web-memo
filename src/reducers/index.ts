import moment from 'moment'
import { Memo, Action, storageKey } from '../utils'

const memos = (state: Memo[], action: Action) => {
  switch(action.type) {
    case 'EDIT_MEMO':
      const {index, nextText} = {index: action.index, nextText: action.nextText}
      state[index].text = nextText
      state[index].date = moment().format("YYYY-MM-DD HH:mm:ss");
      localStorage.setItem(storageKey, JSON.stringify(state))
      return [...state]
    case 'ADD_MEMO':
      const length = state.length
      state.push({id: state[length - 1].id + 1, text: "", date: moment().format("YYYY-MM-DD HH:mm:ss")})
      return [...state]
    case 'DELETE_MEMO':
      console.log(action.index)
      state.splice(action.index, 1)
      localStorage.setItem(storageKey, JSON.stringify(state))
      return [...state]
    default:
      return [...state]
  }
}

export default memos

export interface Memo {
  id: number;
  text: string;
  date: string;
}

export interface MemoState {
  memos : Memo[]
}

export interface Action {
  type: string
  index?: number
  nextText?: string
  date?: string
}

export const dateFormat = "YYYY-MM-DD HH:mm:ss"

export const storageKey: string = 'pages/editor:memo'

export const EDIT_MEMO = 'EDIT_MEMO'
export const ADD_MEMO = 'ADD_MEMO'
export const DELETE_MEMO = 'DELETE_MEMO'

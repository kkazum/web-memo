import moment from 'moment'

export interface Memo {
  id: number;
  text: string;
  date: string;
}

export interface Action {
  type: string
  index?: number
  nextText?: string
  date?: string
}

export const storageKey: string = 'pages/editor:memo'

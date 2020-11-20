import { useState } from 'react'

export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
  const [memo, setMemo] = useState<string>(localStorage.getItem(key) || init)

  const setMemoWithStorage = (nextMemo: string): void => {
    // 再描画のキックをさせるためにsetMemoで変更する、そしてeditor側で再描画する際にはlocalstorageにないと駄目
    setMemo(nextMemo)
    localStorage.setItem(key, nextMemo)
  }
  // 描画の際の一度だけ意味のあるreturn
  return [memo, setMemoWithStorage]
}

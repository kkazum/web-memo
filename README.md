## web-memo for mac
ブラウザ上でメモができるアプリです。

## 起動方法
1. プロジェクトのルートディレクトリで`yarn install`
2. プロジェクトのルートディレクトリで`yarn build`
3. 生成された`dist`ディレクトリを`chrome://extensions/`で読み込む(デベロッパーモード)
4. 念の為、使いたいページでブラウザを一度リロード

## 使用方法
command + M でメモを起動できます。(反応しない場合が多々あるため`chrome://extensions/shortcuts`で`command + M`を再設定すると動きます。)
文字を入力すると自動でlocalstorageに保存されます。メモのエクスポート機能を実装予定です。
最初のメモのみ`ブラウザで使用できるメモです`の文言が自動で入ります。
## License
MIT

![web-memo](https://user-images.githubusercontent.com/49956319/118946904-cddad800-b991-11eb-9c76-e16ff4b02e09.gif)

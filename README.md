
# Name（リポジトリ/プロジェクト/OSSなどの名前）
 
分かりやすくてカッコイイ名前をつける（今回は"hoge"という名前をつける）
 
"hoge"が何かを簡潔に紹介する
 
# DEMO
 
"hoge"の魅力が直感的に伝えわるデモ動画や図解を載せる
 
# Features
 
"hoge"のセールスポイントや差別化などを説明する
 
# Requirement
 
"hoge"を動かすのに必要なライブラリなどを列挙する
 
* huga 3.5.2
* hogehuga 1.0.2
 
# Installation
 
Requirementで列挙したライブラリなどのインストール方法を説明する
 
```bash
pip install huga_package
```
 
# Usage
 
DEMOの実行方法など、"hoge"の基本的な使い方を説明する
 
```bash
git clone https://github.com/hoge/~
cd examples
python demo.py
```
 
# Note
 
注意点などがあれば書く
 
# Author
 
作成情報を列挙する
 
* 作成者
* 所属
* E-mail
 
# License
ライセンスを明示する
 
"hoge" is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).
 
社内向けなら社外秘であることを明示してる
 
"hoge" is Confidential.


# Memo


問題点
★各フォームの値をローカルストレージに保存
★クリックした箇所のフォームだけを削除
★Githubpagesの白紙問題解決
△ボタンを押したときのアニメーション
⇨それっぽいのはできたが、アニメーション後も値が残るようにしたい

・空白追加の削除
・更新時フォーム１０個表示されるようにする


追加機能
・実行予定フォームにメモボタンを追記し詳細を書けるようにする


疑問点
・V-forの仕組み


Vue機能メモ
・Vuex
  mutationの呼び出し⇨commit
  actionsの呼び出し⇨dispatch
※オブジェクトの引数に関してはp364


・@change="onChanges"　入力完了後にイベント発生
onChanges(){
      this.$emit("local-event", this.idea);
}

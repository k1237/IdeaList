
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
Todo
・ローカルストレージに値を保存
・追加したフォーム削除アニメーション
・ボタンを押したときのアニメーション
⇨Vuestar：https://www.kabanoki.net/8452/


修正点
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
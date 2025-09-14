# コンポーネントを定義するときの注意点

## 設計

- そのコンポーネントが持つ責務はなんなのか
- propsで渡すのか、childrenで渡すのか
- そのスタイルはこのコンポーネントが持つべきなのか
- その state は中で持つのか, 外から渡されるのか
- 親からスタイルを変更できる設計になっているか

## 型定義

型定義をするときには, ユーティリティ型や`HTMLElement`等を利用し, 変更に対して強い型定義にすること

```javascript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
}
```

## その他

- 基本的にmarginは親で指定すること

## 参考サイト

- [現場で使えるReactコンポーネント第1弾 Button編](https://zenn.dev/u_10/articles/8c3cda00a701e9)
  - 他の弾もおすすめ
- [複雑な React コンポーネントを JSX のネストで表現する](https://zenn.dev/kazuma1989/articles/7749fb8de658a3)
  - サブコンポーネントを使う
- [smartHRのデザインシステム](https://smarthr.design/products/components/)

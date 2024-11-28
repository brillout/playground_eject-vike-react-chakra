Showcase of ejecting the [source code of `vike-react-chakra`](https://github.com/vikejs/vike-react/tree/main/packages/vike-react-chakra).

Open question: [how can we remove `vike-react-chakra` from `extends`?](https://github.com/brillout/playground_eject-vike-react-chakra/commit/7ca624af01c25f1f68b9c9c74a13e25b0ede0f8d)

Everything else works by applying this eject config:

```js
// node_modules/vike-react-chakra/eject.config.js

export const config = {
  files: 'Wrapper.tsx',
  operations: ['mv Wrapper.tsx pages/+Wrapper.tsx'],
}
```

See commit history.

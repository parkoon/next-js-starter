# Next.js Redux Saga Starter

Next Js Starter with Express, Redux, Redux-Saga, Styled-components

## Fetures

- Based on [next.js](https://github.com/zeit/next.js)
- Styling with [styled-components](https://github.com/styled-components/styled-components)
- Linting with [eslint](https://eslint.org/) & [prettier](https://prettier.io/)
- State management with [redux](https://github.com/reduxjs/redux), [react-redux](https://github.com/reduxjs/react-redux), [redux-saga](https://github.com/redux-saga/redux-saga), [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper), [next-redux-saga](https://github.com/bmealhouse/next-redux-saga), [immer](https://github.com/immerjs/immer)
- Persist and rehydrate a store with [redux-persist](https://github.com/rt2zz/redux-persist)
- Form control with [formik](https://github.com/jaredpalmer/formik), [yup](https://github.com/jquense/yup)
- Visualize the size of webpack output with [@zeit/next-bundle-analyzer](https://www.npmjs.com/package/@zeit/next-bundle-analyzer)
- Caching for Performance with [lru-cache](https://github.com/isaacs/node-lru-cache)
- An internationalization with [next-i18next](https://github.com/isaachinman/next-i18next)
- Security with [helmet](https://github.com/helmetjs/helmet), [cors](https://github.com/expressjs/cors)
- Gzip with [compression](https://github.com/expressjs/compression)
- Server Debuggin with [morgan](https://github.com/expressjs/morgan)

## Atomic Designed Component

[Ref 1 - How to organize your components using the atomic design](https://dev.to/sanfra1407/how-to-organize-your-components-using-the-atomic-design-dj3)

[Ref 2 - Structuring your React Application - Atomic Design Principles](https://andela.com/insights/structuring-your-react-application-atomic-design-principles/)

| 구분      | 예시                   | 설명                                                                                            |
| --------- | ---------------------- | ----------------------------------------------------------------------------------------------- |
| atoms     | Input, Button          | smallest components of your app like html tag                                                   |
| molecules | Input + Button         | combination of atoms, if you hava **Input** and **Button**, you can combine them **InputField** |
| organisms | Title + Input + Button | combination of molecules, it can be an AppBar, Card and so on...                                |

## Getting started

```
git clone https://github.com/parkoon/next-saga-starter my-project
cd my-project
yarn install
yarn start
```

You will probably want to remove next-saga-starter git history

```
rm -rf .git
git init
```

After yarn start, `http://localhost:3007` to see your application.

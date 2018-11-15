import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import reducers from './stores/reducers'
import states from './stores/states'
import Root from './Root.jsx'
import * as serviceWorker from './serviceWorker'
// 安装redux-devtools-extension的可视化工具。
// 谷歌应用商店下载redux-devtools
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  reducers,
  states,
  composeWithDevTools(),
)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

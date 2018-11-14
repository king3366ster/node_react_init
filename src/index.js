import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import reducers from './stores/reducers'
import Root from './Root.jsx';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers)

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

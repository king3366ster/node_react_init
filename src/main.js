// import React from 'react'
// import ReactDom from 'react-dom'

// import TestCom from './components/testCom.js'
// import NodeList from './components/NodeList.js'

// ReactDom.render( 
//   <div>
//     <TestCom name = "=—=" / >
//     <NodeList title = "222" >
//       <span> hello </span>
//       <span> world </span> 
//     </NodeList> 
//   </div>, 
//   document.getElementById('app')
// )

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

import React from 'react'
import ReactDom from 'react-dom'

import TestCom from './components/testCom.js'
import NodeList from './components/NodeList.js'

ReactDom.render(
  <div>
    <TestCom name="=—="/>
    <NodeList title="222">
      <span>hello</span>
      <span>world</span>
    </NodeList>
  </div>, 
  document.getElementById('app')
)
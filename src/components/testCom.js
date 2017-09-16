import React from 'react'
// import {render} from 'react-dom'

class TestCom extends React.Component {
  setState () {

  }
  render () {
    return (
      <div className="TestCom">
        Hello World! {this.props.name}
      </div>
    )
  }
}

export default TestCom

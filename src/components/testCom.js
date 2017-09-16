import React from 'react'
// import {render} from 'react-dom'

class TestCom extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      params: '111'
    }
  }
  render () {
    return (
      <div className="TestCom">
        Hello World! {this.props.name} {this.state.params}
      </div>
    )
  }
}

export default TestCom

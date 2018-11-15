import React from 'react'

class Counter extends React.Component {
  constructor (props) {
    super (props)
    console.log(22222, props)
    this.state = {
      params: '111'
    }
  }
  render () {
    return (
      <div className="TestCom">
        Hello World! {this.state.params} {this.props.countNum}
        <span onClick={this.props.onClick}>点击</span>
      </div>
    )
  }
}

export default Counter

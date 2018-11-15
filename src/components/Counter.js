import React from 'react'

class Counter extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      params: '111'
    }
  }
  render () {
    return (
      <div className="TestCom">
        Hello World! {this.state.params}
      </div>
    )
  }
}

export default Counter

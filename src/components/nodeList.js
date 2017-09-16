import React from 'react'

const NotesList = React.createClass({
  getInitialState () {
    return {
      liked: true,
      tempVal: 'hello',
      color: 'red'
    }
  },
  handleClick (event) {
    this.refs.myTextInput.focus()
  },
  handleChange (event) {
    this.setState({tempVal: event.target.value})
  },
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  componentWillMount () {

  },
  componentDidMount () {

  },
  componentWillUpdate (nextProps, nextState) {

  },
  componentDidUpdate (prevProps, prevState) {
    this.setState({
      color: '#0f0'
    })
  },
  componentWillUnmount () {

  },
  render () {
    let value = this.state.tempVal
    return (
      <div>
        <p>
          <span style={{color: this.state.color}}>
            {this.props.title}
          </span>
          <br/>
          {value}<br/>
          {this.state.liked ? 'like' : 'haven\'t liked'}
        </p>
        <ol>
        {
          React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>
          })
        }
        </ol>
        <input type="text" ref="myTextInput" value={value} onChange={this.handleChange} />
        <input type="button" value="click this" onClick={this.handleClick} />
      </div>
    )
  }
})

export default NotesList

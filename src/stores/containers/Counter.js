import { connect } from 'react-redux'
import { testAddCount } from '../actions'
import Counter from '../../components/Counter'

const mapStateToProps = (state, ownProps) => {
  return {
    countNum: state.testCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(testAddCount(1))
    }
  }
}

const Module = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default Module
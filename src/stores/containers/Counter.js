import { connect } from 'react-redux'

import Counter from '../../components/Counter'

const mapStateToProps = (state, ownProps) => {
  return {
    countNum: state.testCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onClick: () => {
    //   dispatch(setVisibilityFilter(ownProps.filter))
    // }
  }
}

const AddModule = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default AddModule
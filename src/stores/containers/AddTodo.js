import React from 'react'
import { connect } from 'react-redux'

import AddTodo from '../../components/AddTodo'

const AddModule = connect()(AddTodo)

export default AddModule
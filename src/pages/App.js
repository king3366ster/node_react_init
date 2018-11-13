import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import {AddTodo, VisibleTodoList} from '../stores'

const App = () => (
  <div>
    React Project Tester
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Link to="/test"> test Navlink </Link>
  </div>
)

export default App
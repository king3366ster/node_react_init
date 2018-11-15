import React from 'react'
import { Link } from 'react-router-dom'
import {Counter} from '../stores'

const Test = () => (
  <div>
    Hello World
    <Counter />
    <Link to="/"> Main Navlink </Link>
  </div>
)

export default Test
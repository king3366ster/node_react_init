import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './pages/App'
import Test from './pages/Test'

const SliderComponent = () => (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/test" component={Test} />
  </div>
)

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <SliderComponent/>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root

import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './pages/App.jsx'
import Test from './pages/Test.jsx'
import coreCss from './styles/core.css'

console.log(coreCss)
const RouteComponent = () => (
  <div className={coreCss.gBody}>
    <Route exact path="/" component={App} />
    <Route path="/test" component={Test} />
  </div>
)

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <RouteComponent/>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root

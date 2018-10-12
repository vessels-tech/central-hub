import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import routes from './routes'
import store, { history } from './store'

import './styles/main.scss'

const router = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

render(router, document.getElementById('root'))

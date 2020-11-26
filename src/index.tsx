import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './store/reducers/rootReducer'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

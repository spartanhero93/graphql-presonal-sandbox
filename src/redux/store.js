import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

import logger from './middleware'

const middlewareEnhancer = applyMiddleware(logger, thunkMiddleware)
//onst composedEnhancers = compose(middlewareEnhancer)

const initialState = { response: {} }
async function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        response: await axios.get(`https://kitsu.io/api/edge/${action.payload}`)
      }
  
    default:
      return state
  }
}

export const store = configureStore({reducer: rootReducer, middleware: middlewareEnhancer})
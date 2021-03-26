import React from 'react'
import { ApolloProvider } from '@apollo/client';
import Header from './Containers/Header'
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'


import './App.css';
import client from './Apollo';

const addText = text => ({
  type: 'ADD_TEXT',
  payload: text
})

const initialState = { text: '' }

function rootReducer(state = initialState, action) {
  if (action.type === 'ADD_TEXT') {
    return {
      ...state,
      // and update the copy with the new value
      text: action.payload
    }
  }
  // otherwise return the existing state unchanged
  return state
}

const store = configureStore({reducer: rootReducer})


function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
      <div className="">
        <Header />
        <div>
          <h1>Testing</h1>
          <button onClick={() => store.dispatch(addText('HOWDY'))}>Click Me!</button>
          <button onClick={() => console.log(store.getState())}>Log the State</button>
        </div>
      </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;

import React from 'react'
import { ApolloProvider } from '@apollo/client';
import client from './Apollo';
import { Provider } from 'react-redux'

import './App.css';

import Header from './Containers/Header'
import {store} from './redux/store'
import {fetchData} from './redux/actions'

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
      <div className="">
        <Header />
        <div>
          <h1>Testing</h1>
          <button onClick={() => store.dispatch(fetchData('trending/anime'))}>Click Me!</button>
          <button onClick={() => console.log(store.getState())}>Log the State</button>
        </div>
      </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;

import React from 'react'
import { ApolloProvider } from '@apollo/client';
import Header from './Containers/Header'


import './App.css';
import client from './Apollo';



function App() {
  return (
    <ApolloProvider client={client}>
      <div className="">
        <Header />
      </div>
    </ApolloProvider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ApolloClient, HttpLink, InMemoryCache, ApolloProvider} from "@apollo/client"
require('dotenv').config()
const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_BASE_URL,
  }),
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


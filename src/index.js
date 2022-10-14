import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index.js';
import { CookiesProvider } from 'react-cookie';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <CookiesProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </CookiesProvider>,
  document.getElementById('root'), () => console.log('Rendered')
)

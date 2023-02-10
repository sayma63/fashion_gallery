import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import AuthProvider from './contexts/AuthProvider';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <App />
      </AuthProvider>
      
    </QueryClientProvider>
    
      
    

  </React.StrictMode>
);



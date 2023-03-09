import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import RouterContainer from 'routes';

import { GlobalStyle } from 'assets/css/globalStyle';
import { AuthProvider } from 'contexts/auth';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer className="toast" />
        <RouterContainer />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);

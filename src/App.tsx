import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './contexts/auth';
import RouterContainer from './routes';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer className="toast" />
        <RouterContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

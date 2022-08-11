import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouterContainer from './routes';

function App() {
  return (
    <BrowserRouter>
      <RouterContainer />
    </BrowserRouter>
  );
}

export default App;

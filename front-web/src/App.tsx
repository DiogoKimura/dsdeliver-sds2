import './App.css';
import Route from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <>
        <Route />
        <ToastContainer />
      </>
    </div>
  );
}

export default App;

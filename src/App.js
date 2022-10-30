 import './App.css';
 import { Route, Routes } from 'react-router-dom';
 import Login from './compoments/Login'
 import Dashboard from './compoments/Dashboard'
 import Other from './compoments/Other';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="">
      <ToastContainer />
       <Routes > 
          <Route path = '/' element = { < Login />}/>
          <Route path = '/dashboard' element = { < Dashboard /> }/>
          <Route path = '/eila' element = { < Other /> }/>
       </Routes>
    </div>
  );
}

export default App;

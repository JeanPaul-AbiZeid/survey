import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'
import Surveys from './components/Surveys'
import Admin from './components/Admin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Login />
          </>

        }></Route>
        
        <Route path='/Signup' element={
          <>
          <Signup />
          </>
        }></Route>

        <Route path='/Surveys' element={
          <>
          <Surveys />
          </>
        }></Route>

        <Route path='/Admin' element={
          <>
          <Admin />
          </>
        }></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

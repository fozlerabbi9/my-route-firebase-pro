import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import AboutUs from './ComponentsFile/AboutUsFile/AboutUs';
import Home from './ComponentsFile/HomeFile/Home';
import Login from './ComponentsFile/LoginFile/Login';
import Registation from './ComponentsFile/RegistationFile/Registation';
import Header from './ComponentsFile/HeaderFile/Header';
import Orders from './ComponentsFile/OrderFile/Orders';
import RequireAuth from './ComponentsFile/RequireAuthFile/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
        <Route path='/aboutUs' element={
          <RequireAuth>
            <AboutUs></AboutUs>
          </RequireAuth>
        }></Route>

        <Route path='/order' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registation' element={<Registation></Registation>}></Route>
      </Routes>
    </div>
  );
}

export default App;

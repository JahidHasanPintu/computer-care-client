
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home/Home';
import Inventory from './Components/Pages/Inventory/Inventory';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Navbar from './Components/Pages/Shared/Navbar/Navbar';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/inventory/:inventoryID" element={
          <RequireAuth> <Inventory></Inventory> </RequireAuth>
        }></Route>
        <Route path="/inventory" element={<Inventory></Inventory> }></Route>
      </Routes>
      
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;

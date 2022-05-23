
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Components/Pages/Blog/Blog';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Navbar from './Components/Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
      
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;

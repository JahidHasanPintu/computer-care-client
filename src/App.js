
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProdcut from './Components/Pages/Admin/AddProdcut/AddProdcut';
import MakeAdmin from './Components/Pages/Admin/MakeAdmin/MakeAdmin';
import ManageAllOrder from './Components/Pages/Admin/ManageAllOrder/ManageAllOrder';
import ManageProduct from './Components/Pages/Admin/ManageProduct/ManageProduct';
import Blog from './Components/Pages/Blog/Blog';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';
import Inventory from './Components/Pages/Inventory/Inventory';
import Login from './Components/Pages/Login/Login';
import MyProfile from './Components/Pages/MyProfile/MyProfile';
import Register from './Components/Pages/Register/Register';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Navbar from './Components/Pages/Shared/Navbar/Navbar';
import AddRevew from './Components/Pages/User/AddRevew/AddRevew';
import MyOrders from './Components/Pages/User/MyOrders/MyOrders';
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
        <Route path="/dashboard" element={
          <RequireAuth> <Dashboard></Dashboard> </RequireAuth>
        }></Route>

        <Route path="/make-admin" element={
          <RequireAuth> <MakeAdmin></MakeAdmin> </RequireAuth>
        }></Route>
        <Route path="/manage-product" element={
          <RequireAuth> <ManageProduct></ManageProduct> </RequireAuth>
        }></Route>
        <Route path="/add-product" element={
          <RequireAuth> <AddProdcut></AddProdcut> </RequireAuth>
        }></Route>
        <Route path="/manage-all-order" element={
          <RequireAuth> <ManageAllOrder></ManageAllOrder></RequireAuth>
        }></Route>
        <Route path="/my-profile" element={
          <RequireAuth> <MyProfile></MyProfile> </RequireAuth>
        }></Route>
        <Route path="/add-revew" element={
          <RequireAuth> <AddRevew></AddRevew> </RequireAuth>
        }></Route>
        <Route path="/my-order" element={
          <RequireAuth> <MyOrders></MyOrders> </RequireAuth>
        }></Route>


        <Route path="/inventory" element={<Inventory></Inventory> }></Route>
      </Routes>
      
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;

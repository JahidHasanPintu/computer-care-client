
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// import ManageAllProducts from './Components/Pages/Admin/ManageAllOrder/ManageAllProducts';
// import ManageProduct from './Components/Pages/Admin/ManageProduct/ManageProduct';
import Blog from './Components/Pages/Blog/Blog';
import AddProduct from './Components/Pages/Dashboard/AddProduct';
import AddReview from './Components/Pages/Dashboard/AddReview';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageAllProducts from './Components/Pages/Dashboard/ManageAllProducts';
import ManageProduct from './Components/Pages/Dashboard/ManageProduct';
import MyOrders from './Components/Pages/Dashboard/MyOrders';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import Payment from './Components/Pages/Dashboard/Payment';
import Users from './Components/Pages/Dashboard/Users';
// import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';
import Inventory from './Components/Pages/Inventory/Inventory';
import Login from './Components/Pages/Login/Login';
import Portfolio from './Components/Pages/Portfolio/Portfolio';
import Register from './Components/Pages/Register/Register';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Navbar from './Components/Pages/Shared/Navbar/Navbar';


import RequireAdmin from './Components/RequireAuth/RequireAdmin';
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
        <Route path="/portfolio" element={<Portfolio/>}></Route>

        <Route path="/register" element={<Register/>}></Route>
        <Route path="/inventory/:inventoryID" element={
          <RequireAuth> <Inventory></Inventory> </RequireAuth>
        }></Route>
        {/* <Route path="/dashboard" element={
          <RequireAuth> <Dashboard></Dashboard> </RequireAuth>
        }></Route> */}
{/* 
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
          <RequireAuth> <ManageAllProducts></ManageAllProducts> </RequireAuth>
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
 */}

{/* New nested route  */}

<Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>

          <Route path='addreview' element={<AddReview></AddReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='manageallproducts' element={<RequireAdmin><ManageAllProducts></ManageAllProducts></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
        </Route>



        <Route path="/inventory" element={<Inventory></Inventory> }></Route>
      </Routes>
      
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;

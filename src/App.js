import './App.css';
import ContactUs from './Pages/Contact/ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import AllCarrerInfo from './Pages/CarrerPage/AllCarrerInfo/AllCarrerInfo';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import AdminMaster from './Pages/Admin/AdminMain/AdminMaster/AdminMaster';
import MakeAdmin from './Pages/Admin/AdminMain/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/Admin/AdminMain/ManageAllOrders/ManageAllOrders';
import AddEmployee from './Pages/Admin/AdminMain/AddEmployee/AddEmployee';
import MyOrders from './Pages/MyDashBoard/MyOrders/MyOrders';
import MyApplication from './Pages/MyDashBoard/MyApplication/MyApplication';
import AddReview from './Pages/MyDashBoard/AddReview/AddReview';
import Dashboard from './Pages/MyDashBoard/Dashboard/Dashboard';
import DashboardMenu from './Pages/MyDashBoard/DashboardMenu/DashboardMenu';
import AllApplicants from './Pages/Admin/AdminMain/AllApplicants/AllApplicants';
import ApplyInfo from './Pages/CarrerPage/ApplyInfo/ApplyInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import SuccessfullyApplied from './Pages/CarrerPage/ApplyInfo/SuccessfullyApplied';
import AuthProvider from './Pages/Context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/all_career_info" element={<AllCarrerInfo />} />
          <Route path="/apply" element={<ApplyInfo />} />
          <Route path="/about_us" element={<AboutUs></AboutUs>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/submittedSuccess" element={<SuccessfullyApplied></SuccessfullyApplied>} />
          <Route path="/admin" element={

            <AdminMaster></AdminMaster>



          } >
            <Route path="/admin/makeAdmin" element={

              <MakeAdmin></MakeAdmin>



            } />
            <Route path="/admin/allApplicant" element={

              <AllApplicants></AllApplicants>



            } />
            <Route path="/admin/manageAllOrders" element={

              <ManageAllOrders></ManageAllOrders>




            } />
            <Route path="/admin/addAnEmployee" element={

              <AddEmployee></AddEmployee>





            } />
          </Route>
          <Route path="/dashboard" element={

            <DashboardMenu></DashboardMenu>



          } >

            <Route path="/dashboard/myApplications" element={

              <MyApplication></MyApplication>


            } />
            <Route path="/dashboard/myOrders" element={

              <MyOrders></MyOrders>





            } />
            <Route path="/dashboard/addAReview" element={

              <AddReview></AddReview>




            } />
          </Route>
        </Routes>
      </BrowserRouter>


    </AuthProvider>
  );
}

export default App;

import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ManagementDashboard from './pages/ManagementDashboard';
import VendorOnboarding from './pages/VendorOnboarding';
import AdhocPage from './pages/AdhocPage';
import ProtectedRoute from './components/ProtectedRoute';
import VendorPage from './pages/VendorPage';
import ContractFlowPage from './pages/ContractFlowPage';


function App() {
  return (
    <Router>
      <ToastContainer position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Slide}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
      <Routes>
      <Route exact path='/' element={<LandingPage />}></Route>
      <Route exact path='/contractflowpage' element={<ContractFlowPage />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='admindashboard' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}></Route>
      <Route exact path='/managementdashboard' element={<ProtectedRoute><ManagementDashboard/></ProtectedRoute>}></Route>
      <Route exact path='/vendoronboarding' element={<ProtectedRoute><VendorOnboarding/></ProtectedRoute>}></Route>
      <Route exact path='/Adhoc' element={<ProtectedRoute><AdhocPage/></ProtectedRoute>}></Route>
      <Route exact path='/vendorpage' element={<VendorPage />}></Route>
      
      </Routes>
    </Router>
  );
}

export default App;

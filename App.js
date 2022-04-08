import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListChargingstationComponent from './Components/ListChargingstationComponent';
import AddChargingstationComponent from './Components/AddChargingstationComponent';
import{
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
  useNavigate
} from "react-router-dom";
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import UpdateChargingstationComponent from './Components/UpdateChargingstationComponent';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import AdminPage from './Components/AdminPage';
import CustomerPage from './Components/CustomerPage';
import ChargingstationPage from './Components/ChargingstationPage';
import BookAppointment from './Components/BookAppointment';
import AppointmentList from './Components/AppointmentList';
import UpdateAppointmentListByAId from './Components/UpdateAppointmentListByAId';
import UpdateCustomerComponent from './Components/UpdateCustomerComponent.js';
import ListVehicleComponent from './Components/ListVehicleComponent';
import AddVehicleComponent from './Components/AddVehicleComponent';
import UpdateStationComponent from './Components/UpdateStationComponent';
import StationAppointmentListComponent from './Components/StationAppointmentListComponent';
import ChargingstationsComponent from './Components/ChargingstationsComponent';
import AddCustomerComponent from './Components/AddCustomerComponent';
import HomePageComponent from './Components/HomePageComponent';
import ListCustomerComponent from './Components/ListCustomerComponent';




function App() {
  return (
    <div >
      <Router>
      <HeaderComponent/>
      <div className='container'>
        <Routes>
          <Route path="/home" element={<HomePageComponent/>} />
          <Route path="/chargingstationpage/:id" element={<ChargingstationPage/>} />
          <Route path='/update-station/:id' element={<UpdateStationComponent/>} />
          <Route path='/appointment/:id' element={<StationAppointmentListComponent/>} />
          <Route path="/adminpage" element={<AdminPage/>} />
          <Route path ="/customerpage/:id" element={<CustomerPage/>} />
          <Route exact path="/login"  element={<LoginPage/>}></Route>
          <Route exact path="/chargingstations/:customerId" element={<ListChargingstationComponent/>}></Route>
          <Route  path="/chargingstations/add-chargingstation" element={<AddChargingstationComponent/>}></Route>
          <Route path="/update-chargingstation/:stationid" element={<UpdateChargingstationComponent/>}></Route>
          <Route path="/bookappointment/:customer/:station" element={<BookAppointment/>} />
          <Route path="/appointments/:customerId" element={<AppointmentList></AppointmentList>} />
          <Route path='/update-appointment/:Id' element={<UpdateAppointmentListByAId/>} />
          <Route path='/update-customer/:Id' element={<UpdateCustomerComponent/>} />
          <Route path='/vehicles/:cid' element={<ListVehicleComponent/>} />
          <Route path='/add-vehicle/:customerId' element={<AddVehicleComponent></AddVehicleComponent>} />
          <Route path='/chargingstations'element={<ChargingstationsComponent/>} />
          <Route path='/customers' element={<ListCustomerComponent/>} />
          <Route path='/add-customer/:id' element={<AddCustomerComponent/>} />
        </Routes>
      </div>
       
      </Router>
    
      <FooterComponent/>
    </div>
  );
}

export default App;

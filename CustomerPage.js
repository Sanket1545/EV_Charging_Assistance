import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import LoginService from '../Services/LoginService';

const CustomerPage = (props) => {
    const {id} = useParams()
    const [name, setName] = useState("")

    LoginService.getUser(id).then((resp) =>{
      setName(resp.data.firstName);
      console.log(resp.data);
    })
  return (
    
    <div className='customersOperations '>
      
        <h2 style={{color :'white'}}>Welcome {name} to EV Charging Assistance.</h2>

        <div>
            <Link to={`/chargingstations/${id}`} className='btn'style={{marginTop:'100px',color:'white',fontFamily:'cursive'}}><i class="bi bi-card-list" style={{marginRight:'10px'}}></i>View Chargingstations</Link>
        </div>
        <div>
            <Link to={`/appointments/${id}`} className='btn' style={{marginTop:'30px',color:'white',fontFamily:'cursive'}} ><i class="bi bi-pencil-square" style={{marginRight:'10px'}}></i>View Appointments </Link>
        </div>
        <div>
          
          <Link to={`/update-customer/${id}`} className='btn' style={{marginTop:'30px',color:'white',fontFamily:'cursive'}} ><i class="bi bi-person-circle" style={{marginRight:'10px'}}></i>Edit Profile </Link>
        </div>
        <div>
          <Link to={`/vehicles/${id}`} className='btn' style={{marginTop:'30px',color:'white',fontFamily:'cursive'}}><i class="bi bi-truck"style={{marginRight:'10px'}}></i>Vehicles</Link>
        </div>
    </div>
    
  )
}

export default CustomerPage
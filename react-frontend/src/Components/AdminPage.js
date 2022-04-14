import React from 'react'
import { Link, useParams } from 'react-router-dom';
import LoginService from '../Services/LoginService';

const AdminPage = () => {
  return (
    <div className='adminOperations'>
        <h2 style={{color :'white',marginLeft:'30px'}}>Hello Admin </h2>
        <div>
          <Link to={`/chargingstations`} className='btn' style={{marginTop:'30px',color:'white',fontFamily:'cursive'}} ><i class="bi bi-pencil-square" style={{marginRight:'10px'}}></i>Manage Chargingstations </Link>
        </div>
        <div>
            <Link to={`/customers`} className='btn' style={{marginTop:'30px',color:'white',fontFamily:'cursive'}} ><i class="bi bi-people" style={{marginRight:'10px'}}></i>Manage Customers </Link>
        </div>
    </div>
  )
}

export default AdminPage
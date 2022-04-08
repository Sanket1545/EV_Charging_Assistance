import React from 'react'
import { Link, useParams } from 'react-router-dom';
import LoginService from '../Services/LoginService';

const PowerstationPage = () => {

  const {id} = useParams();

  return (
    <div className='chargingstationsOperation'>
        <h2 style={{color :'white',marginLeft:'30px'}}>Powerstation Window.</h2>
        <div>
          <Link to={`/update-station/${id}`} className='btn' style={{marginTop:'30px',color:'white',fontFamily:'cursive'}} ><i class="bi bi-person-circle" style={{marginRight:'10px'}}></i>Edit Profile </Link>
        </div>
        <div>
            <Link to={`/appointment/${id}`} className='btn' style={{marginTop:'30px',color:'white',fontFamily:'cursive'}} ><i class="bi bi-pencil-square" style={{marginRight:'10px'}}></i>View Appointments </Link>
        </div>
        
    </div>
  )
}

export default PowerstationPage
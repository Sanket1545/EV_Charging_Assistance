import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import CustomerService from '../Services/CustomerService'
import UserService from '../Services/UserService'

const UpdateCustomerComponent = () => {

    const [firstName,setFirstname]=useState('')
    const [lastName,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobileNo,setMobileno]=useState('')
    const [location,setLocation]=useState('')
    const [area,setArea]=useState('')
    const [city,setCity]=useState('')
    const [userid, setuserid] = useState('')
    const [cid, setcid] = useState('')
    const navigate =useNavigate();

    const {Id} = useParams();

    useEffect(() => {
        CustomerService.getCustomerById(Id).then((response) => {
            console.log(response.data);
            setcid(response.data.customerId)
            setFirstname(response.data.firstName)
            setLastname(response.data.lastName)
            setEmail(response.data.email)
            setMobileno(response.data.mobileNo)
            setLocation(response.data.location)
            setArea(response.data.area)
            setCity(response.data.city)
            setPassword(response.data.password)
        
            
        }).catch(error => {
            console.log(error)
        })
        
    }, [])

    
 
    function updateCustomer(e) {
        e.preventDefault()
        const customer = {
            firstName,lastName, email, password,
            mobileNo, location, area, city
        }
CustomerService.updateCustomer(Id, customer).then((response) => {
  console.log(response.data)
  alert("Profile Updated Successfully.");
  navigate(`/home`);
}).catch(error => {
console.log(error);
})
}

const cancelCustomer=(e)=>{
e.preventDefault();
alert("Fill the form to Update profile.")
console.log("Customer not updated.");
}

console.log(userid);
return (
<div>
<div className='container'>
      <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Edit Profile</h3>
              <div className='card-body'>
                  <form className='form-control form-control-sm'>
                  <div className='form-group mb-2'>
                          <label className='form-label'>FirstName :</label>
                          <input type="text"
                           name='firstName'
                           className='form-control'
                           placeholder='Enter Customer FirstName'
                           value={firstName}
                           onChange ={(e)=>setFirstname(e.target.value)}
                          />
                      </div>
                      <div className='form-group mb-2'>
                          <label className='form-label'>LastName :</label>
                          <input type="text"
                           name='lastName'
                           className='form-control'
                           placeholder='Enter Customer LastName'
                           value={lastName}
                           onChange ={(e)=>setLastname(e.target.value)}
                          />
                      </div>
                      <div className='form-group mb-2'>
                          <label className='form-label'>Email :</label>
                          <input type="email"
                           name='email'
                           className='form-control'
                           placeholder='Enter Station Email'
                           value={email}
                           onChange ={(e)=>setEmail(e.target.value)}
                          />
                      </div>
                      <div className='form-group mb-2'>
                          <label className='form-label'>Password :</label>
                          <input type="password"
                           name='password'
                           className='form-control'
                           placeholder='Enter station password'
                           value={password}
                           onChange ={(e)=>setPassword(e.target.value)}
                          />
                      </div>
                      <div className='form-group mb-2'>
                          <label className='form-label'>Mobile Number :</label>
                          <input type="number"
                           name='mobileno'
                           className='form-control'
                           placeholder='Enter Station Mobile number'
                           value={mobileNo}
                           onChange ={(e)=>setMobileno(e.target.value)}
                          />
                      </div>
                      <div className='form-group mb-2'>
                          <label className='form-label'>Location :</label>
                          <input type="text"
                           name='location'
                           className='form-control'
                           placeholder='Enter Station Location'
                           value={location}
                           onChange ={(e)=>setLocation(e.target.value)}
                          />
                      </div>
                      <div className='form-group mb-2'>
                          <label className='form-label'>Area :</label>
                          <input type="text"
                           name='area'
                           className='form-control'
                           placeholder='Enter Station Area'
                           value={area}
                           onChange ={(e)=>setArea(e.target.value)}
                          />
                      </div>
                      <div className='form-group mb-2'>
                          <label className='form-label'>City :</label>
                          <input type="text"
                           name='city'
                           className='form-control'
                           placeholder='Enter Station City'
                           value={city}
                           onChange ={(e)=>setCity(e.target.value)}
                          />
                      </div>
                      
                      <button className='btn btn-success' onClick={(e) =>updateCustomer(e)}>Update</button>
                      <button className='btn btn-danger' onClick={(e) =>cancelCustomer(e)}style={{marginLeft:'10px'}}>Cancel</button>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>
)
}

export default UpdateCustomerComponent
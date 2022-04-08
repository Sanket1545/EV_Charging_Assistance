import React,{useEffect, useState} from 'react'
import CustomerService from '../Services/CustomerService';
import {useNavigate,useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

const AddCustomerComponent = () => {
    const [firstName,setFirstname]=useState('')
    const [lastName,setLastname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobileNo,setMobileno]=useState('')
    const [location,setLocation]=useState('')
    const [area,setArea]=useState('')
    const [city,setCity]=useState('')
    const navigate =useNavigate();
    //const {id}=useParams();
   

    const saveCustomer=(e)=>{
        e.preventDefault();
        const customer ={firstName,lastName,email,password,
            mobileNo,location,area,city}

            CustomerService.createCustomer(customer).then((response)=>{
                console.log(response.data)
                navigate('/customers');
             }).catch(error =>{
                 console.log(error)
             })
            
            }
    

    const cancelCustomer=(e)=>{
        e.preventDefault();
        navigate('/add-customer');
        console.log("new customer not added cancel");
    }

   

  return (
    <div >
        <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Customer Registration</h3>
                            <div className='card-body'>
                                <form className='form-control form-control-sm'>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>FirstName :</label>
                                        <input type="text"
                                         name='firstname'
                                         className='form-control'
                                         placeholder='Enter Customer FirstName'
                                         value={firstName}
                                         onChange ={(e)=>setFirstname(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>LastName :</label>
                                        <input type="text"
                                         name='lastname'
                                         className='form-control'
                                         placeholder='Enter Customer LastName'
                                         value={lastName}
                                         onChange ={(e)=>setLastname(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Email :</label>
                                        <input type="emil"
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
                                   
                                    <button className='btn btn-success' onClick={(e) =>saveCustomer(e)}>Submit</button>
                                    <button className='btn btn-danger' onClick={(e) =>cancelCustomer(e)}style={{marginLeft:'10px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default AddCustomerComponent
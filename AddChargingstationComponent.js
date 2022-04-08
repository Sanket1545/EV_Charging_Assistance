import React,{useState} from 'react'
import ChargingstationService from '../Services/ChargingstationService';
import {useNavigate} from 'react-router-dom';

const AddChargingstationComponent = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobileno,setMobileno]=useState('')
    const [location,setLocation]=useState('')
    const [area,setArea]=useState('')
    const [city,setCity]=useState('')
    const [portid,setPortid]=useState('')
    const navigate =useNavigate();

    

    const saveChargingstation=(e)=>{
        e.preventDefault();

        const chargingstation ={name,email,password,
            mobileno,location,area,city,portid}
            ChargingstationService.createChargingstation(chargingstation).then((response)=>{
            console.log(response.data)
            alert("Station Added Successfully.");
            navigate('/chargingstations');
        }).catch(error =>{
            console.log(error)
        })   
    }

    
    

    const cancelChargingstation=(e)=>{
        e.preventDefault();
        navigate('/chargingstations');
        console.log("new chargingstation not added. cancel");
    }


  return (
    <div className='registerChargingstation'>
        
        <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Register Chargingstation</h3>
                            <div className='card-body'>
                                <form className='form-control form-control-sm'>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Name :</label>
                                        <input type="text"
                                         name='name'
                                         className='form-control'
                                         placeholder='Enter Station Name'
                                         value={name}
                                         onChange ={(e)=>setName(e.target.value)}
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
                                         value={mobileno}
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
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Available Port :</label>
                                        <input type="text"
                                         name='port'
                                         className='form-control'
                                         placeholder='Enter Port Id Number'
                                         value={portid}
                                         onChange ={(e)=>setPortid(e.target.value)}
                                        />
                                    </div>
                                    <button className='btn btn-success' onClick={(e) =>saveChargingstation(e)}>Save</button>
                                    <button className='btn btn-danger' onClick={(e) =>cancelChargingstation(e)}style={{marginLeft:'10px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default AddChargingstationComponent;
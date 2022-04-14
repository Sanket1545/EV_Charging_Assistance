import React,{useState} from 'react'
import ChargingstationService from '../Services/ChargingstationService';
import {useNavigate} from 'react-router-dom';

import { Form, Button, FormField } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

const SignUpChargingstation = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobileNo,setMobileno]=useState('')
    const [location,setLocation]=useState('')
    const [area,setArea]=useState('')
    const [city,setCity]=useState('')
    const [portId,setPortid]=useState('')
    const navigate =useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // data.preventDefault();
    
    // const saveChargingstation=(data)=>{
        // e.preventDefault();

        const chargingstation ={name,email,password,
            mobileNo,location,area,city,portId}
            ChargingstationService.createChargingstation(chargingstation).then((response)=>{
            console.log(response.data)
            alert("Station Added Successfully.");
            navigate('/login');
        }).catch(error =>{
            console.log(error)
        })  

    }

    
    

    const cancelChargingstation=(e)=>{
        // e.preventDefault();
        navigate('/login');
        console.log("new chargingstation not added. cancel");
    }

    

  return (
    <div>
        <div className='container' style={{height:'620px'}}>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'><u>Register Chargingstation</u>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span><button type="button" class="btn-close" data-bs-dismiss="modal"></button></span></h3>
                               
                            <div className='card-body'>
                                <Form className='form-control form-control-sm'  onSubmit={handleSubmit(onSubmit)} >
                                  <Form.Field>
                                    <div className='form-group mb-2'>
                                    <label for="StationName"><u style={{color:'black'}}>Station Name:</u><span class="text-danger">*</span></label>&emsp;&emsp;                                        <input
                                          name='name'
                                         placeholder='Enter Station Name'
                                         value={name}
                                         type="text"
                                         {...register("name",
                                             {
                                                 required: true,
                                                 pattern: "[a-zA-Z0-9\s]+"
                                             })}
                                         onChange ={(data)=>setName(data.target.value)}
                                        />&emsp;<span>{errors.name && <span style={{color:'red'}}>Please check the Name..!</span>} </span>                          
                                    </div>
                                    </Form.Field>
                                    <Form.Field>
                                    <div className='form-group mb-2'>
                                    <label for="Email"><u style={{color:'black'}}>Email:</u><span class="text-danger">*</span></label> &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;                                       <input 
                                         name='email'
                                         placeholder='Enter Station Email'
                                         value={email}
                                         type="email"
                                         {...register("email",
                                             {
                                                 required: true,
                                                 pattern: /^([a-zA-Z0-9_\#\$]+)@([a-zA-Z]+).([a-zA-Z]{2,3})$/
                                             })}
                                         onChange ={(data)=>setEmail(data.target.value)}
                                        />&emsp;<span>{errors.email && <span style={{color:'red'}}>Please check the Email pattern..!</span>} </span> 
                                    </div>
                                    </Form.Field>
                                    <FormField>
                                    <div className='form-group mb-2'>
                                    <label for="Password"><u style={{color:'black'}}>Password:</u><span class="text-danger">*</span></label>&emsp;&emsp;&emsp;&emsp;
                                        <input 
                                         name='password'
                                         placeholder='Enter station password'
                                         value={password}
                                         type="password"
                                         {...register("password", {
                                             required: true,
                                             pattern: "(?=.\d)(?=.[a-z])(?=.*[A-Z])"
                                         })}
                                         onChange ={(data)=>setPassword(data.target.value)}
                                        />&emsp;<span>{errors.password && <span style={{color:'red'}}>Password contain at least one number and &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;one uppercase and lowercase letter.</span>} </span> 
                                    </div>
                                    </FormField>
                                    <FormField>
                                    <div className='form-group mb-2'>
                                    <label for="MobileNo."><u style={{color:'black'}}>Mobile Number:</u><span class="text-danger">*</span></label>&emsp;&nbsp; 
                                        <input
                                         name='mobileno'
                                         placeholder='Enter Station Mobile '
                                         value={mobileNo}
                                         type="number"
                                         {...register("mobileNo", {
                                             required: true,
                                             pattern:/^([0-9]{10,10})$/
                                         })}
                                         onChange ={(data)=>setMobileno(data.target.value)}
                                        />&emsp;<span>{errors.mobileNo && <span style={{color:'red'}}>Please check Contains 10 digit only..!</span>} </span> 
                                    </div>
                                    </FormField>
                                    <FormField>
                                    <div className='form-group mb-2'>
                                    <label for="Location"><u style={{color:'black'}}>Location:</u><span class="text-danger">*</span></label>&emsp;&emsp;&emsp;&emsp;&nbsp; 
                                        <input
                                         name='location'
                                         placeholder='Enter Station Location'
                                         value={location}
                                         type="text"
                                         {...register("location", {
                                             required: true,
                                             pattern:"[a-zA-Z0-9\s]+"
                                         })}
                                         onChange ={(data)=>setLocation(data.target.value)}
                                        />&emsp;<span>{errors.location && <span style={{color:'red'}}>Please check Location Contains text only..!</span>} </span> 
                                    </div>
                                    </FormField>
                                    <FormField>
                                    <div className='form-group mb-2'>
                                        <label for="area"><u style={{color:'black'}}>Area:</u><span class="text-danger">*</span></label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        <input
                                         name='area'
                                         placeholder='Enter Station Area'
                                         value={area}
                                         type='text'
                                         {...register("area", {
                                            required: true,
                                            pattern:"[a-zA-Z0-9\s]+"
                                        })}
                                         onChange ={(data)=>setArea(data.target.value)}
                                        />&emsp;<span>{errors.area && <span style={{color:'red'}}>Please check the Area Contains text only..!</span>} </span> 
                                    </div>
                                    </FormField>
                                    <FormField>
                                    <div className='form-group mb-2'>
                                        <label for="city"><u style={{color:'black'}}>City:</u><span class="text-danger">*</span></label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; 
                                        <input 
                                         name='city'
                                         placeholder='Enter Station City'
                                         value={city}
                                         type='text'
                                         {...register("city", {
                                            required: true,
                                            pattern:"[a-zA-Z0-9\s]+"
                                        })}
                                         onChange ={(data)=>setCity(data.target.value)}
                                        />&emsp;<span>{errors.city && <span style={{color:'red'}}>Please check City Contains text only..!</span>} </span> 
                                    </div>
                                    </FormField>
                                    <FormField>
                                    <div className='form-group mb-2'>
                                    <label for="portId"><u style={{color:'black'}}>Port Id:</u><span class="text-danger">*</span></label>&emsp;&emsp;&emsp;&emsp;&emsp;
                                        <input 
                                         name='port'
                                         placeholder='Enter Port Id Number'
                                         value={portId}
                                         type="number"
                                         {...register("portId", {
                                            required: true,
                                            pattern:/^([1-3]{1,1})$/
                                        })}
                                         onChange ={(data)=>setPortid(data.target.value)}
                                         />&emsp;<span>{errors.portId && <span style={{color:'red'}}>Please check portId Contains 1 or 2 or 3..!</span>} </span> 
                                         </div>
                                    </FormField>
                                    <FormField>   
                                    <button className='btn btn-success' onClick={(data) =>onSubmit(data)}>Save</button>
                                    <button className='btn btn-danger' onClick={(e) =>cancelChargingstation(e)}style={{marginLeft:'10px'}}>Cancel</button>
                                    </FormField> 
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}


export default SignUpChargingstation;
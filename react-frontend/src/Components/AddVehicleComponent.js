import React,{useEffect, useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom';
import VehiclesService from '../Services/VehiclesService';
import { Link } from 'react-router-dom';

import { Form, Button, FormField } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

const AddVehicleComponent = () => {

    const {customerId} = useParams();
    const [vehicleNo,setVehicleno]=useState('')
    // const [customerid,setCustomerid]=useState('')
    const [model,setModel]=useState('')
    // const [porttype,setPorttype]=useState('')
    const [portId,setPortid]=useState('')
    const navigate =useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    


    const onSubmit = (data) => {
        console.log(data);   
    // const saveVehicle=(e)=>{
    //     e.preventDefault();
        const vehicle ={vehicleNo,customerId,model,
            portId}

            VehiclesService.addVehicle(vehicle).then((response)=>{
                console.log(response.data)
                navigate(`/vehicles/${customerId}`);
             }).catch(error =>{
                 console.log(error)
             })
            
            }
    

    const cancelVehicle=(e)=>{
        e.preventDefault();
        navigate('/vehicles');
        console.log("new vehicle not added cancel");
    }

   

  return (
    <div>
    <div className='container' style={{height:'620px'}}>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center'><u>Register Vehicle</u>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span><button type="button" class="btn-close" data-bs-dismiss="modal"></button></span></h3>
                     <div className='card-body'>
                        <Form className='form-control form-control-sm'  onSubmit={handleSubmit(onSubmit)} >
                            <Form.Field>   
                                <div className='form-group mb-2'>                                 
                                    <label for="VehicleNo"><u style={{color:'black'}}>Vehicle Number:</u><span class="text-danger">*</span></label>&emsp;&emsp;&emsp;&nbsp;                                  
                                        <input
                                               name='vehicleno'
                                               placeholder='Enter Vehicle Number'
                                               value={vehicleNo}
                                               type="text"
                                               {...register("vehicleno",
                                                {
                                                  required: true,
                                                  pattern: /^[A-Z]{2}[-][0-9]{1,2}[-][A-Z]{1,2}[-][0-9]{3,4}$/
                                                })
                                                }
                       
                                                onChange ={(data)=>setVehicleno(data.target.value)}
                                        />&emsp;<span>{errors.vehicleno && <span style={{color:'red'}}>Please check the Vehicle number..!</span>} </span>                          
                                </div>
                            </Form.Field>
                            {/* <FormField>
                                <div className='form-group mb-2'> 
                                     <label for="customerId"><u style={{color:'black'}}>CustomerId:</u><span class="text-danger">*</span></label>&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;                                       
                                        <input
                                            name='customerid'
                                            placeholder=' Customer Id'
                                            value={customerId}
                                            type="number"
                                            {...register("customerid",
                                            {
                                              required: true,
                                              pattern: /[a-zA-Z0-9\s]+/
                                            })
                                            }
                          
                                            // onChange ={(data)=>setCustomerId(data.target.value)}
                                        />&emsp;<span>{errors.customerid && <span style={{color:'red'}}>Please check the CustomerId..!</span>} </span>                          
                                </div>
                            </FormField> */}
                            <FormField>
                                <div className='form-group mb-2'>
                                    <label for="Model"><u style={{color:'black'}}>Model:</u><span class="text-danger">*</span></label>&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;                                       
                                        <input
                                         name='model'
                                         placeholder='Enter Vehicle Model'
                                         value={model}
                                         type="text"
                                         {...register("model",
                                          {
                                            required: true,
                                            pattern: /[a-zA-Z0-9\s]+/
                                          })
                                         }
                                         onChange ={(data)=>setModel(data.target.value)}
                                        />&emsp;<span>{errors.model&& <span style={{color:'red'}}>Please check the Model Number..!</span>} </span> 
                                </div>
                        </FormField>
                        <FormField>
                                <div className='form-group mb-2'>
                                <div>
                                    <table className='table table-striped '>
                                            <thead class="p-3 mb-2">
                                                <tr >
                                                <th>Port Type</th>
                                                <th>Select</th>
                                                </tr> 
                                            </thead>
                                            <tbody>
                                              <tr>   
                                                <td>Type 1</td>
                                                    <td>
                                                        <input type={'radio'} value={portId} onClick={(e)=>setPortid(1)}/>
                                                    </td>
                                                </tr>
                                                <tr>   
                                                <td>Type 2</td>
                                                    <td>
                                                        <input type={'radio'} value={portId} onClick={(e)=>setPortid(2)}/>
                                                    </td>
                                                </tr>
                                                <tr>   
                                                <td>Type 3</td>
                                                    <td>
                                                        <input type={'radio'} value={portId} onClick={(e)=>setPortid(3)}/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                        </FormField>
                        
                        <FormField>   
                            <button className='btn btn-success' onClick={(data) =>onSubmit(data)}>Save</button>
                            <button className='btn btn-danger' onClick={(e) =>cancelVehicle(e)}style={{marginLeft:'10px'}}>Cancel</button>
                        </FormField>                             
                    </Form>
                </div>
            </div>
        </div>
    </div>
 </div>
  )
}


export default AddVehicleComponent
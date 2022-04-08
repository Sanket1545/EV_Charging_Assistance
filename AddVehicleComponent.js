import React,{useEffect, useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom';
import VehiclesService from '../Services/VehiclesService';
import { Link } from 'react-router-dom';

const AddVehicleComponent = () => {

    const {customerId} = useParams();
    const [vehicleNo,setVehicleno]=useState('')
    // const [customerid,setCustomerid]=useState('')
    const [model,setModel]=useState('')
    // const [porttype,setPorttype]=useState('')
    const [portId,setPortid]=useState('')
    const navigate =useNavigate();
    
   
    const saveVehicle=(e)=>{
        e.preventDefault();
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
        <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Vehicle Registration</h3>
                            <div className='card-body'>
                                <form className='form-control form-control-sm'>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Vehicle Number :</label>
                                        <input type="text"
                                         name='vehicleno'
                                         className='form-control'
                                         placeholder='Enter Vehicle Number'
                                         value={vehicleNo}
                                         onChange ={(e)=>setVehicleno(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>CustomerId :</label>
                                        <input type="number"
                                         name='customerid'
                                         className='form-control'
                                         placeholder='customerId'
                                         value={customerId}
                                        //  onChange ={(e)=>setCustomerid(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Model :</label>
                                        <input type="text"
                                         name='model'
                                         className='form-control'
                                         placeholder='Enter Model Name'
                                         value={model}
                                         onChange ={(e)=>setModel(e.target.value)}
                                        />
                                    </div>
                                    {/* <div className='form-group mb-2'>
                                        <label className='form-label'>Port Type :</label>
                                        <input type="text"
                                         name='porttype'
                                         className='form-control'
                                         placeholder='Enter Port Type'
                                         value={porttype}
                                         onChange ={(e)=>setPorttype(e.target.value)}
                                        />
                                    </div> */}
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
                       
                                    <button className='btn btn-success' onClick={(e) =>saveVehicle(e)}>Submit</button>
                                    <button className='btn btn-danger' onClick={(e) =>cancelVehicle(e)}style={{marginLeft:'10px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default AddVehicleComponent
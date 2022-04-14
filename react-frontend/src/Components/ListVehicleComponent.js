import React,{useEffect, useState} from 'react'
import { Link,useParams } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import VehiclesService from '../Services/VehiclesService';

const ListVehicleComponent = () => {
    const [vehicles,setVehicles]=useState([])
    
    const {cid} = useParams()
   // const navigate =useNavigate();

    useEffect(() => {
         getAllVehicles();
        },[])
    
    
        const getAllVehicles =()=>{
          VehiclesService.getVehiclesByCustomerId(cid).then((Response)=>{
            setVehicles(Response.data)
            console.log(Response.data);
          }).catch(error =>{
            console.log(error);
          })
        }

    const deleteVehicle =(vehicleId) => {
        VehiclesService.deleteVehicle(vehicleId).then((response) =>{
            getAllVehicles();
    })
    }
  
    
  return (
    <div >
    <div className='container'>
       <h2 className='text-center'>Vehicles List</h2>
         <Link to ={`/add-vehicle/${cid}`} className='btn mb-2' style={{color:'white',fontFamily:'cursive',backgroundColor:'black  '}}>Add Vehicle</Link>
                <div className='row'>
                    <table className='table table-stripped table-bordered'>
                        <thead class="p-3 mb-2 text-dark"style={{color:'white',fontFamily:'cursive'}}>
                            <tr >
                            {/* <th>VehicleId</th> */}
                            <th>Vehicle Number</th>
                            <th>Model</th>
                            {/* <th>Port Type</th> */}
                            <th>Port Id</th>
                            {/* <th>Customer Id</th> */}
                            <th>Action</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                vehicles.map(
                                    vehicle =>
                                    <tr key ={vehicle.vehicleId}>
                                       {/* <td>{vehicle.vehicleId}</td>     */}
                                       <td>{vehicle.vehicleNo}</td>
                                       <td>{vehicle.model}</td>
                                       {/* <td>{vehicle.porttype}</td> */}
                                       <td>{vehicle.portId}</td>
                                       {/* <td>{vehicle.customerid.Customerid}</td> */}
                                    
                                       <td>
                                       {/* <Link to ={`/update-vehicle/${vehicle.vehicleId}`} className='btn btn-success mb-1'>Update</Link> */}
                                       <button className='btn btn-danger' onClick={() =>deleteVehicle(vehicle.vehicleId)}style={{marginLeft:'10px'}}>Delete</button>
                                       </td>
                                       
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>          
    </div>
  </div>  
  )
}

export default ListVehicleComponent;
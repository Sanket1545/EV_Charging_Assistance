import React,{useEffect, useState} from 'react'
import { Link,useParams } from 'react-router-dom';
import ChargingstationService from '../Services/ChargingstationService';



const ChargingstationList = () => {

    const [chargingstations,setChargingstations]=useState([])
    // const {customerId} = useParams();
    useEffect(() => {
      getAllChargingstations();
    },[])

    const getAllChargingstations = () => {
      ChargingstationService.getAllChargingstations().then((Response)=>{
        
        setChargingstations(Response.data)
        console.log(Response.data);
      }).catch(error =>{
        console.log(error);
      })
    }

    const deleteChargingstation = (stationId) => {
      ChargingstationService.deleteChargingstation(stationId).then((response) => {
        alert("Station Deleted.");
        getAllChargingstations();
      })
      
    }

    
    
  return (
    <div className='container'>
       <h2 className='text-center'>Charging Stations</h2>
         {/* <Link to ={"add-chargingstation"} className='btn btn-primary mb-2'>Add Chargingstation</Link> */}
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead class="p-3 mb-2 bg-dark text-light">
                            <tr >
                            <th>StationName</th>
                            <th>Address</th>
                            <th>Contact</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                chargingstations.map(
                                    chargingstation =>
                                    <tr key ={chargingstation.stationId}>   
                                       <td>{chargingstation.name}</td>
                                       <td>{chargingstation.location},{chargingstation.area},{chargingstation.city}</td>
                                       
                                       <td>{chargingstation.mobileNo}</td>
                                        {/* <Link to ={`/bookappointment/${customerId}/${chargingstation.stationId}`} className='btn btn-info mb-1'>Book Appointment</Link>  */}
                                        {/* <Link to ={`/update-chargingstation/${chargingstation.stationId}`} className='btn btn-success mb-1'style={{marginLeft:"10px"}}>Update</Link>
                                        <button className='btn btn-danger' onClick={() => deleteChargingstation(chargingstation.stationId)}
                                        style={{marginLeft:"10px"}}>Delete</button>
                                       </td> */}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>          
    </div>
  )
}

export default ChargingstationList
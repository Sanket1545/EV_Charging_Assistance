import React,{useEffect, useState} from 'react'
import AppointmentService from '../Services/AppointmentService';
import {useNavigate,useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import VehiclesService from '../Services/VehiclesService';



const BookAppointment = () => {

    const {customer} = useParams();
    const {station} = useParams();

    const [customerId, setcust] = useState(customer)
    const [stationId, setstation] = useState(station)
    const [date,setDate]=useState('')
    const [start,setStart]=useState('')
    const [end,setEnd]=useState('')
    const [checkStart, setcheckStart] = useState('')
    var curDate = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();
    // const [curTime, setcurTime] = useState('')
    // const [time, settime] = useState("")
    // var today = new Date();
    // settime(today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds());
    // const [customerId,setCustomerid]=useState('')
    // const [vehicleNo,setVehicleno]=useState('')
    // const [stationId,setStationid]=useState('')
    const [vehicleId,setVehicleid]=useState('')
    const [vehicles, setvehicles] = useState([])
    
    const navigate =useNavigate();
    //const {Stationid}=useParams();

    useEffect(() => {
        getAllVehicles();
      },[])
   
    const getAllVehicles = () =>{
        VehiclesService.getVehiclesByCustomerId(customerId).then((v) =>{
            if(v.data.vehicleId == 0)
            {
                alert("Please register your Vehicle first to Book Appointment.");
                navigate(`/chargingstations/${customerId}`);
            }
            else
            {
                setvehicles(v.data);
            console.log(vehicles);
            }
           
        }).catch(err =>{
            alert(err);
        })
    }

    

    
    const saveAppointment=(e)=>{
        e.preventDefault();
        
        

        // if(date < curDate)
        // {
        //     alert('Please select valid Date.');
        // }
        // else
         if((start >= time) || (start == ''))
        {
            alert(" Please select Valid Time slot.")
        }
        // else if(checkStart <= 0)
        // {
           
        // }
        else{
            const appointment ={date,start,end,customerId,
                stationId,vehicleId}
    
                // console.log(appointment);

                AppointmentService.checkAppointments(start,date).then((check)=>{
                    if(check.data == 1)
                    {
                        alert("This Time slot is already Booked.So please book another time slot.");
                    }
                    else
                    {
                        AppointmentService.createAppointment(appointment).then((response)=>{
                            console.log(response.data)
                            
                            navigate(`/appointments/${customerId}`);
                         }).catch(error =>{
                             console.log(error)
                         })
                    }
                })
                
                
        }
        
            }
    

    const cancelAppointment=(e)=>{
        e.preventDefault();
        // navigate('/add-appointment');
        // console.log("add new Appointment canceled");
    }


   console.log(time);
   console.log(curDate);

  return (
    <div>
        <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Book Appointment</h3>
                            <div className='card-body'>
                                <form className='form-control form-control-sm'>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Date:</label>
                                        <input type="date"
                                         name='date'
                                         className='form-control'
                                         placeholder='Enter Appointment Date'
                                         value={date}
                                         onChange ={(e)=>setDate(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Start Time :</label>
                                        <input type="time"
                                         name='start'
                                         className='form-control'
                                         placeholder='Enter Start time'
                                         value={start}
                                         onChange ={(e)=>setStart(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>End Time :</label>
                                        <input type="time"
                                         name='end'
                                         className='form-control'
                                         placeholder='hh:mm'
                                         value={end}
                                         onChange ={(e)=>setEnd(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Customer Id :</label>
                                        <input type="number"
                                         name='customerid'
                                         className='form-control'
                                         placeholder='{customerId}'
                                         value={customerId}
                                        //  onChange ={(e)=>setCustomerid(e.target.value)}
                                        />
                                    </div>
                                    {/* <div className='form-group mb-2'>
                                        <label className='form-label'>Vehicle Number :</label>
                                        <input type="text"
                                         name='vehicleno'
                                         className='form-control'
                                         placeholder='Enter Vehicle Number'
                                         value={vehicleId}
                                         onChange ={(e)=>setVehicleid(e.target.value)}
                                        />
                                    </div> */}
                                    <div>
                                    <table className='table table-striped table-bordered'>
                                            <thead class="p-3 mb-2 bg-dark text-light">
                                                <tr >
                                                <th>Vehicle</th>
                                                <th>Action</th>
                                                </tr> 
                                            </thead>
                                            <tbody>
                                                {
                                                    vehicles.map(
                                                        vehicle =>
                                                        <tr key ={vehicle.vehicleId}>   
                                                        <td>{vehicle.model}</td>
                                                        
                                                        
                                                        <td>
                                                            <input type={'radio'} value={vehicle.vehicleId} onClick={(e)=>setVehicleid(e.target.value)} 
                                                            />
                                                        </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>ChargeStation Id :</label>
                                        <input type="number"
                                         name='stationid'
                                         className='form-control'
                                         placeholder='{stationId}'
                                         value={stationId}
                                        //  onChange ={(e)=>setStationid(e.target.value)}
                                        />
                                    </div>
                                    {/* <div className='form-group mb-2'>
                                        <select name='Vehicles' onChange={(e)=>setVehicleno(e.target.value)}>
                                            {vehicles.map(vehicle =>
                                                <option value={vehicle.vehicleId}>{vehicle.model}</option>
                                                )
                                                }
                                        </select>
                                        
                                    </div> */}
                                   
                                    <button className='btn btn-success' onClick={(e) =>saveAppointment(e)}>Book</button>
                                    <button className='btn btn-danger' onClick={(e) =>cancelAppointment(e)}style={{marginLeft:'10px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default BookAppointment
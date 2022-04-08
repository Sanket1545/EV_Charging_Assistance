import React,{ useState,useEffect } from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'
import AppointmentService from '../Services/AppointmentService'
import ChargingstationService from '../Services/ChargingstationService'



const AppointmentList = () => {

    const {customerId} = useParams()
    const navigate = useNavigate()

    const [appointments, setappointments] = useState([])
    const [chargingstations,setChargingstations] = useState([])
    const [sId, setsId] = useState('')

    useEffect(()=>{
        getAppointments();
        // getChargingstation();
    },[]);

    const getAppointments=()=>{
        AppointmentService.getAppointmentByCustomerId(customerId).then((ap)=>{
            // setsId(ap.data.stationId);
            // console.log(ap.data.stationId);
            setappointments(ap.data);
            
            
            console.log(appointments);
            console.log(appointments.data.stationId);
            // console.log(ap.data.appointmentNo);
        })
    }

    const getChargingstation=()=>{
        ChargingstationService.getChargingstationById(sId).then((station)=>{
            setChargingstations(station.data);
            console.log(chargingstations);
        })
    }

    const deleteAppointment=(appointmentNo)=>{
        AppointmentService.deleteAppointment(appointmentNo).then(()=>{
            getAppointments();
           
        })
    }

  return (
    <div>
        <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead class="p-3 mb-2 bg-dark text-light">
                            <tr >
                            <th>Appointment Number</th>
                            <th>Charging Station Name</th>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            {/* <th>Vehicle</th> */}
                            <th>Action</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                appointments.map(
                                    appointment =>
                                    <tr key ={appointment.appointmentNo}> 
                                    <td>{appointment.appointmentNo}</td> 
                                        {/* {chargingstations.map(chargingstation=>{
                                            <td key={chargingstation.stationId}>{chargingstation.name}</td>
                                        })}  */}
                                       <td>{appointment.stationId}</td>
                                       <td>{appointment.date}</td>
                                       <td>{appointment.start}</td>
                                       <td>{appointment.end}</td>
                                       <td>
                                        {/* <Link to ={`/bookappointment/${customerId}/${chargingstation.stationId}`} className='btn btn-info mb-1'>Book Appointment</Link>  */}
                                        {/* <Link to ={`/update-appointment/${appointment.appointmentNo}`} className='btn btn-success mb-1'style={{marginLeft:"10px"}}>Change Time</Link> */}
                                        <button className='btn btn-danger' onClick={() => deleteAppointment(appointment.appointmentNo)}
                                        style={{marginLeft:"10px"}}>Cancel</button>
                                       </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>     
    </div>
  )
}

export default AppointmentList
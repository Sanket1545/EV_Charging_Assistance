import React,{ useState,useEffect } from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'
import AppointmentService from '../Services/AppointmentService'
import ChargingstationService from '../Services/ChargingstationService'



const StationAppointmentListComponent = () => {

    const {id} = useParams();
    const navigate = useNavigate()

    const [appointments, setappointments] = useState([])
    const [chargingstations,setChargingstations] = useState([])
    // const [sId, setsId] = useState('')

    useEffect(()=>{
        getAppointments();
        // getChargingstation();
    },[]);

    
    const getAppointments=()=>{
        AppointmentService.getAppointmentByStationId(id).then((ap)=>{
            // setsId(ap.data.stationId);
            // console.log(ap.data.stationId);
            setappointments(ap.data);
            
            
           
            // console.log(appointments.data.stationId);
            // console.log(ap.data.appointmentNo);
        })
    }


    const deleteAppointmentHandler=(appointmentNo)=>{
        AppointmentService.deleteAppointment(appointmentNo).then((e)=>{
            // e.preventDefault();
            alert("Appointment Deleted.");
            getAppointments();
           
        })
    }

     console.log(appointments);
  return (
    <div>
        <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead class="p-3 mb-2 bg-dark text-light">
                            <tr >
                            <th>Appointment Number</th>
                            {/* <th>Charging Station Name</th> */}
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
                                        appointment=>
                                        <tr key={appointment.appointmentNo}>
                                            <td>{appointment.appointmentNo}</td>
                                            <td>{appointment.date}</td>
                                            <td>{appointment.start}</td>
                                            <td>{appointment.end}</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={()=>deleteAppointmentHandler(appointment.appointmentNo)}
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

export default StationAppointmentListComponent
import React,{useState,useEffect} from 'react'
import AppointmentService from '../Services/AppointmentService'
import { useParams,useNavigate } from 'react-router-dom'

const UpdateAppointmentListByAId = () => {

    const {Id} = useParams()
    const navigate = useNavigate()
    const [date, setdate] = useState('')
    const [start, setstart] = useState('')
    const [end, setend] = useState('')
    const [customerid, setcustomerid] = useState('')
    const [vehicleid, setvehicleid] = useState('')
    const [stationid, setstationid] = useState('')

    useEffect(()=>{
        AppointmentService.getAppointmentById(Id).then((apmt)=>{
            console.log(apmt.data);
            setdate(apmt.data.date);
            setstart(apmt.data.start);
            setend(apmt.data.end);
            setcustomerid(apmt.data.customerid);
            setvehicleid(apmt.data.vehicleid);
            setstationid(apmt.data.stationid);
        })
    })

    const updateAppointment=()=>{

        const appointment = {
            date,start,end,customerid,vehicleid,stationid
        }
        AppointmentService.updateAppointment(Id,appointment).then(()=>{
            navigate(`/appointments/${Id}`);
        })
    }

    const cancelAppointment=(e)=>{
        e.preventDefault();
        navigate(`/appointments/${Id}`);
    }
  return (
    <div>
        <h3 style={{textAlign:'center'}}>Edit Appointment Time</h3>
        <div className='container'>
                    <div className='card-body'>
                                <form className='form-control form-control-sm'>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Date:</label>
                                        <input type="date"
                                         name='date'
                                         className='form-control'
                                         placeholder='Enter Appointment Date'
                                         value={date}
                                         onChange ={(e)=>setdate(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>Start Time :</label>
                                        <input type="time"
                                         name='start'
                                         className='form-control'
                                         placeholder='Enter Start time'
                                         value={start}
                                         onChange ={(e)=>setstart(e.target.value)}
                                        />
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label className='form-label'>End Time :</label>
                                        <input type="time"
                                         name='end'
                                         className='form-control'
                                         placeholder='hh:mm'
                                         value={end}
                                         onChange ={(e)=>setend(e.target.value)}
                                        />
                                    </div>
                                    {/* <button className='btn btn-success' onClick={(e) =>updateAppointment(e)}>Update</button> */}
                                    <button className='btn btn-danger' onClick={(e) =>cancelAppointment(e)}style={{marginLeft:'10px'}}>Cancel</button>
                                </form>
                            </div>
        </div>
    </div>
  )
}


export default UpdateAppointmentListByAId
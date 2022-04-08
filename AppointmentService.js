import axios from 'axios'

const APPOINTMENT_BASE_REST_API_URL ='http://localhost:8080';

class AppointmentService{

    getAllAppointments(Appointment){
        return axios.get(APPOINTMENT_BASE_REST_API_URL+'/appointments',Appointment);
    }
    createAppointment(Appointment){
        return axios.post(APPOINTMENT_BASE_REST_API_URL+'/'+'add-appointment',Appointment);
    }

    // getAppointmentById(appointmentNo){
    //     return axios.get(`${APPOINTMENT_BASE_REST_API_URL}/appointment/${appointmentNo}`);
    // }

    updateAppointment(appointmentNo, appointment){
        return axios.put(`${APPOINTMENT_BASE_REST_API_URL}/update-appointment/${appointmentNo}`,appointment);
    }

    deleteAppointment(appointmentNo){
        return axios.delete(`${APPOINTMENT_BASE_REST_API_URL}/delete-appointment/${appointmentNo}`);
    }

    getAppointmentByCustomerId(customerid){
        return axios.get(`${APPOINTMENT_BASE_REST_API_URL}/appointments/${customerid}`);
    }

    getAppointmentByStationId(id){
        return axios.get(`${APPOINTMENT_BASE_REST_API_URL}/appointment/${id}`);
    }

    checkAppointments(start,date){
        return axios.get(`${APPOINTMENT_BASE_REST_API_URL}/check-appointments/${start}/${date}`);
    }
}
export default new AppointmentService();
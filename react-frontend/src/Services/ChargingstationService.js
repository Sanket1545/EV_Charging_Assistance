import axios from 'axios'

const CHARGIGNGSTATION_BASE_REST_API_URL ='http://localhost:8080/api/v1';

class ChargingstationService{

    getAllChargingstations(){
        return axios.get(CHARGIGNGSTATION_BASE_REST_API_URL+'/chargingstations');
    }
    createChargingstation(Chargingstation){
        return axios.post(CHARGIGNGSTATION_BASE_REST_API_URL+'/add-chargingstation',Chargingstation);
    }

    getChargingstationById(stationid){
        return axios.get(`${CHARGIGNGSTATION_BASE_REST_API_URL}/chargingstations/${stationid}`);
    }

    getChargingstationByMail(email)
    {
        return axios.get(`${CHARGIGNGSTATION_BASE_REST_API_URL}/chargingstation/${email}`);
    }

    updateChargingstation(stationid,chargingstation){
        return axios.put(`${CHARGIGNGSTATION_BASE_REST_API_URL}/chargingstations/${stationid}`,chargingstation);
    }

    deleteChargingstation(stationid){
        return axios.delete(`${CHARGIGNGSTATION_BASE_REST_API_URL}/${stationid}`);
    }
}
export default new ChargingstationService();
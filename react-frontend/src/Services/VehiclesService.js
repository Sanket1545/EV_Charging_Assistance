import axios from 'axios';
import React from 'react';

const VEHICLE_BASE_REST_API_URL ='http://localhost:8080';

class VehiclesService {
    getAllVehicles()
    {
        return axios.get(VEHICLE_BASE_REST_API_URL+"/vehicles");
    }

    getVehiclesByCustomerId(customerId)
    {
        return axios.get(VEHICLE_BASE_REST_API_URL+"/vehicles/"+customerId);
    }

    deleteVehicle(vehicleId)
    {
        return axios.delete(VEHICLE_BASE_REST_API_URL+"/vehicles/"+vehicleId);
    }

    addVehicle(vehicle)
    {
        return axios.post(VEHICLE_BASE_REST_API_URL+"/add-vehicle",vehicle);
    }
}

export default new VehiclesService;
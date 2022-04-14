import axios from 'axios'

const Customer_BASE_REST_API_URL ='http://localhost:8080';

class CustomerService{

    getAllCustomers(Customer){
        return axios.get(Customer_BASE_REST_API_URL+'/customers',Customer);
    }
    createCustomer(Customer){
        return axios.post(Customer_BASE_REST_API_URL+'/'+'add-customer',Customer);
    }

    getCustomerById(Customerid){
        return axios.get(`${Customer_BASE_REST_API_URL}/customer/${Customerid}`);
    }

    updateCustomer(Customerid, customer){
        return axios.put(`${Customer_BASE_REST_API_URL}/update-customer/${Customerid}`,customer);
    }

    deleteCustomer(Customerid){
        return axios.delete(`${Customer_BASE_REST_API_URL}/customers/${Customerid}`);
    }

}
export default new CustomerService();
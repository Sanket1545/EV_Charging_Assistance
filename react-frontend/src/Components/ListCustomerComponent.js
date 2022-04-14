import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import CustomerService from '../Services/CustomerService';

const ListCustomerComponent = () => {
    const [customers,setCustomers]=useState([])
   // const navigate =useNavigate();

    useEffect(() => {
         getAllCustomers();
        },[])
    
    
        const getAllCustomers =()=>{
          CustomerService.getAllCustomers().then((Response)=>{
            setCustomers(Response.data)
            console.log(Response.data);
          }).catch(error =>{
            console.log(error);
          })
        }

    const deleteCustomer =(customerId)=>{
        CustomerService.deleteCustomer(customerId).then((response) =>{
            getAllCustomers();
    })
    }
    
  return (
    <div >
    <div className='container'>
       <h2 className='text-center'>Customers List</h2>
         <Link to ={`/add-customer`} className='btn mb-2' style={{color:'white',fontFamily:'cursive',backgroundColor:'black  '}}>Add Customer</Link>
                <div className='row'>
                    <table className='table table-stripped table-bordered'>
                        <thead class="p-3 mb-2 bg-dark text-light">
                            <tr >
                            <th>CustomerId</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>MobileNumber</th>
                            <th>Location</th>
                            <th>Area</th>
                            <th>City</th>
                            <th>Action</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                                customers.map(
                                    customer =>
                                    <tr key ={customer.customerId}>
                                       <td>{customer.customerId}</td>    
                                       <td>{customer.firstName}</td>
                                       <td>{customer.lastName}</td>
                                       <td>{customer.email}</td>
                                       <td>{customer.password}</td>
                                       <td>{customer.mobileNo}</td>
                                       <td>{customer.location}</td>
                                       <td>{customer.area}</td>
                                       <td>{customer.city}</td>

                                       <td>
                                       {/* <Link to ={`/update-customer/${customer.customerid}`} className='btn btn-success mb-1'>Update</Link> */}
                                       <button className='btn btn-danger' onClick={() =>deleteCustomer(customer.customerId)}style={{marginLeft:'10px'}}>Delete</button>
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

export default ListCustomerComponent;
package com.example.springbootbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbackend.exception.ResourceNotFoundException;
import com.example.springbootbackend.model.Chargingstation;
import com.example.springbootbackend.model.Customers;
import com.example.springbootbackend.repository.CustomerRepository;

@CrossOrigin
@RestController
public class CustomerController 
{
	@Autowired
	private CustomerRepository cRepo;
	
	@GetMapping("/customers")
	public List<Customers> getAllCustomers()
	{
		return cRepo.findAll();
	}
	
	@GetMapping("/customer/{customerid}")
	public ResponseEntity<Customers>getCustomerById(@PathVariable int customerid){
		Customers customer=cRepo.findById(customerid)
				.orElseThrow(() ->new ResourceNotFoundException("Customer Not Exist:"+customerid));
		return ResponseEntity.ok(customer);
	}
	
	
	@PostMapping("/add-customer")
	public Customers createCustomer(@RequestBody Customers customers)
	{
		return cRepo.save(customers);
	}
	
	@PutMapping("/update-customer/{customerid}")
	public ResponseEntity<Customers> updateCustomer(@PathVariable int customerid, @RequestBody Customers customers)
		
		{
		Customers updatedCustomer = cRepo.findById(customerid).
					orElseThrow(() -> new ResourceNotFoundException("Customer not exists with id: "+customerid));
			updatedCustomer.setFirstName(customers.getFirstName());
			updatedCustomer.setLastName(customers.getLastName());
			updatedCustomer.setPassword(customers.getPassword());
			updatedCustomer.setEmail(customers.getEmail());
			updatedCustomer.setMobileNo(customers.getMobileNo());
			updatedCustomer.setLocation(customers.getLocation());
			updatedCustomer.setArea(customers.getArea());
			updatedCustomer.setCity(customers.getCity());
			
				
			cRepo.save(updatedCustomer);
			return ResponseEntity.ok(updatedCustomer);
		}
	
	@DeleteMapping("/customers/{customerid}")
	public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable int customerid)
	{
		Customers customers = cRepo.findById(customerid).
				orElseThrow(() -> new ResourceNotFoundException("customer not exists with id: "+customerid));
		cRepo.delete(customers);
		return new ResponseEntity(HttpStatus.NO_CONTENT);
		
	}
}

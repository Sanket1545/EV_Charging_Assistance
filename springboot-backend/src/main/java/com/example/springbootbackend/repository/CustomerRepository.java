package com.example.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.springbootbackend.model.Customers;

public interface CustomerRepository extends JpaRepository<Customers, Integer>{

	@Query(value="select * from customers where email =?",nativeQuery = true )
	public Customers getCustomerName(String email);
	
	@Query(value="select * from customers where customerid =?",nativeQuery = true )
	public Customers getCustomer(int id);
}

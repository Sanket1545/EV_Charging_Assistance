package com.example.springbootbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.springbootbackend.model.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer>{

	@Query(value = "select * from vehicles where customerId=?",nativeQuery = true)
	List<Vehicle> getVehiclesByCustomerId(int customerId);

}

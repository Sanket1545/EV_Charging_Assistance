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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springbootbackend.exception.ResourceNotFoundException;
import com.example.springbootbackend.model.Chargingstation;
import com.example.springbootbackend.model.Vehicle;
import com.example.springbootbackend.repository.VehicleRepository;

@CrossOrigin("*")
@RestController
@RequestMapping
public class VehicleController 
{
	@Autowired
	private VehicleRepository vRepo;
	
	@GetMapping("/vehicles")
	public List<Vehicle> getAllVehicles()
	{
		return vRepo.findAll();
	}
	
	@PostMapping("/add-vehicle")
	public Vehicle addVehicle(@RequestBody Vehicle vehicle)
	{
		return vRepo.save(vehicle);
	}
	
	@PutMapping("/vehicles/{vehicleid}")
	public ResponseEntity<Vehicle> updateVehicle(@PathVariable int vehicleid, @RequestBody Vehicle vehicles)
	{
		Vehicle updateVehicle = vRepo.findById(vehicleid).orElseThrow(
				() -> new ResourceNotFoundException("Vehicle not exists with id "+vehicleid));
		updateVehicle.setVehicleNo(vehicles.getVehicleNo());
		updateVehicle.setModel(vehicles.getModel());
		updateVehicle.setPortId(vehicles.getPortId());
		updateVehicle.setCustomerId(vehicles.getCustomerId());
		
		vRepo.save(updateVehicle);
		return ResponseEntity.ok(updateVehicle);
	}
	
	@DeleteMapping("/vehicles/{vehicleid}")
	public ResponseEntity<HttpStatus> deleteVehicle(@PathVariable int vehicleid)
	{
		Vehicle vehicle = vRepo.findById(vehicleid).
				orElseThrow(() -> new ResourceNotFoundException("Vehicle not exists with id: "+vehicleid));
		vRepo.delete(vehicle);
		return new ResponseEntity(HttpStatus.NO_CONTENT);
		
	}
	
	@GetMapping("/vehicles/{customerId}")
	public List<Vehicle> getVehicleByCustomerId(@PathVariable int customerId)
	{
		return vRepo.getVehiclesByCustomerId(customerId);
	}
}

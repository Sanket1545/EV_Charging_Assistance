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
import com.example.springbootbackend.repository.ChargingstationRepository;
@CrossOrigin("*")
@RestController
@RequestMapping("api/v1")
public class ChargingstationController 
{
	@Autowired
	private ChargingstationRepository chargingstationRepository;
	

	
	//getAllChargingstation
	@GetMapping("/chargingstations")
	public List<Chargingstation> getAllChargingstations()
	{
		return chargingstationRepository.findAll();
	}
	
	//create chargingstation rest api
	@PostMapping("/add-chargingstation")
	public Chargingstation createChargingstation(@RequestBody Chargingstation chargingstation) {
		return chargingstationRepository.save(chargingstation);
	}
	
	//get chargingstation by id rest api
	@GetMapping("/chargingstations/{stationid}")
	public ResponseEntity<Chargingstation> getChargingstationById(@PathVariable int stationid)
	{
		Chargingstation chargingstations = chargingstationRepository.findById(stationid).
				orElseThrow(() -> new ResourceNotFoundException("Chargingstation not exists with id: "+stationid));
		return ResponseEntity.ok(chargingstations);
	}
	
	//build update chargingstation rest api
	@PutMapping("/chargingstations/{stationid}")
	public ResponseEntity<Chargingstation> updateChargingstation(@PathVariable int stationid, @RequestBody Chargingstation chargingstations)
	
	{
		Chargingstation updatedStation = chargingstationRepository.findById(stationid).
				orElseThrow(() -> new ResourceNotFoundException("Chargingstation not exists with id: "+stationid));
		updatedStation.setName(chargingstations.getName());
		updatedStation.setPassword(chargingstations.getPassword());
		updatedStation.setEmail(chargingstations.getEmail());
		updatedStation.setMobileNo(chargingstations.getMobileNo());
		updatedStation.setLocation(chargingstations.getLocation());
		updatedStation.setArea(chargingstations.getArea());
		updatedStation.setCity(chargingstations.getCity());
		updatedStation.setPortId(chargingstations.getPortId());
		
		chargingstationRepository.save(updatedStation);
		return ResponseEntity.ok(updatedStation);
	}
	
	//build delete chargingstation rest api
	@DeleteMapping("{stationid}")
	public ResponseEntity<HttpStatus> deleteChargingstation(@PathVariable int stationid)
	{
		Chargingstation chargingstations = chargingstationRepository.findById(stationid).
				orElseThrow(() -> new ResourceNotFoundException("Chargingstation not exists with id: "+stationid));
		chargingstationRepository.delete(chargingstations);
		return new ResponseEntity(HttpStatus.NO_CONTENT);
		
	}
	
	@GetMapping("/chargingstation/{email}")
	public ResponseEntity<Chargingstation> getChargingstationByEmail(@PathVariable String email)
	{
		Chargingstation chargingstations = chargingstationRepository.findByEmail(email);
		if(chargingstations != null)
		{
			return ResponseEntity.ok(chargingstations);
		}
		
		else
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	

}

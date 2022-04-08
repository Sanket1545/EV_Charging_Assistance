package com.example.springbootbackend.controller;


import java.sql.Date;
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
import com.example.springbootbackend.model.Appointments;
import com.example.springbootbackend.model.Vehicle;
import com.example.springbootbackend.repository.AppointmentRepository;

@CrossOrigin("*")
@RestController
@RequestMapping
public class AppointmentController
{
	@Autowired
	private AppointmentRepository aRepo;
	
	@GetMapping("/appointments")
	public List<Appointments> getAllAppointments()
	{
		return aRepo.findAll();
	}
	
	@PostMapping("/add-appointment")
	public Appointments addAppointment(@RequestBody Appointments appointment)
	{
		return aRepo.save(appointment);
	}
	
	@PutMapping("/update-appointment/{appointmentno}")
	public ResponseEntity<Appointments> updateAppointment(@PathVariable int appointmentno, @RequestBody Appointments	appointments)
	{
		Appointments updateAppoint = aRepo.findById(appointmentno).orElseThrow(
				() -> new ResourceNotFoundException("Appointment not exists with id "+appointmentno));
		updateAppoint.setDate(appointments.getDate());
		updateAppoint.setStart(appointments.getStart());
		updateAppoint.setEnd(appointments.getEnd());
		updateAppoint.setVehicleId(appointments.getVehicleId());
//		updateAppoint.setCustomerId(appointments.getCustomerId());
		updateAppoint.setStationId(appointments.getStationId());
		
		aRepo.save(updateAppoint);
		return ResponseEntity.ok(updateAppoint);
	}
	
	@DeleteMapping("/delete-appointment/{appointmentno}")
	public ResponseEntity<HttpStatus> deleteAppointment(@PathVariable int appointmentno)
	{
		Appointments appointments = aRepo.findById(appointmentno).
				orElseThrow(() -> new ResourceNotFoundException("Appointment not exists with id: "+appointmentno));
		aRepo.delete(appointments);
		return new ResponseEntity(HttpStatus.NO_CONTENT);
		
	}
	
	@GetMapping("/appointments/{customerId}")
	public List<Appointments> getAppointments(@PathVariable int customerId)
	{
		 return aRepo.getAppointments(customerId);
		
	}
	
	@GetMapping("/check-appointments/{start}/{date}")
	public int checkAppointment(@PathVariable String start,@PathVariable Date date)
	{
		Appointments apmt = aRepo.checkApointment(start,date);
		
		if(apmt != null)
			return 1;
		else
			return 0;
	}
	
	@GetMapping("/appointment/{stationid}")
	public ResponseEntity<Appointments> getAppointmentByStationId(@PathVariable int stationid)
	{
		Appointments apmt = aRepo.getAppointmentByStationId(stationid);
		if(apmt != null)
		{
			return ResponseEntity.ok(apmt);
		}
		
		else
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}

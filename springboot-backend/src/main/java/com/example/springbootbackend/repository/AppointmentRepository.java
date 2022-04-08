package com.example.springbootbackend.repository;


import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.springbootbackend.model.Appointments;

public interface AppointmentRepository  extends JpaRepository<Appointments, Integer>{

	@Query(value = "select * from appointments where customerId=? and date>=curdate() order by date",nativeQuery = true)
	List<Appointments> getAppointments(int customerId);

	
	@Query(value = "select * from appointments where start=? and date=?",nativeQuery = true)
	Appointments checkApointment(String start, Date date);


	@Query(value = "select * from appointments where stationid=?",nativeQuery = true)
	Appointments getAppointmentByStationId(int stationid);

//	@Query(value = "select * from appointments where customerId=?")
}

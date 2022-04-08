package com.example.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.springbootbackend.model.Chargingstation;

public interface ChargingstationRepository extends JpaRepository<Chargingstation, Integer>{

	@Query(value = "select * from powerstations where email=?",nativeQuery = true)
	Chargingstation findByEmail(String email);

}

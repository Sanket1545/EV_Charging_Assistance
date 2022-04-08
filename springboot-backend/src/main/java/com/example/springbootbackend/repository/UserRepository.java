package com.example.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.springbootbackend.model.Users;

public interface UserRepository extends JpaRepository<Users, Integer>{

	@Query(value = "select * from users where email=?",nativeQuery = true)
	Users getUser(String email);
}

package com.example.springbootbackend.services;

import com.example.springbootbackend.model.Users;

public interface UserService {

	Users authenticateUser(String email, String password);
	String registerUser(Users user);
}

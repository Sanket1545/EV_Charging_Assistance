package com.example.springbootbackend.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Required;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.springbootbackend.model.Customers;
import com.example.springbootbackend.model.Users;
import com.example.springbootbackend.model.request.loginrequest;
import com.example.springbootbackend.repository.CustomerRepository;
import com.example.springbootbackend.repository.UserRepository;
import com.example.springbootbackend.services.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository uRepo;
	
	@Autowired
	private CustomerRepository cRepo;
	
	public UserController() {
		
	}
	
//	@GetMapping("/login")
//	public String showLoginForm()
//	{
//		System.out.println("In show login form");
//		return "/user/login";
//	}
	
	@PostMapping("/login")
	public ResponseEntity processLoginForm(@RequestBody @Validated loginrequest request )
	{
		try 
		{
			Users user = userService.authenticateUser(request.getEmail(),request.getPassword());
			
			if(user != null)
			{
				return new ResponseEntity(user,HttpStatus.OK); 
			}
			else
			{
				return new ResponseEntity(HttpStatus.NOT_FOUND);
			}
			
		}
		catch (Exception e)
		{
			
			return new ResponseEntity(e,HttpStatus.BAD_REQUEST);
		}
		
	}
	
	@GetMapping("/login/{email}")
	public Customers getUsername(@PathVariable String email)
	{
		Customers customers = cRepo.getCustomerName(email);
		
		return customers;
	}
	
	@GetMapping("/{id}")
	public Customers getUser(@PathVariable int id)
	{
		Customers customers = cRepo.getCustomer(id);
		
		return customers;
	}
	
	@GetMapping("/get/{email}")
	public ResponseEntity<Users> getUserByMail(@PathVariable String email)
	{
		Users user = uRepo.getUser(email);
		
		if(user != null)
		{
			return ResponseEntity.ok(user);
		}
		
		else
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}

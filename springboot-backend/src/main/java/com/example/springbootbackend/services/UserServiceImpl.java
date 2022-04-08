package com.example.springbootbackend.services;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.springbootbackend.model.Users;

@Repository
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private EntityManager mgr;
	
	@Override
	public Users authenticateUser(String email, String password) {
		// TODO Auto-generated method stub
		String jpql = "select u from Users u where u.email= :em and u.password= :pa";
		
		return mgr.createQuery(jpql, Users.class).setParameter("em", email).setParameter("pa", password)
				.getSingleResult();
	}

	@Override
	public String registerUser(Users user) {
		// TODO Auto-generated method stub
		mgr.persist(user);
		return "User registered Successfully : ID "+user.getUserId();
	}

}

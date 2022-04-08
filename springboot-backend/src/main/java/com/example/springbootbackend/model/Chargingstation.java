package com.example.springbootbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "powerstations")
public class Chargingstation 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "stationid")
	private int stationId;
	@Column(name = "name")
	private String name;
	@Column (name = "email")
	private String email;
	@Column(name = "password")
	private String password;
	@Column(name = "mobileno")
	private String mobileNo;
	@Column(name = "location")
	private String location;
	@Column(name = "area")
	private String area;
	@Column(name = "city")
	private String city;
	@Column(name = "portid")
	private int portId;
	
	public Chargingstation() {
		super();
	}

	public Chargingstation(String name, String email, String password, String mobileNo, String location, String area,
			String city, int portId) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
		this.location = location;
		this.area = area;
		this.city = city;
		this.portId = portId;
	}

	public int getStationId() {
		return stationId;
	}

	public void setStationId(int stationId) {
		this.stationId = stationId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getPortId() {
		return portId;
	}

	public void setPortId(int portId) {
		this.portId = portId;
	}

	
	
	


}

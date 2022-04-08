package com.example.springbootbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name ="customers")
public class Customers {
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		@Column(name="customerid")
		private int customerId;
		@Column(name="email")
		private String email;
		@Column(name="password")
		private String password;
		@Column(name="firstname")
		private String firstName;
		@Column(name="lastname")
		private String lastName;
		@Column(name="mobileno")
		private String mobileNo;
		@Column(name="location")
		private String location;
		@Column(name="area")
		private String area;
		@Column(name="city")
		private String city;
		
		public int getCustomerId() {
			return customerId;
		}
		public void setCustomerId(int customerId) {
			this.customerId = customerId;
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
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
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
		public Customers(String email, String password, String firstName, String lastName, String mobileNo,
				String location, String area, String city) {
			super();
			this.email = email;
			this.password = password;
			this.firstName = firstName;
			this.lastName = lastName;
			this.mobileNo = mobileNo;
			this.location = location;
			this.area = area;
			this.city = city;
		}
		
		public Customers() {
			super();
			// TODO Auto-generated constructor stub
		}
		@Override
		public String toString() {
			return "Customers [customerId=" + customerId + ", email=" + email + ", password=" + password
					+ ", firstName=" + firstName + ", lastName=" + lastName + ", mobileNo=" + mobileNo + ", location="
					+ location + ", area=" + area + ", city=" + city + "]";
		}
		
}

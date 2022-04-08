package com.example.springbootbackend.model;


import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.apache.tomcat.jni.Time;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;


@Table(name = "appointments")
@Entity
public class Appointments {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "appointmentno")
	private int appointmentNo;
	@Column(name = "date")
	private Date date;
//	@JsonFormat(pattern = "HH:mm:ss")
//	@JsonDeserialize(using = SqlTimeDeserializer.class)
	@Column(name = "start")
	private String start;
//	@JsonFormat(pattern = "HH:mm:ss")
//	@JsonDeserialize(using = SqlTimeDeserializer.class)
	@Column(name = "end")
	private String end;
	@Column(name = "customerid")
	private int customerId;
	@Column(name = "vehicleid")
	private int vehicleId;
	@Column(name = "stationid")
	private int stationId;
	public int getAppointmentNo() {
		return appointmentNo;
	}
	public void setAppointmentNo(int appointmentNo) {
		this.appointmentNo = appointmentNo;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getStart() {
		return start;
	}
	public void setStart(String start) {
		this.start = start;
	}
	public String getEnd() {
		return end;
	}
	public void setEnd(String end) {
		this.end = end;
	}
	public int getCustomerId() {
		return customerId;
	}
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	public int getVehicleId() {
		return vehicleId;
	}
	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}
	public int getStationId() {
		return stationId;
	}
	public void setStationId(int stationId) {
		this.stationId = stationId;
	}
	
	
	
}

package com.example.springbootbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vehicles")
public class Vehicle
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "vehicleid")
	private int vehicleId;
	@Column(name = "vehicleno")
	private String vehicleNo;
	@Column(name = "model")
	private String model;
	
//	@OneToOne(mappedBy = "portid")
//	private Port port;
	@Column(name = "portid")
	private int portId;
	
//	@ManyToOne
//	@JoinColumn(name = "customerid")
	@Column(name = "customerid")
	private int customerId;

	public int getVehicleId() {
		return vehicleId;
	}

	public String getVehicleNo() {
		return vehicleNo;
	}

	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getPortId() {
		return portId;
	}

	public void setPortId(int portId) {
		this.portId = portId;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public void setVehicleId(int vehicleId) {
		this.vehicleId = vehicleId;
	}


	
	
}

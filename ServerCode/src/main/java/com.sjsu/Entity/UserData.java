package com.sjsu.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Users")
public class UserData {
	
	@Id
	private String email;
	private String firstName;
	private String lastName;
	private boolean userSignedIn;
	
	public UserData() {
	}
	
	public UserData(String email, String firstName, String lastName) {
		super();
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public boolean getUserStatus() {
		return userSignedIn;
	}

	public void setUserStatus(boolean userSignedIn) {
		this.userSignedIn = userSignedIn;
	}
	

}

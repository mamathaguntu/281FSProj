package com.sjsu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;

import com.sjsu.Entity.UserData;
import com.sjsu.repo.UserDataDao;

@RestController
@RequestMapping("/UserData")
@CrossOrigin(origins="http://localhost:3000")
public class UserDataController {
	
	 @Autowired
	 private UserDataDao dao;
	 
	 @PostMapping("/post/userData" )
	 public UserData addUser(@RequestBody UserData userData) {
		UserData data1 = dao.save(userData);
		return data1;		 
	 }
	 
	 @GetMapping("/getUsers/{id}")
	 public UserData getUser(@PathVariable String email) {
		 UserData dataa1 = dao.getOne(email );
		 return dataa1;	 
	 }
	 
	 @GetMapping("/getAllUsers")
	 public List<UserData> getAllUsers() {
		 List<UserData> dataa1 = dao.findAll();
		 return dataa1;	 
	 }
	 	 
	 @DeleteMapping("/deleteUser/{userID}")
	 public void removeUserById(@PathVariable("email") String email){
		 dao.deleteById(email);
	 }
	 
	 @PutMapping("/editUser/userData")
	 public void updateUser(@RequestBody UserData userData){ 
		 dao.save(userData);
	 }
	 
	 @GetMapping("/getUserStatus/{id}")
	 public boolean getUserStatus(@PathVariable String email) {
		 boolean userStatus = dao.getOne(email).getUserStatus();
		 return userStatus;	 
	 }
}

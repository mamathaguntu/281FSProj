package com.sjsu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sjsu.Entity.UserData;
import com.sjsu.repo.UserDataDao;

@RestController
@RequestMapping("/UserData")
public class UserDataController {
	
	 @Autowired
	 private UserDataDao dao;
	 
	 @PostMapping("/post/userData" )
	 public UserData addUser(@RequestBody UserData userData) {
		UserData data1 = dao.save(userData);
		return data1;		 
	 }
	 
	 @GetMapping("/getUsers/{id}")
	 public UserData getUser(@PathVariable int id) {
		 UserData dataa1 = dao.getOne(id);
		 return dataa1;	 
	 }
	 	 
	 @DeleteMapping("/deleteUser/{userID}")
	 public void removeUserById(@PathVariable("userID") int userID){
		 dao.deleteById(userID);
	 }
	 
	 @PutMapping("/editUser/userData")
	 public void updateUser(@RequestBody UserData userData){ 
		 dao.save(userData);
	 }
	 
}

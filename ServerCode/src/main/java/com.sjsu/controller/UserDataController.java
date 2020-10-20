package com.sjsu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
	 
	 
		/*
		 * @RequestMapping(value = "/{userID}", method = RequestMethod.GET) public
		 * UserData getUserById(@PathVariable("userID") int userID){ return
		 * user.getUserById(userID); }
		 * 
		 * @RequestMapping(value = "/{userID}", method = RequestMethod.DELETE) public
		 * void removeUserById(@PathVariable("userID") int userID){
		 * user.removeUserById(userID); }
		 * 
		 * @RequestMapping(method = RequestMethod.PUT, consumes =
		 * MediaType.APPLICATION_JSON_VALUE) public void updateUser(@RequestBody
		 * UserData userData){ user.updateUser(userData); }
		 * 
		 * @RequestMapping(method = RequestMethod.POST, consumes =
		 * MediaType.APPLICATION_JSON_VALUE) public void insertUser(@RequestBody
		 * UserData userData){ user.insertUser(userData); }
		 */
}

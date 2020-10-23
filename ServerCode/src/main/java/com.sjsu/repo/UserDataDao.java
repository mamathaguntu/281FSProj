package com.sjsu.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sjsu.Entity.UserData;

public interface UserDataDao extends JpaRepository<UserData, String > {

}

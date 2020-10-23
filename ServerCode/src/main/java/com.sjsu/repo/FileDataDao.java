package com.sjsu.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sjsu.Entity.FileData;

public interface FileDataDao extends JpaRepository<FileData, Integer >{

}

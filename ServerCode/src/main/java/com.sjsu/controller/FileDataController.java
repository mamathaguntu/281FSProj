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

import org.springframework.web.bind.annotation.CrossOrigin;
import com.sjsu.Entity.FileData;
import com.sjsu.repo.FileDataDao;
import java.util.List;

@RestController
@RequestMapping("/FileData")
@CrossOrigin(origins="*")
public class FileDataController {

	 @Autowired
	 private FileDataDao fda;
	 
	 @PostMapping("/post/fileData" )
	 public FileData addFile(@RequestBody FileData fileData) {
		 FileData data1 = fda.save(fileData);
		return data1;		 
	 }
	 
	 @GetMapping("/getFileByUserID/{userid}")
	 public FileData getFileByUserId(@PathVariable int userid) {
		 FileData dataa1 = fda.getOne(userid);
		 return dataa1;	 
	 }
	 
	 @GetMapping("/getAllFiles")
	 public List<FileData> getAllFiles() {
		 List<FileData> dataa1 = fda.findAll();
		 return dataa1;	 
	 }
	 	 
	 @DeleteMapping("/deleteFile/{fileID}")
	 public void removeFileById(@PathVariable("fileId") int fileId){
		 fda.deleteById(fileId);
	 }
	 
	 @PutMapping("/editFile/fileData")
	 public void updateFile(@RequestBody FileData fileData){ 
		 fda.save(fileData);
	 }	 
}

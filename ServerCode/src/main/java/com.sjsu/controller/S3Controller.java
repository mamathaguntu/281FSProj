package com.sjsu.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.sjsu.Service.S3Services;

@RestController
public class S3Controller {
	
	@Autowired
	private S3Services s3Services;
	
	@GetMapping("/listFiles")
	public List<String> listAllFiles(){
	  return s3Services.listFiles();
	}
	
	@GetMapping("/listFileDetails")
	public List<S3ObjectSummary> listFileDetails(){
	  return s3Services.listFileDetails();
	}
	
	@DeleteMapping("/deleteFile/{fileName}")
    public String deleteS3File(@PathVariable String fileName) {
      try {
        s3Services.deleteFile(fileName);  
      }catch(Exception e) {
        return "Unable to delete File -> FileName = " + fileName;
      }
      return "Successfully deleted -> FileName = " + fileName;
    }    
	
	@PostMapping("/uploadFile/{fileName}")
	 public String uploadFile(String fileName, String filePath) {
		try {
			s3Services.uploadFile(fileName, filePath);
		}
      	catch (Exception e) {
      		return "Unable to upload the file" + fileName;
		}
        return "File" + fileName + ", uploaded successfully";
    }
	
	@GetMapping("/downloadFile/{fileName}")
	 public String downloadFile(String fileName) {
		try {
			s3Services.downloadFile(fileName);
			}
     	catch (Exception e) {
     		return "Unable to download the file" + fileName;
		}
       return "File" + fileName + ", downloaded successfully";
   }
}

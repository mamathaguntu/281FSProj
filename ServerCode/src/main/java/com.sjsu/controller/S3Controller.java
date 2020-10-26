package com.sjsu.controller;


import java.io.File;
import java.util.List;

import org.apache.tomcat.util.http.fileupload.FileItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.sjsu.Service.S3Services;

@RestController
@CrossOrigin(origins="*")
public class S3Controller {
	
	@Autowired
	private S3Services s3Services;
	
	@GetMapping("/listFiles")
	public List<String> listAllFiles(){
	  return s3Services.listFiles();
	}
	
	@GetMapping("/GetFileByFileName/{fileName}")
	public boolean getFileByFileName(@PathVariable String fileName) {
		return s3Services.getFileByFileName(fileName);
	}
	
	@GetMapping("/listFileDetails")
	public List<S3ObjectSummary> listFileDetails(){
	  return s3Services.listFileDetails();
	}
	
	@GetMapping("/listMyFileDetails/{email}")
	public List<S3ObjectSummary> listMyFileDetails(@PathVariable String email){
	  return s3Services.listMyFileDetails(email);
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
	
	@PostMapping("/uploadFile")
	 public String uploadFile(@RequestParam("file") MultipartFile file) {
	
		String keyName = "";
		try {
			 keyName = file.getOriginalFilename();
			 
			s3Services.uploadFile(keyName, file);
		}
      	catch (Exception e) {
      		return "Unable to upload the file" + keyName;
		}
        return "File" + keyName + ", uploaded successfully";
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

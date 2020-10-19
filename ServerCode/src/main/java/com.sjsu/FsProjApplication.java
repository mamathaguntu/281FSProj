package com.sjsu;
import org.springframework.boot.SpringApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.sjsu.Service.S3Services;

@SpringBootApplication
public class FsProjApplication implements CommandLineRunner{
	  @Autowired
	  S3Services s3Services;
	  
	  @Value("${fspa.s3.uploadfile}")
	  private String uploadFilePath;
	  
	  @Value("${fspa.s3.key}")
	  private String downloadKey;
	  
	  public static void main(String[] args) {
		    SpringApplication.run(FsProjApplication.class, args);
		  }
		 
		  @Override
		  public void run(String... args) throws Exception {
		    System.out.println("---------------- START UPLOAD FILE ----------------");
		    s3Services.uploadFile("TestFile.txt", uploadFilePath);
		    System.out.println("---------------- START DOWNLOAD FILE ----------------");
		    s3Services.downloadFile(downloadKey);
		  }

}

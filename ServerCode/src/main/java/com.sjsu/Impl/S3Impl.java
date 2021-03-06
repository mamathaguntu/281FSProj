package com.sjsu.Impl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.ListObjectsRequest;
import com.amazonaws.services.s3.model.ListObjectsV2Request;
import com.amazonaws.services.s3.model.ListObjectsV2Result;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.sjsu.Service.S3Services;
import com.sjsu.Utility.utility;

@Service
public class S3Impl implements S3Services {
	private Logger logger = LoggerFactory.getLogger(S3Impl.class);

	@Autowired
	private AmazonS3 awsS3;

	@Value("${fspa.s3.bucket}")
	private String bucketName;

	@Value("${fspa.s3.key}")
	private String fileName;

	@Override
	public void downloadFile(String fileName) {
		try {
			System.out.println("Downloading an object");
			S3Object s3object = awsS3.getObject(new GetObjectRequest(bucketName, fileName));
			System.out.println("Content-Type: " + s3object.getObjectMetadata().getContentType());
			utility.displayText(s3object.getObjectContent());
			logger.info("===================== Import File - Done! =====================");

		} catch (AmazonServiceException ase) {
			logger.info("Exception details:");
			logger.info("Error Message:    " + ase.getMessage());
			logger.info("HTTP Status Code: " + ase.getStatusCode());
			logger.info("AWS Error Code:   " + ase.getErrorCode());
			logger.info("Error Type:       " + ase.getErrorType());
			logger.info("Request ID:       " + ase.getRequestId());
		} catch (AmazonClientException ace) {
			logger.info("Caught an AmazonClientException: ");
			logger.info("Error Message: " + ace.getMessage());
		} catch (IOException ioe) {
			logger.info("IOE Error Message: " + ioe.getMessage());
		}
	}
	
	
	@Override
	public void uploadFile(String fileName, MultipartFile file) throws IOException {
		
		try {
			
			ObjectMetadata data = new ObjectMetadata();
			data.setContentLength(file.getSize());
			
			awsS3.putObject(bucketName, fileName, file.getInputStream(), data);
			logger.info("===================== Upload File - Done! =====================");

		} catch (AmazonServiceException ase) {
			logger.info("Caught an AmazonServiceException from PUT requests, rejected reasons:");
			logger.info("Error Message:    " + ase.getMessage());
			logger.info("HTTP Status Code: " + ase.getStatusCode());
			logger.info("AWS Error Code:   " + ase.getErrorCode());
			logger.info("Error Type:       " + ase.getErrorType());
			logger.info("Request ID:       " + ase.getRequestId());
		} catch (AmazonClientException ace) {
			logger.info("Caught an AmazonClientException: ");
			logger.info("Error Message: " + ace.getMessage());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	@Override
	public boolean getFileByFileName(String fileName) {
		S3Object s3object = awsS3.getObject(new GetObjectRequest(bucketName, fileName));
		if (s3object != null)
			return true;
		return false;
	}
	@Override
	public List<S3ObjectSummary> listFileDetails() {

		ObjectListing s3BucketObjects = awsS3.listObjects(bucketName);
		List<S3ObjectSummary> summaries = s3BucketObjects.getObjectSummaries();
		return summaries;
	}
	
	@Override
	public List<S3ObjectSummary> listMyFileDetails(String email) {
		List<S3ObjectSummary> summaries_Res =  new ArrayList<>();
		ListObjectsRequest req = new ListObjectsRequest().withBucketName(bucketName).withPrefix(email+"_");
		ObjectListing objects = awsS3.listObjects(req);

		for (;;) {
		    List<S3ObjectSummary> summaries = objects.getObjectSummaries();
		    if (summaries.size() < 1) {
		      break;
		    }
		    summaries.forEach(s -> summaries_Res.add(s));
		    objects = awsS3.listNextBatchOfObjects(objects);
		}
		return summaries_Res;
	}

	@Override
	public List<String> listFiles() {

		List<String> keys = new ArrayList<>();

		ObjectListing s3BucketObjects = awsS3.listObjects(bucketName);

		while (true) {
			List<S3ObjectSummary> summaries = s3BucketObjects.getObjectSummaries();
			if (summaries.size() < 1) {
				break;
			}

			for (S3ObjectSummary item : summaries) {
				if (!item.getKey().endsWith("/"))
					keys.add(item.getKey());
			}

			s3BucketObjects = awsS3.listNextBatchOfObjects(s3BucketObjects);
		}

		return keys;
	}

	@Override
	public void deleteFile(String fileName) {
		try {
			awsS3.deleteObject(new DeleteObjectRequest(bucketName, fileName));
		} catch (AmazonServiceException ase) {
			logger.info("Exception details:");
			logger.info("Error Message:    " + ase.getMessage());
			logger.info("HTTP Status Code: " + ase.getStatusCode());
			logger.info("AWS Error Code:   " + ase.getErrorCode());
			logger.info("Error Type:       " + ase.getErrorType());
			logger.info("Request ID:       " + ase.getRequestId());
			throw ase;
		} catch (SdkClientException sce) {
			logger.info("Caught an SdkClientException: ");
			logger.info("Error Message: " + sce.getMessage());
			throw sce;
		}
	}
}

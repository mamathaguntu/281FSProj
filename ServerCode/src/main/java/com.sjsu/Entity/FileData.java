package com.sjsu.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "FileData")
public class FileData {
	
	@Id
	@GeneratedValue
	private int fileId;
	private String fileName;
	private String fileDescription;
	private String downloadUrl;
	private String fileCreatedTime;
	private String fileUpdatedTime;
	private int fileVersion;
	
	public FileData() {}
	
	public FileData(int fileId, 
					String fileName, 
					String fileDescription, 
					String downloadUrl, 
					String fileCreatedTime,
					String fileUpdatedTime, 
					int fileVersion) {
		super();
		this.fileId = fileId;
		this.fileName = fileName;
		this.fileDescription = fileDescription;
		this.downloadUrl = downloadUrl;
		this.fileCreatedTime = fileCreatedTime;
		this.fileUpdatedTime = fileUpdatedTime;
		this.fileVersion = fileVersion;
	}
	
	public int getFileId() {
		return fileId;
	}
	public void setFileId(int fileId) {
		this.fileId = fileId;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFileDescription() {
		return fileDescription;
	}
	public void setFileDescription(String fileDescription) {
		this.fileDescription = fileDescription;
	}
	public String getDownloadUrl() {
		return downloadUrl;
	}
	public void setDownloadUrl(String downloadUrl) {
		this.downloadUrl = downloadUrl;
	}
	public String getFileCreatedTime() {
		return fileCreatedTime;
	}
	public void setFileCreatedTime(String fileCreatedTime) {
		this.fileCreatedTime = fileCreatedTime;
	}
	public String getFileUpdatedTime() {
		return fileUpdatedTime;
	}
	public void setFileUpdatedTime(String fileUpdatedTime) {
		this.fileUpdatedTime = fileUpdatedTime;
	}
	public int getFileVersion() {
		return fileVersion;
	}
	public void setFileVersion(int fileVersion) {
		this.fileVersion = fileVersion;
	}
	
	
}

# 281FSProj

Please refer to Readme.docx for screenshots
FILE STORAGE 
By
MAMATHA GUNTU

ABSTRACT:
This project demonstrates a web application, where users can register and sign-In to upload files and perform other operations such as edit, delete and download.

Prerequisites:
•	Aws account 
•	Technical Details :
o	Front end: React (Visual studio code)
o	Back end: Spring boot (Spring Tool Suite)

GitHub link: https://github.com/mamathaguntu/281FSProj/

Website link: 
https://www.fs.mamatha-guntu.com
 

Demo screenshots:
Welcome page:


![image](https://user-images.githubusercontent.com/2658837/97472527-291a7f80-1907-11eb-88e1-527e61c21a51.png)

Click ‘Get started!’ and you will be redirected to Login Page 

![image](https://user-images.githubusercontent.com/2658837/97472878-8f9f9d80-1907-11eb-8b2e-48d3acdb2079.png)

 
Click ‘sign-up’ to register the account

![image](https://user-images.githubusercontent.com/2658837/97473059-c5448680-1907-11eb-8d8e-3e1cfc522afe.png)

 
Fill in the details and click submit 

![image](https://user-images.githubusercontent.com/2658837/97473227-fde46000-1907-11eb-80c2-60d14a0be464.png)


Click ok and the page will be redirected for code input

![image](https://user-images.githubusercontent.com/2658837/97474354-42bcc680-1909-11eb-9285-312e28ec2e82.png)

LOGIN

![image](https://user-images.githubusercontent.com/2658837/97474725-a2b36d00-1909-11eb-9f6e-9dbe8c5f5593.png)

User page 

![image](https://user-images.githubusercontent.com/2658837/97474822-c1b1ff00-1909-11eb-8943-0ed4cf7974ab.png)

Upload a file

![image](https://user-images.githubusercontent.com/2658837/97474906-d68e9280-1909-11eb-9a8e-c7046699682e.png)


Verify Uploaded file is displayed in the Grid

![image](https://user-images.githubusercontent.com/2658837/97475003-f0c87080-1909-11eb-8f77-b81deacb6eec.png)


Download the file

![image](https://user-images.githubusercontent.com/2658837/97475064-05a50400-190a-11eb-8f3a-199f9bde1ade.png)


Modify the file

![image](https://user-images.githubusercontent.com/2658837/97475167-25d4c300-190a-11eb-92c4-90db89f6261f.png)


Upload Modified contents file with the same name, else a new one will be created. This is to maintain version control for the file.

After update , Observe that the date and time is changed

![image](https://user-images.githubusercontent.com/2658837/97475332-5e749c80-190a-11eb-9144-1b1742bca671.png)


Click delete and you can see the file getting deleted 

![image](https://user-images.githubusercontent.com/2658837/97475420-79471100-190a-11eb-9cc0-933f629f8b51.png)


Log out of the account

![image](https://user-images.githubusercontent.com/2658837/97475494-8cf27780-190a-11eb-927b-faba1690c0de.png)


It will be redirected to the home page once , ok is clicked on the alert 

![image](https://user-images.githubusercontent.com/2658837/97475536-9d0a5700-190a-11eb-8dec-d4baedfe8560.png)


Click get started to get into admin account, select admin tab, and enter credentials

![image](https://user-images.githubusercontent.com/2658837/97475556-a3003800-190a-11eb-89f3-a9e046a3efaf.png)


View all the user details

![image](https://user-images.githubusercontent.com/2658837/97475572-a85d8280-190a-11eb-983b-04886f4282d4.png)

Click on the files tab and View all the files uploaded

![image](https://user-images.githubusercontent.com/2658837/97475595-aeebfa00-190a-11eb-9e2b-85fbc4d0f9ec.png)

Delete 

![image](https://user-images.githubusercontent.com/2658837/97475616-b4494480-190a-11eb-9f83-9437ccfce5c9.png)

Logout will take to the home page 


AWS Services and configuration 

•	Create R53 domain 
and create SSL certificate for the domain created

•	Classic load balancer 

•	Auto scaling group

•	S3 bucket with Replication for disaster recovery, Transfer acceleration, Lifecycle policy

•	Lambda for Post operation 

•	Cloudfront distribution to access the S3 files for download quickly

•	RDS- MYSQL  to maintain user data

•	RDS Multi AZ deployment

SNS for Deployed environment status 
 



Deployment steps:
•	Clone the github repo

•	npm install

•	maven clean 

•	maven install

•	verify .jar file is uploaded in target folder

•	create Elastic beanstalk web application with Java and upload the jar file 

•	Wait till the environment is created

Once the environment is ready, we can see the url with which we can access webapp 
Go to Configure -> environment -> software -> edit , and set the RDS properties and save

Create a simple routing policy record with our registered domain to use custom domain instead of beanstalk url  



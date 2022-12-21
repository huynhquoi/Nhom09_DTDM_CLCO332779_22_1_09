# **Nhóm 9 Môn Điện Toán Đám Mây lớp CLCO332779_22_1_09**


## **Tên thành viên:**

1. Bùi Quốc Định - 20110633
2. Huỳnh Văn Quới - 20110707

## **Tên đề tài: Xây dựng trang viết code online dành cho Java, C#, Python, C++**

## **Thực hiện đồ án**

### **Chuẩn bị dịch vụ điện toán đám mây**
* Ở đây sử dụng dịch vụ điện toán đám mây của AWS

1. Thực hiện chọn Amazon Machine Image (AMI)
![choose ami](https://user-images.githubusercontent.com/115452240/208946442-084918e2-7b41-4219-9c93-8a11dadb1dae.png)
<p align="center">
<img src="![choose ami](https://user-images.githubusercontent.com/115452240/208946442-084918e2-7b41-4219-9c93-8a11dadb1dae.png)"
     alt="Choose AMI"
     width="686" height="289">
</p>

2. Chọn cấu hình cho máy ảo
<p align="center">
<img src="![Choose setting](https://user-images.githubusercontent.com/115452240/208948024-44552e8d-98ce-4cd1-ad3d-5bd34be29639.png)"
     alt="Choose Setting"
     width="686" height="289">
</p>

3. Tạo khóa - Vockey 
<p align="center">
<img src="![Vockey](https://user-images.githubusercontent.com/115452240/208948696-fb961dbb-ff68-41df-b73d-e20464babef1.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

4. Setup Network Setting
* Cổng kết nối ở Port 80 (và 8000 để dự phòng), ở đây cổng mặc định là cổng kết nối ssh với port 22
<p align="center">
<img src="![Setup Network Setting 1](https://user-images.githubusercontent.com/115452240/208949391-47240ef9-3706-41fd-8f4d-c33288163146.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

<p align="center">
<img src="![Setup Network Setting 2](https://user-images.githubusercontent.com/115452240/208949421-2bd32ec3-22dc-47df-870b-c0315ac7598a.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

5. Khởi tạo máy ảo
<p align="center">
<img src="![Khoi Tao may ao](https://user-images.githubusercontent.com/115452240/208950611-1c93923e-5c6d-4f3b-9b21-09057e49b026.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

6. Khởi động và kết nối 
* Sau khi các bước khởi động của máy ảo hoàn thành, ta chọn vào máy ảo vừa tạo, nhấn connect và tiến hành thao tác với máy ảo.

<p align="center">
<img src="![PreRun](https://user-images.githubusercontent.com/115452240/208951038-b71740f2-b585-4328-ac9f-f11ce1aa6ae5.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

<p align="center">
<img src="![Run](https://user-images.githubusercontent.com/115452240/208951707-449c1392-ea02-41a0-a894-5bff737913b9.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

### Chuẩn bị Docker images
1. Docker Images sẵn có

+ Truy cập [Nhom 9 Docker Images](https://hub.docker.com/repository/docker/dinhbui1/dtdm8).
Đây là docker images được build sẵn dựa trên project nhóm đã thực hiện

2. Docker Images tùy chỉnh
+ Truy cập vào [Nhom 9 Code](https://github.com/huynhquoi/Nhom09_DTDM_CLCO332779_22_1_09).
+ Tại đây các bạn có thể clone code về và tùy chỉnh project theo mục đích sử dụng

<p align="center">
<img src="![code](https://user-images.githubusercontent.com/115452240/208954133-1ee07d04-c42c-48e9-9ff5-1d5ed128f91f.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

+ Dockerfile dùng để build docker images
+ index.html là file giao diện
+ index.js là file back-end thực thi complie các dòng code nhập vào

### Thực hiện đồ án
1. Mở giao diện EC2 sau khi connect
<p align="center">
<img src="![image](https://user-images.githubusercontent.com/115452240/208955644-6423f7a8-c749-4f63-806b-211dc831bd6d.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>
2. Chuẩn bị để chạy project
Copy từng dòng lệnh sau vào terminal để chạy và chuẩn bị cho việc chạy project
`sudo yum update -y`
`sudo yum install docker -y`
`sudo service docker start`
`sudo usermod -a -G docker ec2-user`
3. Pull Images từ DockerHub về trong máy ảo EC2.
- Sử dụng lệnh `docker pull dinhbui1/dtdm8:1.0` hoặc `docker pull <your_dockerHub_UserName>/<your_repo>:tag`

<p align="center">
<img src="![image](https://user-images.githubusercontent.com/115452240/208957729-fcbea6c6-9cb3-4983-8c41-278e4f084e3e.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

- Chạy lệnh `docker images` để xem các images đã pull về 
- Chạy docker images đã pull về bằng lệnh `docker run -dp 80:8000 <ten>:<tag>`

<p align="center">
<img src="![image](https://user-images.githubusercontent.com/115452240/208958392-93fec15f-f7ff-4c10-9f38-366feb680f90.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

6. Run Project
* Copy public address và chạy trên nền tảng trình duyệt bất kì

<p align="center">
<img src="![image](https://user-images.githubusercontent.com/115452240/208958591-522d2807-9e8a-4dcc-9237-56bc6ef0afc4.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

<p align="center">
<img src="![image](https://user-images.githubusercontent.com/115452240/208958828-a27f1cbe-d36e-4cb7-b5b0-df93e9084fa4.png)"
     alt="Choose Vockey"
     width="686" height="289">
</p>

## [THUYẾT TRÌNH - DEMO WEB PROJECT TRÊN EC2](https://drive.google.com/file/d/1rspZMU8k4a8VVCSO3f4rXDbgoAQuHPhw/view?usp=sharing)

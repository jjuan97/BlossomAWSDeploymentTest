# Blossom AWS Deployment Test

This repository contains a sample application to be deployed on AWS as part of a technical test for cloud engineers.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Running Locally](#running-locally)
- [Expected Output](#expected-output)
- [AWS Deployment](#aws-deployment)

## Introduction
The goal of this test is to demonstrate your ability to deploy an application using AWS services, ensuring security, scalability, and cost-efficiency.

## Prerequisites
Before running the application, ensure you have the following installed:
- Docker
- Docker Compose

## Running Locally
To run the application locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/homecu/BlossomAwsDeploymentTest.git
    cd BlossomAwsDeploymentTest
    ```

2. Build and start the application using Docker Compose:
    ```sh
    docker-compose up --build
    ```

3. The application should now be running locally. You can access it at `http://localhost:3000`.

## Expected Output
When the application is running successfully, you should see the following output:

1. Console output:
    ![image (17)](https://github.com/homecu/BlossomAwsDeploymentTest/assets/79993534/a940c9ee-dd7d-446f-9c95-36fc5c9a0943)
    ![image (18)](https://github.com/homecu/BlossomAwsDeploymentTest/assets/79993534/4d42f622-8d96-4f78-a79a-2bea40009c83)
    ![image (19)](https://github.com/homecu/BlossomAwsDeploymentTest/assets/79993534/2938dd68-6dfd-44f2-b33c-4b0b01201ef2)

### Application Running
  <img width="1196" alt="Screenshot 2024-05-27 at 12 31 30 PM" src="https://github.com/homecu/BlossomAwsDeploymentTest/assets/79993534/ec767d98-7cbd-494c-b98b-233b1e0dad77">

## AWS Deployment
For the AWS deployment, follow these guidelines:
1. Create the necessary AWS resources (e.g., ECS, EKS, or EC2 instances).
2. Ensure the deployment follows AWS best practices for security, scalability, and cost-efficiency.
3. Implement monitoring and logging using AWS CloudWatch or other relevant services.
4. Document your deployment process and any additional steps taken to secure and optimize the application.

---

If you have any questions or need further clarification, please contact the project maintainers. Good luck!

# GOGOPIX API

Simple API for GOGOPIX android mobile application

### Prerequisites

Node.js, pg, dotenv, body-parser

### Installing

Install packages within package.json using npm

```
npm install
```
Once dependencies are installed, type command below to initialize API on local machine
```
node server.js
```
API runs out of localhost:8000 so test requests accordingly 

### Security

Remember to create the .env file with appropriate security information provided from your AWS manager.  
The format is as follows:
```
AWS_USER = PLACE USER NAME HERE
AWS_HOST = PLACE DATABASE ENDPOINT HERE
AWS_DB = PLACE DATABASE NAME HERE
AWS_PASS = PLACE PASSWORD HERE
```

## Built With

* [Node.js](https://nodejs.org/en/) - Runtime Enviroment
* [express](https://expressjs.com/) - Web Framework Used
* [npm](https://www.npmjs.com/) - Dependency Management
* [AWS-RDS](https://aws.amazon.com/rds/) - Relational Database servicing




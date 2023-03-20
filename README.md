# Programming homework application
This repository was used as a homework and submitted before an interview

## Runbook
- prerequisite (npm, nodejs, mysql installation)

### To Run Project
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Architecture
- Three layered - Controller, Service, Repository

#### Controller: EmployeesController
##### APIs

- GET: /employees/{employee_id} <br/>
  : get information for a specific employee <br/>
  : Response: `GetEmployeeResponseType` json
<br/><br/>

- GET: /employees/jobHistory/{employee_id} <br/>   
  : get job history information of specific employee <br/>
  : Response: `GetJobHistoryResponseType` json
<br/><br/>

- GET: /departments/{department_id} <br/>
  : get department information and its location <br/>
  : Response: `GetDepartmentLocationResponseType` json
  <br/><br/>

- POST: /department/salary <br/> `body= {department_id: number, pertenage:number}` <br/>
  : Update the employees' salary that are in a specific department<br/>
  : Response: the employees' salary must be changed in DB
  <br/><br/>

- GET: /air/station <br/>
    : get station location and name that had bad air data <br/>
    : Response: `getAirStationsResponseType` json
    <br/><br/>


#### Services
##### 1) EmployeesService
EmployeesService is in charge of most of the managing system
<br/>
##### 2) AirDataService
AirDataService is in charge of getting air data: stations <br/>
<br/>
<br/>


#### Entities

this project uses Oracle HR Schema's dummy data
```
https://github.com/nomemory/hr-schema-mysql/blob/master/hr-schema-mysql.sql
```
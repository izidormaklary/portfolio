

## Portfolio

    The portfolio project. 
    

### Deployed version available!

[Click here to see it](https://izidor-maklary.herokuapp.com/)

### Goals:
* have a backend that serves api endpoints 
* api endpoints should lead to informations about the repos i want to showcase
* proper frontend that displays the data, in a nice and organical way.

### Plans
    
    Django backend (probably REST_framework) and React frontend,

1. backend:
   * user authentication
   * creating Project model
   * CRUD endpoint only for user
   * adding api app
   * creating api endpoints
   
2. frontend:
   * creating react app
   * adding script to move the build
   * working out components
   
   
## Current status:

#### Models: 

The only model is the Project model, has all the fields necessary to display some of my projects.

Fields: 
* name
* github_url
* host_url
* prev_image
* languages
* tags
* description

#### API:
   * endpoints from .../api:
      * .../project - browsable api, without admin account inaccessible, admin can add new objects to the database here
      * .../projects - only GET requests, returns a json of all projects (but limited fields) serialized data
      * .../tags - only GET requests, returns an array of all the tags in the database (once each)
      * .../projects/*tag_parameter* - only GET ... , filter objects that are tagged with the parameter, returns the object array.
      * .../project/*id_parameter* - only GET ... , get object with the id

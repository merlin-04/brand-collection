- git clone [GitHub Repository Link]
- cd [project-folder-name]
- npm install
- npm start
- node index.js
- Open Postman, run the request that is given in the routes, and give inputs as JSON, then send the request.
- Verify that all the requests are functioning as expected.


------------------------------------------------DB---------------------------------------------------------------
* Used MongoDB Atlas for creating DB. I have made a database with 3 collections: users, brands and products.
* I have added DBCONNECTIONSTRING in the .env file

 ------------------------------------------JWT TOKEN STRING-------------------------------------------------------
  * I have added jwtsecretkey inside the .env file

--------------------------------------------------CODE-------------------------------------------------------------
* Installed all packages required for the project such as express, cors,dotenv, mongoose,multer,jwtwebtoken
* Created models for the 3 collections we created in MongoDB Atlas inside a folder in the Model folder
* Created Controller folder for writing the logic to perform create, read, update, delete
* Created database folder for connecting the database.
* Created routes folder for defining routes for testing the functionalities.

  -------------------------------------------------MIDDLEWARES-------------------------------------------------------
  * I have used 2 middleware in the project, one for JWTToken and Multer
  * JWTToken used for authorization, it will generate at the time of login
  * Multer Middleware is used for managing file uploads in the project where we need to upload images

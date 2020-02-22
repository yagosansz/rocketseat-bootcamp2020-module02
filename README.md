<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

# rocketseat-bootcamp2020-module02
GoBarber Backend - Fundamental Concepts

# What is this project about?
This project is about practicing the basic concepts behind NodeJS that 
were learned during the second module of GoStack 10 - Bootcamp.

## How to run this project?
  - Install dependencies:
    - `yarn`
  - Start the back-end:
    - `yarn dev`

## Logbook
### Day 01 - 2020/02/21
#### Setting up the project structure

#### Docker Fundamentals
  * How does it work?
    - Creates isolated environments (containers)
      - Isolated environments contains tools/technologies that will not change/edit our server's behaviour
      - Installing/updating/removing becomes too cumbersome through the traditional way
    - Containers expose communication ports

  * Main Concepts
    - **Image**
      - It's a tool/technology (e.g.: MySQL, MongoDB) that can be placed inside a container
    - **Container**
    - It's an instance of an image
    - **Docker Registry**
      - Docker Hub
    - **Dockerfile**
      - 'recipe' to create your own customized docker image
  
#### Configuring Docker
  * Creates an instance of PostgreSQL named postgresdb.
  ```docker
  docker run --name postgresdb -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
  ```
  * Lists active container
  ```docker
  docker ps
  ```
  * Stops the container
  ```docker
  docker stop postgresdb
  ```
  * Lists all containers
  ```docker
  docker ps -a
  ```
  * Stars a container 
  ```docker
  docker start postgresdb
  ```
  * Displays container logs
  ```docker
  docker logs postgresdb
  ```

#### Sequelize & MVC
  * ORM (Object Relational Mapper): way of abstracting a database
    - Changes the way the application communicates with the database
  * Tables are now represented by Models
  * Manipulate Data
    - No SQL (most of the time)
    - Only JavaScript code

    ```sql
    SELECT *
      FROM users 
      WHERE email="user@domain.com" 
      LIMIT 1
    ```

    ```javascript
    User.findOne({
      where: {
        email: "user@domain.com"
      }
    })
    ```
  * Migrations
    * Version control for databases
      - It's a way of maintaining the database updated
    * Each file contains instructions to create, edit, or delete tables or columns
    * Each file is a migration and migrations are ordered by date
    * What is a 'rollback'?
      - When you start a migration and something goes wrong you can perform a rollback, make changes to the table and start the migration again
      - When a migration is completed, it cannot be edited. Any required changes must be done through a new migration.
    * Every migration is specific to a table!

  * Seeds
    - Populate the database with mock data for development
    - Used frequently to create data for testing
    - Executable only through code
    - Should never be used for production
  
  * MVC Architecture
    * **Model**
      - Models are responsible for storing database abstractions
      - They are used to manipulate the data contained in the database
      - They have no responsability over our application's business rules
    * **Controller**
      - Controllers are the starting point of our application's requests
      - Routes are usually associated with a method from the controller
      - It's possible to include most of the application's business rules in the controllers
        - As the applications grows, business rules can be detached from the controllers
    * **View**
      - Views are what is being displayed to the client
      - In applications that don't use the REST API standard (JSON), that could be HTML

  * More about Controllers
    - They are represented by Classes
    - Always return JSON
    - It will not invoke another controller/method
    - It should only contain 5 methods (index, show, store, edit, delete)

#### ESLint, Prettier & EditorConfig
  - Tools that will maintaing the code standard

  * ESLint
    - It will perform the 'linting' of the code.
    - Verifies if desired standards are being followed
    ```
      yarn eslint --init // Creates the configuration file
    ```
  
  * Prettier
    - e.g.: Checks the sizes of lines of code
    ```
      yarn eslint --fix src --etx .js
    ```

  * EditorConfig
    - It will help maintaining the same code standards/styles throughout different editors

#### User Migration
  * Creates the migration file for the users table
  ```
    yarn sequelize migration:create --name=create-users
  ```
  * Performs the migration
  ```
    yarn sequelize db:migrate
  ```
  * Undo the last migration
  ```
    yarn sequelize db:migrate:undo
  ```
  * Undo all migrations
  ```
    yarn sequelize db:migrate:undo:all
  ```
### Day 02 - 2020/02/22
## How to

- Setup configs
  - create a file called `.env` in the root directory
  - copy the content of `.env.development` file and paste it inside `.env` file you created
- Run the server
  - run `npm install` in your terminal from the root directory of the project.
  - run `npm run start` to start the server
- Test the endpoint
  - You can use postman or any other rest api tools
  - create a new request with the following:
    - method: `POST`
    - url: `127.0.0.1:3000`
    - body: in raw json
    ```typescript
    {
      "firstname": "Moungi",
      "lastname": "bawendi",
      "category": "chemistry",
      "year": 2023
    }
    ```

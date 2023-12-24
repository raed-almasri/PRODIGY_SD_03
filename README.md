# Simple Contact Management System

## About

🔵🟢🔵 Welcome to Prodigy Infotech's Task-03 website! 🟢🔵🟢

At Prodigy Infotech, we aim to deliver excellence through our projects. Task-03 focuses on implementing a Simple Contact Management System to make managing your contacts smooth and hassle-free.

Our proposed program will allow users to seamlessly store and manage contact information. You can easily add new contacts by entering their name, phone number, and email address. The program also provides options to view your contact list, edit existing contacts, and delete contacts if needed. Your valuable contacts can be stored in memory or in a file for persistent storage, ensuring that you never lose important information.

## Features

Features of the Contact Management System include:

1. Adding new contacts by entering their name, phone number, and email address.
2. Displaying the contact list.
3. Editing existing contacts.
4. Deleting contacts when needed.
5. Storing contacts in memory or in a file for persistent storage.

## Endpoints

The system provides several endpoints for managing different aspects of the farm. Here are some of them:

-   Login: `http://localhost:3001/auth/login`
-   SignUp: `http://localhost:3001/auth/signup`
-   create contact: `http://localhost:3001/contact`
-   update contact: `http://localhost:3001/contact/5e6d93a7-82ff-4402-a0d5-e6a0237a5fca` With `PUT` method
-   delete contact: `http://localhost:3001/contact/5e6d93a7-82ff-4402-a0d5-e6a0237a5fca` With `Delete` method
-   get All contact: `http://localhost:3001/contact`

## Installation

1. Clone the repo
2. Open Terminal, and write: `npm i` after that create a `.env` file in the root directory
3. Add environment variables:
    - `PORT`: the port number that you want to start the api on
    - `USER`: for login to database connection
    - `PASSWORD`: password of user for database connection
    - `HOST`: like `localHost`
    - `DATABASE`: name of database
    - `DIALECT`: is "MYSQL"
    - `PORT_DB`: port for connection with database mysql
    - `CHARSET`: = "utf8mb4"
    - `COLLATE`: = "utf8mb4_general_ci"
    - `SECRET_KEY`: the private key to generate tokens for users
    - `JWT_EXPIRES_IN`: to generate a key for expires like 90d
4. add collection of postman in you'r Workspace

## Usage

In this API, there are the following endpoints:

(Continue with the rest of the usage instructions)

## Authentication

For the authentication, I used JSON Web Token (JWT), Bearer Token. When you log in or register an account, you will get a token in the response header "authorization". Use the same header to send the token with your requests for the notes.

# Storage

    I am using a JSON file to store all user data and their contacts.
    You can find that in `json/users.json`

## Contact :

Hi, I'm Raed Al Masri, a programmer Backend Developer. You can find me on:

-   `LinkedIn`: https://www.linkedin.com/in/raed-al-masri/
-   `Instagram`: https://www.instagram.com/raed.almasri.tech/
-   `Telegram`: https://t.me/RAED_AL_Masri
-   `Github`: https://github.com/raedAlmasriIt

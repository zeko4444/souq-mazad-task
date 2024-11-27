# souq-mazad-task

This is a simple Node.js application that provides APIs to fetch all products and get a specific product by its ID.

## Features

- Fetch all products with a single API call.
- Retrieve a specific product using its unique ID.

## Requirements

- Node.js
- npm

## Dployment

I Deploy this app on vercel

- Api to get all products (https://souq-mazad-task.vercel.app/e-commerce/app/products)
- Api to get specific product (https://souq-mazad-task.vercel.app/e-commerce/app/products/:id)

## Packages Used

This project uses the following packages:

### Dependencies

- cloudinary : Used to manage and store images in the Cloudinary cloud storage.
- dotenv : Enables loading environment variables from a .env file.
- express : A minimal and flexible Node.js web application framework for handling HTTP requests.
- express-async-handler : A middleware to simplify error handling in asynchronous routes.
- mongoose : An ODM (Object Data Modeling) library for MongoDB and Node.js, providing schema-based data modeling.
- multer : A middleware for handling multipart/form-data, primarily for file uploads.

### Dev Dependencies

- @vercel/node : A helper for deploying Node.js functions on the Vercel platform.
- nodemon : A utility that monitors for changes in the source code and automatically restarts the server during development.

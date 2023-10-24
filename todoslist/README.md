# Simple Todos App

Simple Todos is a web application for managing your todo list. It allows you to create, update, edit and delete tasks, as well as filter them based on their completion status. This README provides an overview of the project structure, components, and how to run the app locally.

## Table of Contents
- [Project Structure](#project-structure)
- [Components](#components)
- [Running the App](#running-the-app)

## Project Structure

The project is organized into several components, each with its own purpose. Here's an overview of the project structure:

- `App.js`: The main component and entry point of the this application. It manages the state of the to-do list, handles data fetching, and filters tasks based on the selected tab.

- `FormContainer.js`: This component is responsible for adding new to-do items. It includes input fields for the title and description, and a "Add" button to create a new to-do item. It communicates with the API to add new tasks.

- `TabItem.js`: This component represents the tabs for filtering todo items. Users can switch between "ALL," "PENDING," and "COMPLETED" tabs to view tasks based on their completion status.

- `TodoItem.js`: This component renders individual todo items. It displays the task title, description, creation date, and provides options to edit or delete the task.

- `EditTodo.js`: This component allows users to edit existing to-do items. It opens a popup that enables users to modify the title, description, and completion status of a task. It communicates with the API to update tasks.

- `DeleteTodo.js`: This component provides a button to delete a specific todo item. It communicates with the API to delete tasks.

- `styledComponent.js`: This file contains styled components used for styling input fields and buttons.

## Components

Details of Each components and it's uses:

- `App` it manages the state, fetches data, and filters tasks based on the selected tab.
- `FormContainer` handles the creation of new to-do items.
- `TabItem` displays the active and filter tabs for tasks.
- `TodoItem` renders individual todo items.
- `EditTodo` to edit existing tasks.
- `DeleteTodo` to delete tasks.

## Running the App

To run the Simple Todos app locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url> 
2. Navigate to the project directory:
    ```bash
    cd todoslist 
3. Install the required dependencies:
    ```bash
    npm install 
4.Start the development server:
    ``` bash
    npm start 

Open your web browser and access the app at http://localhost:3000.

You should now have the Simple Todos app running locally. You can add, edit, and delete to-do items, as well as filter tasks based on their completion status using the provided tabs. The app communicates with a remote API to fetch and update task data.


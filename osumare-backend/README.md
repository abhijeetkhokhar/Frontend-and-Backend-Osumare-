# Task Management API

A simple RESTful API built with Node.js and Express.js that manages a collection of tasks (to-do items). The API allows users to perform basic CRUD (Create, Read, Update, Delete) operations on tasks.

## Features

- Create, read, update, and delete tasks
- In-memory data storage
- Input validation
- Error handling
- RESTful architecture

## API Endpoints

| Method | Endpoint      | Description                 |
|--------|---------------|-----------------------------|
| GET    | /tasks        | Retrieve all tasks          |
| GET    | /tasks/:id    | Retrieve a task by ID       |
| POST   | /tasks        | Create a new task           |
| PUT    | /tasks/:id    | Update a task by ID         |
| DELETE | /tasks/:id    | Delete a task by ID         |

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the server:
   ```
   npm start
   ```
   
   For development with auto-reload:
   ```
   npm run dev
   ```

## API Documentation

### GET /tasks

Returns a list of all tasks.

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "title": "Complete project",
      "description": "Finish the Node.js project",
      "completed": false,
      "createdAt": "2025-05-09T07:19:10.000Z"
    },
    {
      "id": 2,
      "title": "Learn GraphQL",
      "description": "Study GraphQL basics",
      "completed": true,
      "createdAt": "2025-05-09T07:20:10.000Z"
    }
  ]
}
```

### GET /tasks/:id

Returns a specific task by ID.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Complete project",
    "description": "Finish the Node.js project",
    "completed": false,
    "createdAt": "2025-05-09T07:19:10.000Z"
  }
}
```

### POST /tasks

Creates a new task.

**Request Body:**
```json
{
  "title": "Learn Docker",
  "description": "Study Docker fundamentals",
  "completed": false
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "title": "Learn Docker",
    "description": "Study Docker fundamentals",
    "completed": false,
    "createdAt": "2025-05-09T07:25:10.000Z"
  }
}
```

### PUT /tasks/:id

Updates an existing task.

**Request Body:**
```json
{
  "title": "Learn Docker",
  "description": "Study Docker fundamentals and Kubernetes",
  "completed": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "title": "Learn Docker",
    "description": "Study Docker fundamentals and Kubernetes",
    "completed": true,
    "createdAt": "2025-05-09T07:25:10.000Z",
    "updatedAt": "2025-05-09T07:30:10.000Z"
  }
}
```

### DELETE /tasks/:id

Deletes a task.

**Response:**
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

## Error Handling

The API returns appropriate status codes and error messages:

- 400 Bad Request: Invalid input data
- 404 Not Found: Resource not found
- 500 Internal Server Error: Server-side error

## Testing the API

You can test the API using tools like Postman, curl, or any HTTP client.

### Example curl commands:

#### Get all tasks
```bash
curl -X GET http://localhost:3000/tasks
```

#### Get a specific task
```bash
curl -X GET http://localhost:3000/tasks/1
```

#### Create a new task
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn TypeScript","description":"Study TypeScript basics"}'
```

#### Update a task
```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Complete project","description":"Finish the Node.js project","completed":true}'
```

#### Delete a task
```bash
curl -X DELETE http://localhost:3000/tasks/1
```

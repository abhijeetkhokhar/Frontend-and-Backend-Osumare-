# Osumare Digital Marketing Agency - Full Stack Project

This repository contains a full-stack web application for Osumare Digital Marketing Agency, consisting of a React-based landing page frontend and a Node.js/Express.js task management API backend.

## Project Structure

The project is organized into two main directories:

- `osumare-landing-page/`: Frontend React application built with Vite
- `osumare-backend/`: Backend Node.js/Express.js API for task management

## Frontend (Landing Page)

### Features

- Modern, responsive landing page for a digital marketing agency
- Built with React and Vite for optimal performance
- Component-based architecture for maintainability
- Sections include: Hero, Features, Services, Testimonials, and Contact

### Technologies Used

- React.js
- Vite
- CSS
- ESLint

### Getting Started

```bash
# Navigate to the frontend directory
cd osumare-landing-page

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Backend (Task Management API)

### Features

- RESTful API for task management
- CRUD operations (Create, Read, Update, Delete)
- In-memory data storage
- Input validation and error handling

### API Endpoints

| Method | Endpoint      | Description                 |
|--------|---------------|-----------------------------|  
| GET    | /tasks        | Retrieve all tasks          |
| GET    | /tasks/:id    | Retrieve a task by ID       |
| POST   | /tasks        | Create a new task           |
| PUT    | /tasks/:id    | Update a task by ID         |
| DELETE | /tasks/:id    | Delete a task by ID         |

### Technologies Used

- Node.js
- Express.js
- Nodemon (for development)

### Getting Started

```bash
# Navigate to the backend directory
cd osumare-backend

# Install dependencies
npm install

# Start server
npm start

# Start development server with auto-reload
npm run dev
```

## Running the Complete Application

To run both frontend and backend simultaneously, you'll need to open two terminal windows:

```bash
# Terminal 1 - Start the backend
cd osumare-backend
npm run dev

# Terminal 2 - Start the frontend
cd osumare-landing-page
npm run dev
```

## Testing the API

You can test the API using tools like Postman, curl, or any HTTP client.

### Example curl commands:

#### Get all tasks
```bash
curl -X GET http://localhost:3000/tasks
```

#### Create a new task
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn TypeScript","description":"Study TypeScript basics"}'
```

## License

MIT

## Contact

For any inquiries, please reach out to Abhijeet Khokhar.

## GitHub Repository

[https://github.com/abhijeetkhokhar/Frontend-and-Backend-Osumare-](https://github.com/abhijeetkhokhar/Frontend-and-Backend-Osumare-)

# Revniuk_Svitlana_ArtStore_Capstone
CP 325.9: Capstone. Per Scholas Bootcamp projects
Project Structure

Notes
  !!! INSTALL 
  npm install react react-dom react-router-dom axios
      install axios 
      install bcryptjs jsonwebtoken
      concurrently
  
      
      The API used is https://www.artpi.co/how-it-works
art-store/
  client/         # React frontend
    src/
      components/    # Reusable UI components (artwork display, forms, etc.)
      pages/         # Main views (homepage, gallery, artist profile, etc.)
      utils/         # Helper functions
      api/           # API calls to the backend
      styles/        # CSS or styling setup
      App.js         # Root component
      index.js       # React app entry point   
    public/
      index.html     # Base HTML template
  server/         # Node/Express backend
    config/        # Configurations (database connection, etc.)
    models/        # Data models (artwork, artist, order)
    routes/        # API routes
    controllers/   # Logic to handle requests 
    middleware/    # Authentication, error handling, etc.
    app.js         # Server entry point 
  .gitignore      
  README.md       # Project description
  package.json    # Project dependencies (both client and server)

  
      
This code creates a simple RESTful API for managing artworks. It includes endpoints for getting all artworks (GET /artworks), creating a new artwork (POST /artworks), getting a specific artwork by ID (GET /artworks/:id), updating an artwork by ID (PUT /artworks/:id), and deleting an artwork by ID (DELETE /artworks/:id).

client: Contains React frontend.

components: Presentational UI components for displaying artwork, artist details, shopping cart, etc.
pages: Structure the higher-level views of the application.
utils: Holds reusable helper functions for tasks like image formatting or data manipulation.
api: Contains functions to fetch or post data to backend routes.
styles: Styling files (CSS, Sass, etc.).
server: Houses  Node.js and Express backend.

models: Define database schemas for artworks, artists, orders, and other relevant entities.
routes: Create API endpoints for creating, reading, updating, and deleting data.
controllers: Organize business logic attached to routes (processing requests, data transformations)
middleware: Used for tasks like authentication, authorization, or error handling.

Key Files
client/src/index.js: The starting point of the React application.
client/src/App.js: Main container for frontend structure.
server/app.js: Express the server's main file.

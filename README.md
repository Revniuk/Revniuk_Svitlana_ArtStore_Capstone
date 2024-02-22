# Revniuk_Svitlana_ArtStore_Capstone
CP 325.9: Capstone. Per Scholas Bootcamp projects
Project Structure

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

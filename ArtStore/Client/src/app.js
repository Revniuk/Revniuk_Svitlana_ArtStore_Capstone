import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import ArtistProfilePage from './pages/ArtistProfilePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/artist/:id" component={ArtistProfilePage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;

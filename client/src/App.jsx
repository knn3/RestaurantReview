import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import RestaurantUpdatePage from './routes/RestaurantUpdatePage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/restaurant/:id"
            element={<RestaurantDetailPage />}
          />
          <Route
            exact
            path="/restaurant/:id/update"
            element={<RestaurantUpdatePage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App
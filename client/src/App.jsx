import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { RestaurantContext, RestaurantContextProvider } from './context/RestaurantContext';
import Home from './routes/Home'
import RestaurantDetailPage from './routes/RestaurantDetailPage';
import RestaurantUpdatePage from './routes/RestaurantUpdatePage';

const App = () => {
    return (
      <RestaurantContextProvider>
        <div>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/restaurants/:id"
                element={<RestaurantDetailPage />}
              />
              <Route
                exact
                path="/restaurants/:id/update"
                element={<RestaurantUpdatePage />}
              />
            </Routes>
          </Router>
        </div>
      </RestaurantContextProvider>
    );
}

export default App
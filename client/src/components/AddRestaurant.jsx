import React, { useState, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';

const AddRestaurant = () => {
    const {addRestaurants} = useContext(RestaurantContext)

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await RestaurantFinder.post("/", {
            name,
            location,
            price_range: priceRange,
          });
          addRestaurants(response.data.data.restaurant);
          window.location.reload();
        }
        catch (err) {
            console.log(err);
        }

    }

    return (
      <div className="mb-4 container">
        <form action="">
          <div className="row">
            <div className="col">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Name..."
              />
            </div>
            <div className="col">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Location..."
              />
            </div>
            <div className="col">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="custom-select my-1 mr-sm-2 w-100 h-100 rounded"
              >
                <option disabled>Price Range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
              </select>
            </div>
            <button onClick={handleSubmit} type="submit" className="col btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    );
}

export default AddRestaurant
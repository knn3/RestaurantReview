import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = (props) => {
    // Retrieve id from params (from the router)
    const { id } = useParams();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("");
    
    const navigate = useNavigate();
  
    useEffect(() => {
      // fetch restaurant with a specific id and then set state varibles accordingly
      const fetchData = async () => {
        try {
          const response = await RestaurantFinder.get(`/${id}`);
          setName(response.data.data.restaurant.name);
          setLocation(response.data.data.restaurant.location);
          setPriceRange(response.data.data.restaurant.price_range);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, [])  

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await RestaurantFinder.put(`/${id}`, {
              name,
              location,
              price_range: priceRange,
            });
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    }

  return (
    <div className="container">
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>

        <br />

        {/* set value as a state varible and onChange will set call setLocation to store in state varible */}
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>

        <br />

        <div className="form-group">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="custom-select my-1 mr-sm-2 w-100 h-50 rounded"
          >
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>

        <br />

        <button type='submit' onClick={handleUpdate} className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default UpdateRestaurant
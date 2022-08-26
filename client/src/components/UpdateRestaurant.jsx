import React from 'react'
import { useParams } from 'react-router-dom'

const UpdateRestaurant = (props) => {
    const { id } = useParams();
  return (
    <div className="container">
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" className="form-control" type="text" />
        </div>
        
        <br />
        
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" className="form-control" type="text" />
        </div>
        
        <br />

        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input id="price_range" className="form-control" type="number" />
        </div>
        
        <br/>
        
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}

export default UpdateRestaurant
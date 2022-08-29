import React from 'react'
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';
import Reviews from './Reviews';
import AddReview from "../components/AddReview";

const DetailRestaurant = () => {
    const { id } = useParams();
    
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantContext)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await RestaurantFinder.get(`/${id}`);
              // fetch a single restaurant and all of its reviews and set global state
              setSelectedRestaurant(response.data.data);
            } catch (err) {
              console.log(err);
            }
        }
        
        fetchData();
    }, [])

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className='text-center mt-4 display-1'>{selectedRestaurant.restaurant.name}</h1>
          <div className="mt-3 container">
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </div>
  );
}

export default DetailRestaurant
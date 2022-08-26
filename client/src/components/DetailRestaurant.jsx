import React from 'react'
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';
import Reviews from './Reviews';
import StarRating from './StarRating';

const DetailRestaurant = () => {
    const { id } = useParams();
    
    const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantContext)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await RestaurantFinder.get(`/${id}`);
              // fetch a single restaurant and set global state
              setSelectedRestaurant(response.data.data.restaurant);
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
          <div className="mt-3 container">
            <Reviews/>
        </div>
        </>
      )}  
    </div>
  )
}

export default DetailRestaurant
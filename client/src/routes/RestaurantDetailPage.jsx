import React from 'react'
import AddReview from '../components/AddReview';
import DetailRestaurant from '../components/DetailRestaurant';

const RestaurantDetailPage = () => {
  return (
    <div>
      <h1 className="text-center">Detail Page</h1>
      <DetailRestaurant />
      <AddReview/>
    </div>
  );
}

export default RestaurantDetailPage
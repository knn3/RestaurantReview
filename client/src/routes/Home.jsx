import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantLists from '../components/RestaurantLists'

const Home = () => {
  return (
    <div className='container'>
      <br />
      <Header />
      <br />
      <AddRestaurant />
      <br />
      <RestaurantLists />
      <br />
    </div>
  );
}

export default Home
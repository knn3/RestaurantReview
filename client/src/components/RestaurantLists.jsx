import React, {useEffect, useContext} from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantContext } from '../context/RestaurantContext';
import {useNavigate} from 'react-router-dom'
import StarRating from './StarRating';

const RestaurantLists = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantContext);
    
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data.data.restaurants);
            } catch (err) {
              console.log(err);
            }
        }
        fetchData();
    }, [])
    
    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await RestaurantFinder.delete(`/${id}`);
            setRestaurants(
              restaurants.filter((restaurant) => {
                return restaurant.id !== id;
              })
            );
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleUpdate = (e, id) => {
        e.stopPropagation();

        navigate(`/restaurants/${id}/update`)
    }

    const handleSelect = (id) => {
        navigate(`restaurants/${id}`)
    }
  
  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span className="text-warning m-1">no review</span>;
    }
    else {
      return (
        <>
          <StarRating rating={restaurant.average_rating} />
          <span className='text-warning m-1'>({restaurant.count})</span>
        </>
      );
    }
  }

  return (
    <div className="list-group">
      <table className="table table-hover">
        <thead>
          <tr className="bg-primary text-light">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
              <tbody className="table-dark">
                  {restaurants && restaurants.map(restaurant => {
                      return (
                        <tr onClick={() => handleSelect(restaurant.id)} key={restaurant.id}>
                          <td>{restaurant.name}</td>
                          <td>{restaurant.location}</td>
                          <td>{"$".repeat(restaurant.price_range)}</td>
                          <td>{renderRating(restaurant)}</td>
                          <td>
                            <button onClick={(e) => handleUpdate(e, restaurant.id)} className="btn btn-warning">Update</button>
                          </td>
                          <td>
                            <button onClick={(e) => handleDelete(e, restaurant.id)} className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      ); 
                  })}
          {/* <tr>
            <td>McDonalds</td>
            <td>New York</td>
            <td>$$$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>McDonalds</td>
            <td>New York</td>
            <td>$$$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>  */}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantLists
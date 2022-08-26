import React from 'react'

const StarRating = ({ rating }) => {
    const stars = [];
    // For loop to transform reviews from numbers to star rating symbol
    for (let i = 1; i <= 5; i++){
        if (i <= rating) { 
            stars.push(<i key={i} className='fas fa-star text-warning'></i>);
        }
        else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
          // If the rating is a decimal number => add a half star
          stars.push(
            <i key={i} className="fas fa-star-half-alt text-warning"></i>
          );
        }
        else {
            stars.push(<i key={i} className="far fa-star text-warning"></i>);
        }
    }
    return (
        <>
            {stars}
        </>
  )
}

export default StarRating
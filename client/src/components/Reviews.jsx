import React from 'react'
import StarRating from './StarRating';

const Reviews = () => {
  return (
    <div className="row row-cols-3 mb-2">
      <div
        className="card text-white bg-primary m-2"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Kayn</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Awesome Restaurant!</p>
        </div>
      </div>
      <div
        className="card text-white bg-primary m-2"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Kayn</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Awesome Restaurant!</p>
        </div>
      </div>{" "}
      <div
        className="card text-white bg-primary m-2"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Kayn</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Awesome Restaurant!</p>
        </div>
      </div>{" "}
      <div
        className="card text-white bg-primary m-2"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Kayn</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Awesome Restaurant!</p>
        </div>
      </div>{" "}
      <div
        className="card text-white bg-primary m-2"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header d-flex justify-content-between">
          <span>Kayn</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">Awesome Restaurant!</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews
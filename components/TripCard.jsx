import React from 'react';
import PropTypes from 'prop-types';

const TripCard = ({ tripName, tripDescription, onClick, isSelected }) => {
  return (
    <div className={`trip-card ${isSelected ? 'selected' : ''}`}>
      <h2 className="mb-[10px]">{tripName}</h2>
      <h2>{tripDescription}</h2>
      <button onClick={onClick}>View Description</button>
    </div>
  );
};

TripCard.propTypes = {
  tripName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool
};

export default TripCard;

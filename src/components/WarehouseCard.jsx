import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetails } from '../features/warehouses/warehousesSlice';

const WarehouseCard = ({ id, name, city, spaceAvailable, type }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getDetails(id));
  };

  return (
    <Link to={`/warehouse/${id}`}>
      <div
        className="bg-gray-800 shadow-lg rounded-lg p-6 mb-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl flex flex-col justify-between"
        onClick={handleClick}
      >
        {/* Warehouse Name */}
        <h2 className="text-xl font-semibold text-white text-center">{name}</h2>

        {/* City and Type */}
        <div className="flex justify-between mt-3">
          <p className="text-gray-400 text-sm">{city}</p>
          <p className="text-gray-400 font-medium text-sm">{type}</p>
        </div>

        {/* Space Available */}
        <div className="mt-auto">
          <p className="text-gray-400 text-sm">
            Space Available: <span className="font-semibold text-white">{spaceAvailable} sq. ft.</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WarehouseCard;
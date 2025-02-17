import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDetails, updateDetails } from '../features/warehouses/warehousesSlice';
import { useNavigate } from 'react-router-dom';

const WarehouseDetails = () => {

  const { id, name, city, cluster, spaceAvailable, liveStatus } = useSelector(state => state.warehouses.warehouseDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    if (id === '' || name === '' || city === '' || cluster === '' || spaceAvailable === '' || liveStatus === '') {
      alert('All fields should have a value');
      return;
    }
    dispatch(updateDetails([id, name, city, cluster, spaceAvailable, liveStatus]));
    alert('Warehouse details updated successfully');
    navigate('/');
  };

  return (
    <form className="bg-gray-800 p-6  shadow-lg text-white">
     
      <h2 className="text-2xl font-semibold mb-6">Edit Warehouse</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Warehouse Name</label>
        <input
          onChange={(e) => dispatch(changeDetails(['name', e.target.value]))}
          required
          value={name}
          type="text"
          className="p-3 border border-gray-700 rounded-lg w-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
     
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">City</label>
        <input
          onChange={(e) => dispatch(changeDetails(['city', e.target.value]))}
          required
          value={city}
          type="text"
          className="p-3 border border-gray-700 rounded-lg w-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Cluster</label>
        <input
          onChange={(e) => dispatch(changeDetails(['cluster', e.target.value]))}
          required
          value={cluster}
          type="text"
          className="p-3 border border-gray-700 rounded-lg w-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Space Available (sq. ft.)</label>
        <input
          onChange={(e) => dispatch(changeDetails(['spaceAvailable', e.target.value]))}
          required
          value={spaceAvailable}
          type="number"
          className="p-3 border border-gray-700 rounded-lg w-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Warehouse Live Status</label>
        <select
          onChange={(e) => dispatch(changeDetails(['liveStatus', e.target.value]))}
          required
          value={liveStatus}
          className="p-3 border border-gray-700 rounded-lg w-full bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="true">Live</option>
          <option value="false">Not Live</option>
        </select>
      </div>
    
      <button
        type='submit'
        onClick={handleUpdate}
        className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
      >
        Update Warehouse
      </button>
    
    </form>
  );
};

export default WarehouseDetails;

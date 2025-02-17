import React from "react";
import WarehouseFilter from "../components/WarehouseFilter";
import WarehouseCard from "../components/WarehouseCard";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { filteredWarehouses } = useSelector((state) => state.warehouses);

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      {/* Warehouse Filter */}
      <WarehouseFilter />

      {/* Warehouse Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredWarehouses.map((warehouse) => (
          <WarehouseCard
            id={warehouse.id}
            key={warehouse.id}
            name={warehouse.name}
            city={warehouse.city}
            spaceAvailable={warehouse.space_available}
            type={warehouse.type}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
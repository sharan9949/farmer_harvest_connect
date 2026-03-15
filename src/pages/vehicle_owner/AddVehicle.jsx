import React, { useState } from "react";
import { addVehicle } from "../../services/vehicleService";

const AddVehicle = () => {

  const [vehicle, setVehicle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addVehicle({
      id: Date.now(),
      vehicle: vehicle
    });

    alert("Vehicle Added");
  };

  return (
    <div className="container mt-4">

      <h2>Add Vehicle</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Vehicle Name"
          onChange={(e) => setVehicle(e.target.value)}
        />

        <button className="btn btn-success mt-3">
          Add Vehicle
        </button>
      </form>

    </div>
  );
};

export default AddVehicle;
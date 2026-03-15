import vehicles from "../data/vehicles";

export const getVehicles = () => {
  return vehicles;
};

export const addVehicle = (vehicle) => {
  vehicles.push(vehicle);
};
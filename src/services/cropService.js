import crops from "../data/crops";

export const getCrops = () => {
  return crops;
};

export const addCrop = (crop) => {
  crops.push(crop);
};
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import Register from "./pages/public/Register";

import FarmerDashboard from "./pages/farmer/FarmerDashboard";
import PostJob from "./pages/farmer/PostJob";
import SellCrops from "./pages/farmer/SellCrops";
// import VehicleOwnerDashboard from "./pages/vehicleOwner/VehicleOwnerDashboard";
// import AddVehicle from "./pages/vehicleOwner/AddVehicle";

// import LaborDashboard from "./pages/labor/LaborDashboard";
import LaborMarketplace from "./pages/labour/LaborMarketplace";

import BuyerDashboard from "./pages/buyer/BuyerDashboard";
import CropMarketplace from "./pages/buyer/CropMarketplace";
import NavBar from "./components/Navbar";
import LaborDashboard from "./pages/labour/LaborDashboard";

import VehicleOwnerDashboard from "./pages/vehicle_owner/VehicleOwnerDashboard";
import AddVehicle from "./pages/vehicle_owner/AddVehicle";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    

      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Farmer Routes */}

        <Route element={<ProtectedRoute role="farmer" />}>
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/farmer/post-job" element={<PostJob />} />
          <Route path="/farmer/sell-crops" element={<SellCrops />} />
        </Route>

        {/* Labor Routes */}

        <Route element={<ProtectedRoute role="labor" />}>
          <Route path="/labor/dashboard" element={<LaborDashboard />} />
          <Route path="/labor/jobs" element={<LaborMarketplace />} />
        </Route>

        {/* Buyer Routes */}

        <Route element={<ProtectedRoute role="buyer" />}>
          <Route path="/buyer/dashboard" element={<BuyerDashboard />} />
          <Route path="/buyer/marketplace" element={<CropMarketplace />} />
        </Route>

        {/* Vehicle Owner Routes */}

        <Route element={<ProtectedRoute role="vehicleOwner" />}>
          <Route path="/vehicle/dashboard" element={<VehicleOwnerDashboard />} />
          <Route path="/vehicle/add" element={<AddVehicle />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
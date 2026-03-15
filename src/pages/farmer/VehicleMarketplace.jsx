import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import VehicleCard from "../../components/VehicleCard";

const VehicleMarketplace = () => {

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {

    const storedVehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

    setVehicles(storedVehicles);

  }, []);

  return (

    <Container className="mt-4">

      <h2 className="mb-4">Vehicle Marketplace</h2>

      <Row>

        {vehicles.length === 0 ? (
          <p>No vehicles available</p>
        ) : (
          vehicles.map((vehicle, index) => (
            <VehicleCard key={index} vehicle={vehicle} />
          ))
        )}

      </Row>

    </Container>

  );
};

export default VehicleMarketplace;
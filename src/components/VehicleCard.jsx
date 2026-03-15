import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const VehicleCard = ({ vehicle }) => {

  const handleHire = () => {
    alert("Vehicle Hire Request Sent");
  };

  return (

    <Col md={4} className="mb-4">

      <Card className="shadow">

        <Card.Body>

          <Card.Title>{vehicle.name}</Card.Title>

          <Card.Text>
            Type: {vehicle.type}
          </Card.Text>

          <Card.Text>
            Capacity: {vehicle.capacity}
          </Card.Text>

          <Card.Text>
            Price: ₹{vehicle.price}/km
          </Card.Text>

          <Card.Text>
            Location: {vehicle.location}
          </Card.Text>

          <Button variant="primary" onClick={handleHire}>
            Hire Vehicle
          </Button>

        </Card.Body>

      </Card>

    </Col>

  );
};

export default VehicleCard;
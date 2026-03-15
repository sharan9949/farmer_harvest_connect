import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const CropCard = ({ crop }) => {

  const handleBuy = () => {
    alert("Purchase Request Sent");
  };

  return (

    <Col md={4} className="mb-4">

      <Card className="shadow">

        <Card.Body>

          <Card.Title>{crop.name}</Card.Title>

          <Card.Text>
            Quantity: {crop.quantity} kg
          </Card.Text>

          <Card.Text>
            Price: ₹{crop.price}
          </Card.Text>

          <Card.Text>
            Location: {crop.location}
          </Card.Text>

          <Button variant="success" onClick={handleBuy}>
            Buy Crop
          </Button>

        </Card.Body>

      </Card>

    </Col>

  );
};

export default CropCard;
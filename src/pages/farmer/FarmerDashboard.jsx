import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const FarmerDashboard = () => {

  return (

    <Container className="mt-4">

      <h2 className="mb-4">Farmer Dashboard</h2>

      {/* Statistics */}

      <Row className="mb-4">

        <Col md={4}>
          <Card className="shadow text-center">
            <Card.Body>
              <Card.Title>Jobs Posted</Card.Title>
              <h3>5</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow text-center">
            <Card.Body>
              <Card.Title>Crops Listed</Card.Title>
              <h3>3</h3>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow text-center">
            <Card.Body>
              <Card.Title>Vehicle Requests</Card.Title>
              <h3>2</h3>
            </Card.Body>
          </Card>
        </Col>

      </Row>

      {/* Quick Actions */}

      <Row>

        <Col md={4}>
          <Card className="shadow text-center">
            <Card.Body>

              <Card.Title>Post Harvest Job</Card.Title>

              <Button
                as={Link}
                to="/farmer/post-job"
                variant="success"
              >
                Post Job
              </Button>

            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow text-center">
            <Card.Body>

              <Card.Title>Sell Crops</Card.Title>

              <Button
                as={Link}
                to="/farmer/sell-crops"
                variant="warning"
              >
                Add Crop
              </Button>

            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="shadow text-center">
            <Card.Body>

              <Card.Title>Hire Vehicle</Card.Title>

              <Button
                as={Link}
                to="/vehicle/add"
                variant="primary"
              >
                Hire Vehicle
              </Button>

            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
};

export default FarmerDashboard;
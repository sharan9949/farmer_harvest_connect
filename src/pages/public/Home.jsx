import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
  // ←

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>

      {/* ── Hero Section ── */}
      <div className="hero-section bg-success text-white text-center py-5">
        <Container>

          <h1 className="hero-title">Farmer Harvest Connect</h1>

          <p className="hero-subtitle">
            A platform connecting Farmers, Laborers, Buyers and Vehicle Owners
          </p>

          {!user ? (
            <>
              <Button
                as={Link}
                to="/register"
                variant="light"
                className="me-3 hero-btn-primary"
              >
                Get Started
              </Button>
              <Button
                as={Link}
                to="/login"
                variant="outline-light"
                className="hero-btn-secondary"
              >
                Login
              </Button>
            </>
          ) : (
            <Button
              as={Link}
              to={`/${user.role}/dashboard`}
              variant="light"
              className="hero-btn-primary"
            >
              Go to Dashboard
            </Button>
          )}

        </Container>
      </div>


      {/* ── Features Section ── */}
      <Container className="my-5">

        <h2 className="text-center mb-5 section-title">Platform Features</h2>

        <Row>

          <Col md={4}>
            <Card className="text-center shadow feature-card">
              <Card.Body>
                <span className="feature-icon">🌽</span>
                <Card.Title>Sell Crops</Card.Title>
                <Card.Text>
                  Farmers can directly sell crops to buyers without middlemen.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="text-center shadow feature-card">
              <Card.Body>
                <span className="feature-icon">👷</span>
                <Card.Title>Hire Labor</Card.Title>
                <Card.Text>
                  Farmers can post jobs and hire labor for harvesting.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="text-center shadow feature-card">
              <Card.Body>
                <span className="feature-icon">🚜</span>
                <Card.Title>Hire Vehicles</Card.Title>
                <Card.Text>
                  Book tractors and transport vehicles for crop delivery.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>


      {/* ── User Roles Section ── */}
      <div className="roles-section">
        <Container className="py-4">

          <h2 className="text-center mb-5 section-title">
            Who Can Use This Platform?
          </h2>

          <Row>

            <Col md={3}>
              <Card className="text-center role-card">
                <Card.Body>
                  <span className="role-emoji">🌾</span>
                  <Card.Title>Farmers</Card.Title>
                  <Card.Text>Post jobs, sell crops, hire vehicles.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center role-card">
                <Card.Body>
                  <span className="role-emoji">👷</span>
                  <Card.Title>Laborers</Card.Title>
                  <Card.Text>Find agriculture jobs easily.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center role-card">
                <Card.Body>
                  <span className="role-emoji">🛒</span>
                  <Card.Title>Buyers</Card.Title>
                  <Card.Text>Purchase crops directly from farmers.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center role-card">
                <Card.Body>
                  <span className="role-emoji">🚛</span>
                  <Card.Title>Vehicle Owners</Card.Title>
                  <Card.Text>Provide tractors and transport services.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>

        </Container>
      </div>


      {/* ── Call to Action ── */}
      <div className="cta-section bg-dark text-white text-center py-5">
        <Container>
          <h2 className="cta-title">Join the Agriculture Network</h2>
          <p className="cta-subtitle">Connect with farmers, buyers and workers today</p>
          <Button as={Link} to="/register" variant="success" className="cta-btn">
            Create Account
          </Button>
        </Container>
      </div>

    </div>
  );
};

export default Home;

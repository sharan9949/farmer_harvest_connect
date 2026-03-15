import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const NavBar = () => {

  const { user, logout } = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="../../src/assets/farmer img.png"
            alt="no img"
            className="img-fluid rounded-circle"
            width="80"
            height="80"
            style={{ padding: "10px" }}
          />
          Farmer Harvest Connect
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            {/* Public Links - always visible */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* ✅ Always visible — no role check */}
            <NavDropdown title="Farmer">
              <NavDropdown.Item as={Link} to="/farmer/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/farmer/post-job">Post Job</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/farmer/sell-crops">Sell Crops</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Labor">
              <NavDropdown.Item as={Link} to="/labor/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/labor/jobs">Job Marketplace</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Buyer">
              <NavDropdown.Item as={Link} to="/buyer/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/buyer/marketplace">Crop Marketplace</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Vehicle Owner">
              <NavDropdown.Item as={Link} to="/vehicle/dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vehicle/add">Add Vehicle</NavDropdown.Item>
            </NavDropdown>

          </Nav>

          {/* Right Side */}
          {!user ? (
            // ✅ Show Login/Register when not logged in
            <Nav>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </Nav>
          ) : (
            // ✅ Show Welcome + Logout when logged in
            <Nav>
              <Navbar.Text className="me-3">
                Welcome {user.name}
              </Navbar.Text>
              <Nav.Link onClick={logout} className="logout-link">
                Logout
              </Nav.Link>
            </Nav>
          )}

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavBar;
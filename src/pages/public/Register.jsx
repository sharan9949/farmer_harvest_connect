import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user temporarily in localStorage
    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Registration Successful!");

    navigate("/login");
  };

  return (

    <Container className="mt-5">

      <Card className="mx-auto shadow" style={{width:"400px"}}>

        <Card.Body>

          <h3 className="text-center mb-4">Register</h3>

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Role</Form.Label>

              <Form.Select
                name="role"
                onChange={handleChange}
                required
              >

                <option value="">Choose role</option>
                <option value="farmer">Farmer</option>
                <option value="labor">Labor</option>
                <option value="buyer">Buyer</option>
                <option value="vehicleOwner">Vehicle Owner</option>

              </Form.Select>

            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Register
            </Button>

          </Form>

        </Card.Body>

      </Card>

    </Container>

  );
};

export default Register;
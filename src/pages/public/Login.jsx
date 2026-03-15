import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import  AuthContext  from "../../context/AuthContext";
// import { AuthContext } from "../../context/AuthContext";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {

      login(storedUser);

      // Role based redirect
      if (storedUser.role === "farmer") {
        navigate("/farmer/dashboard");
      }

      if (storedUser.role === "labor") {
        navigate("/labor/dashboard");
      }

      if (storedUser.role === "buyer") {
        navigate("/buyer/dashboard");
      }

      if (storedUser.role === "vehicleOwner") {
        navigate("/vehicle/dashboard");
      }

    } else {
      alert("Invalid Credentials");
    }
  };

  return (

    <Container className="mt-5">

      <Card className="mx-auto shadow" style={{width:"400px"}}>

        <Card.Body>

          <h3 className="text-center mb-4">Login</h3>

          <Form onSubmit={handleSubmit}>

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

            <Button variant="success" type="submit" className="w-100">
              Login
            </Button>

          </Form>

        </Card.Body>

      </Card>

    </Container>
  );
};

export default Login;
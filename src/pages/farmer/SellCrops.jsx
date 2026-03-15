import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SellCrops = () => {

  const [crop, setCrop] = useState({
    name: "",
    quantity: "",
    price: "",
    location: "",
    description: ""
  });

  const handleChange = (e) => {
    setCrop({
      ...crop,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let crops = JSON.parse(localStorage.getItem("crops")) || [];

    crops.push(crop);

    localStorage.setItem("crops", JSON.stringify(crops));

    alert("Crop Listed Successfully");

    setCrop({
      name: "",
      quantity: "",
      price: "",
      location: "",
      description: ""
    });
  };

  return (

    <Container className="mt-4">

      <Card className="mx-auto shadow" style={{maxWidth:"500px"}}>

        <Card.Body>

          <h3 className="text-center mb-4">Sell Crops</h3>

          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Crop Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={crop.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantity (kg)</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={crop.quantity}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price (₹)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={crop.price}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={crop.location}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={crop.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Add Crop
            </Button>

          </Form>

        </Card.Body>

      </Card>

    </Container>

  );
};

export default SellCrops;
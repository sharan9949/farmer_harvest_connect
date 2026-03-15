import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";


// ── Sample Data ─────────────────────────────
const myVehicles = [
  { id: 1, name: "Mahindra Tractor",  emoji: "🚜", type: "Tractor",   capacity: "5 ton",  price: 1200, location: "Ludhiana",    status: "Available" },
  { id: 2, name: "Ashok Leyland Truck",emoji:"🚛", type: "Truck",     capacity: "10 ton", price: 2500, location: "Nashik",      status: "On Trip"   },
  { id: 3, name: "Mini Pickup Van",   emoji: "🚐", type: "Pickup",    capacity: "2 ton",  price: 800,  location: "Pune",        status: "Available" },
];

const bookings = [
  { farmer: "Ramesh Kumar",  vehicle: "Mahindra Tractor",   date: "10 Mar", from: "Ludhiana", to: "Amritsar",  pay: "₹3,600", status: "Completed" },
  { farmer: "Priya Patil",   vehicle: "Mini Pickup Van",    date: "14 Mar", from: "Pune",     to: "Nashik",    pay: "₹1,600", status: "Confirmed" },
  { farmer: "Suresh Reddy",  vehicle: "Ashok Leyland Truck",date: "16 Mar", from: "Nashik",   to: "Mumbai",    pay: "₹7,500", status: "On Trip"   },
  { farmer: "Anil Singh",    vehicle: "Mahindra Tractor",   date: "20 Mar", from: "Lucknow",  to: "Kanpur",    pay: "₹2,400", status: "Pending"   },
];

const statusColor = { Available: "success", "On Trip": "warning", Maintenance: "danger" };
const bookingColor = { Completed: "secondary", Confirmed: "success", "On Trip": "warning", Pending: "info" };

function VehicleOwnerDashboard() {
  const [vehicles, setVehicles] = useState(myVehicles);

  const totalEarnings = 15100;
  const tripsCompleted = 12;
  const activeVehicles = vehicles.filter(v => v.status === "Available").length;

  const toggleStatus = (id) => {
    setVehicles(vehicles.map(v =>
      v.id === id
        ? { ...v, status: v.status === "Available" ? "Maintenance" : "Available" }
        : v
    ));
  };

  return (
    <div className="vehicle-dashboard">
      <Container>

        {/* ── Hero Banner ── */}
        <div className="vd-hero mb-4">
          <div className="road-line" />
          <Row className="align-items-center gy-3">
            <Col md={6}>
              <div className="d-flex align-items-center gap-3">
                <div className="vd-hero-avatar">🚛</div>
                <div>
                  <h2 className="vd-hero-title">Vehicle Owner Dashboard</h2>
                  <p className="vd-hero-sub">Manage your fleet and track bookings</p>
                  <span className="vd-hero-badge">🚗 {vehicles.length} Vehicles Registered</span>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex gap-3 flex-wrap justify-content-md-end">
                <div className="vd-stat-box">
                  <span className="vd-stat-num">{vehicles.length}</span>
                  <div className="vd-stat-label">My Vehicles</div>
                </div>
                <div className="vd-stat-box">
                  <span className="vd-stat-num">{tripsCompleted}</span>
                  <div className="vd-stat-label">Trips Done</div>
                </div>
                <div className="vd-stat-box">
                  <span className="vd-stat-num">₹{totalEarnings.toLocaleString()}</span>
                  <div className="vd-stat-label">Earned</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* ── Stat Cards ── */}
        <Row className="g-3 mb-4">
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#1e90ff,#0066cc)" }}>
              <Card.Body>
                <span className="stat-icon">🚗</span>
                <div className="stat-num">{vehicles.length}</div>
                <div className="stat-lbl">Total Vehicles</div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#2ed573,#1abc6a)" }}>
              <Card.Body>
                <span className="stat-icon">✅</span>
                <div className="stat-num">{activeVehicles}</div>
                <div className="stat-lbl">Available</div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#ffa502,#e67e00)" }}>
              <Card.Body>
                <span className="stat-icon">🗺️</span>
                <div className="stat-num">{tripsCompleted}</div>
                <div className="stat-lbl">Trips Done</div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#a29bfe,#6c5ce7)" }}>
              <Card.Body>
                <span className="stat-icon">💰</span>
                <div className="stat-num">₹{(totalEarnings/1000).toFixed(1)}k</div>
                <div className="stat-lbl">Total Earned</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ── My Vehicles ── */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="section-heading mb-0">🚜 My Fleet</h5>
          <Button as={Link} to="/vehicle/add" className="btn-add-vehicle px-4 py-2">
            + Add Vehicle
          </Button>
        </div>

        <Row className="g-3 mb-5">
          {vehicles.map((v) => (
            <Col md={4} key={v.id}>
              <Card className="vehicle-card shadow-sm">
                <Card.Body className="p-3">

                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="vehicle-emoji">{v.emoji}</span>
                    <Badge bg={statusColor[v.status] || "secondary"}>
                      {v.status}
                    </Badge>
                  </div>

                  <div className="vehicle-name mb-1">{v.name}</div>
                  <small className="text-muted">{v.type}</small>

                  <div className="vehicle-price mt-2 mb-3">₹{v.price}/day</div>

                  <div className="mb-3">
                    <div className="vehicle-meta">📦 Capacity: {v.capacity}</div>
                    <div className="vehicle-meta">📍 {v.location}</div>
                  </div>

                  <div className="d-flex gap-2">
                    <Button className="btn-manage flex-grow-1">
                      Manage
                    </Button>
                    <Button
                      variant="outline-secondary"
                      style={{ borderRadius: "22px", fontSize: "0.8rem" }}
                      onClick={() => toggleStatus(v.id)}
                    >
                      {v.status === "Available" ? "🔧 Maintenance" : "✅ Activate"}
                    </Button>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ── Bookings ── */}
        <h5 className="section-heading">📋 Recent Bookings</h5>
        <div className="booking-table-wrap mb-5">
          <Table className="booking-table mb-0" responsive hover>
            <thead>
              <tr>
                <th>Farmer</th>
                <th>Vehicle</th>
                <th>Date</th>
                <th>Route</th>
                <th>Pay</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={i}>
                  <td><strong>👨‍🌾 {b.farmer}</strong></td>
                  <td>{b.vehicle}</td>
                  <td>📅 {b.date}</td>
                  <td>📍 {b.from} → {b.to}</td>
                  <td className="text-primary fw-bold">{b.pay}</td>
                  <td>
                    <Badge bg={bookingColor[b.status]}>
                      {b.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* ── Quick Actions ── */}
        <h5 className="section-heading">⚡ Quick Actions</h5>
        <Row className="g-3">
          <Col md={4}>
            <div className="action-card shadow-sm">
              <span className="action-icon">➕</span>
              <strong>Add New Vehicle</strong>
              <p className="text-muted mt-1 mb-0" style={{ fontSize: "0.85rem" }}>
                Register a new tractor, truck or van to your fleet.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="action-card shadow-sm">
              <span className="action-icon">📊</span>
              <strong>View Earnings Report</strong>
              <p className="text-muted mt-1 mb-0" style={{ fontSize: "0.85rem" }}>
                Track monthly income and completed trip history.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="action-card shadow-sm">
              <span className="action-icon">🔧</span>
              <strong>Schedule Maintenance</strong>
              <p className="text-muted mt-1 mb-0" style={{ fontSize: "0.85rem" }}>
                Mark vehicles for service to avoid breakdowns.
              </p>
            </div>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default VehicleOwnerDashboard;
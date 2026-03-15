
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

// ── Sample Data ──────────────────────────────
const allCrops = [
  { id: 1, name: "Wheat",       emoji: "🌾", type: "Grain",     price: 2200, qty: "500 kg", location: "Punjab",       seller: "Ramesh Kumar",  status: "Available",    fresh: true  },
  { id: 2, name: "Rice",        emoji: "🍚", type: "Grain",     price: 3500, qty: "300 kg", location: "Andhra Pradesh", seller: "Suresh Reddy",  status: "Available",    fresh: true  },
  { id: 3, name: "Tomato",      emoji: "🍅", type: "Vegetable", price: 800,  qty: "200 kg", location: "Maharashtra",  seller: "Priya Patil",   status: "Limited",      fresh: true  },
  { id: 4, name: "Onion",       emoji: "🧅", type: "Vegetable", price: 1200, qty: "400 kg", location: "Nashik",       seller: "Vijay More",    status: "Available",    fresh: false },
  { id: 5, name: "Sugarcane",   emoji: "🎋", type: "Cash Crop", price: 4000, qty: "1 ton",  location: "UP",           seller: "Anil Singh",    status: "Available",    fresh: false },
  { id: 6, name: "Cotton",      emoji: "🌸", type: "Cash Crop", price: 6500, qty: "250 kg", location: "Gujarat",      seller: "Meena Shah",    status: "Out of Stock", fresh: false },
];

const sellers = [
  { name: "Ramesh Kumar",  location: "Punjab",        crops: "Wheat, Maize",      rating: 5, contact: "98765xxxxx", verified: true  },
  { name: "Suresh Reddy",  location: "Andhra Pradesh",crops: "Rice, Groundnut",   rating: 4, contact: "91234xxxxx", verified: true  },
  { name: "Priya Patil",   location: "Maharashtra",   crops: "Tomato, Onion",     rating: 4, contact: "87654xxxxx", verified: false },
  { name: "Vijay More",    location: "Nashik",        crops: "Onion, Grapes",     rating: 3, contact: "76543xxxxx", verified: true  },
  { name: "Anil Singh",    location: "Uttar Pradesh", crops: "Sugarcane, Wheat",  rating: 5, contact: "99887xxxxx", verified: true  },
];

const cropTypes = ["All", "Grain", "Vegetable", "Cash Crop"];

const statusColor = { "Available": "success", "Limited": "warning", "Out of Stock": "danger" };

function StarRating({ rating }) {
  return (
    <span className="rating-stars">
      {"★".repeat(rating)}{"☆".repeat(5 - rating)}
    </span>
  );
}

function BuyerDashboard() {
  const [search, setSearch]       = useState("");
  const [activeFilter, setFilter] = useState("All");

  const filtered = allCrops.filter((c) => {
    const matchType   = activeFilter === "All" || c.type === activeFilter;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
                        c.seller.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const available  = allCrops.filter(c => c.status === "Available").length;
  const limited    = allCrops.filter(c => c.status === "Limited").length;
  const outOfStock = allCrops.filter(c => c.status === "Out of Stock").length;

  return (
    <div className="buyer-dashboard">
      <Container>

        {/* ── Page Title ── */}
        <div className="mb-4 pt-2">
          <h2 className="dashboard-title">🛒 Buyer Dashboard</h2>
          <p className="text-muted mt-3" style={{ fontSize: "0.92rem" }}>
            Browse available crops, check seller details and place orders.
          </p>
        </div>

        {/* ── Stat Cards ── */}
        <Row className="mb-4 g-3">
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#2ed573,#1abc6a)" }}>
              <Card.Body>
                <span className="stat-icon">🌾</span>
                <div className="stat-number">{allCrops.length}</div>
                <div className="stat-label">Total Crops</div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#1e90ff,#0066cc)" }}>
              <Card.Body>
                <span className="stat-icon">✅</span>
                <div className="stat-number">{available}</div>
                <div className="stat-label">Available</div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#ffa502,#e67e00)" }}>
              <Card.Body>
                <span className="stat-icon">⚠️</span>
                <div className="stat-number">{limited}</div>
                <div className="stat-label">Limited Stock</div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#ff4757,#c0392b)" }}>
              <Card.Body>
                <span className="stat-icon">👨‍🌾</span>
                <div className="stat-number">{sellers.length}</div>
                <div className="stat-label">Sellers</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ── Search + Filter ── */}
        <Row className="mb-4 align-items-center g-2">
          <Col md={5}>
            <input
              type="text"
              className="form-control search-bar"
              placeholder="🔍  Search crops or sellers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col md={7}>
            <div className="d-flex flex-wrap gap-2">
              {cropTypes.map((type) => (
                <span
                  key={type}
                  className={`filter-badge badge bg-light text-dark ${activeFilter === type ? "active" : ""}`}
                  onClick={() => setFilter(type)}
                >
                  {type}
                </span>
              ))}
            </div>
          </Col>
        </Row>

        {/* ── Crop Cards ── */}
        <h5 className="section-heading">🌽 Available Crops</h5>
        <Row className="g-3 mb-5">
          {filtered.length === 0 ? (
            <Col>
              <p className="text-muted text-center py-4">No crops found.</p>
            </Col>
          ) : filtered.map((crop) => (
            <Col md={4} key={crop.id}>
              <Card className="crop-card h-100 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start">
                    <span className="crop-emoji">{crop.emoji}</span>
                    <div className="d-flex gap-1 flex-wrap justify-content-end">
                      <Badge className="crop-badge" bg={statusColor[crop.status]}>
                        {crop.status}
                      </Badge>
                      {crop.fresh && (
                        <Badge className="crop-badge" bg="info">Fresh</Badge>
                      )}
                    </div>
                  </div>

                  <h5 className="mb-1 fw-bold">{crop.name}</h5>
                  <small className="text-muted">{crop.type}</small>

                  <div className="crop-price mt-2">₹{crop.price.toLocaleString()} / qtl</div>

                  <div className="crop-meta mt-2 d-flex flex-column gap-1">
                    <span>📦 Qty: {crop.qty}</span>
                    <span>📍 {crop.location}</span>
                    <span>👨‍🌾 {crop.seller}</span>
                  </div>

                  <Button
                    className="btn-buy mt-3 w-100"
                    disabled={crop.status === "Out of Stock"}
                    onClick={() => alert(`Purchase request sent for ${crop.name}!`)}
                  >
                    {crop.status === "Out of Stock" ? "Out of Stock" : "🛒 Buy Now"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* ── Seller Details Table ── */}
        <h5 className="section-heading">👨‍🌾 Seller Directory</h5>
        <div className="seller-table-wrap mb-4">
          <Table className="seller-table mb-0" responsive hover>
            <thead>
              <tr>
                <th>Seller</th>
                <th>Location</th>
                <th>Crops Available</th>
                <th>Rating</th>
                <th>Contact</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller, i) => (
                <tr key={i}>
                  <td>
                    <span className="seller-avatar">
                      {seller.name.charAt(0)}
                    </span>
                    {seller.name}
                  </td>
                  <td>📍 {seller.location}</td>
                  <td>{seller.crops}</td>
                  <td><StarRating rating={seller.rating} /></td>
                  <td>📞 {seller.contact}</td>
                  <td>
                    <Badge bg={seller.verified ? "success" : "secondary"} className="crop-badge">
                      {seller.verified ? "✔ Verified" : "Unverified"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

      </Container>
    </div>
  );
}

export default BuyerDashboard;

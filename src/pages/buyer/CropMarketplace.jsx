import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { getCrops } from "../../services/cropService";


// Default crops shown if cropService returns empty
const defaultCrops = [
  { id: 1,  name: "Wheat",     emoji: "🌾", type: "Grain",     price: 2200, qty: "500 kg", location: "Punjab",        seller: "Ramesh Kumar",  status: "Available"    },
  { id: 2,  name: "Rice",      emoji: "🍚", type: "Grain",     price: 3500, qty: "300 kg", location: "Andhra Pradesh",seller: "Suresh Reddy",  status: "Available"    },
  { id: 3,  name: "Tomato",    emoji: "🍅", type: "Vegetable", price: 800,  qty: "200 kg", location: "Maharashtra",   seller: "Priya Patil",   status: "Limited"      },
  { id: 4,  name: "Onion",     emoji: "🧅", type: "Vegetable", price: 1200, qty: "400 kg", location: "Nashik",        seller: "Vijay More",    status: "Available"    },
  { id: 5,  name: "Sugarcane", emoji: "🎋", type: "Cash Crop", price: 4000, qty: "1 ton",  location: "Uttar Pradesh", seller: "Anil Singh",    status: "Available"    },
  { id: 6,  name: "Cotton",    emoji: "🌸", type: "Cash Crop", price: 6500, qty: "250 kg", location: "Gujarat",       seller: "Meena Shah",    status: "Out of Stock" },
  { id: 7,  name: "Mango",     emoji: "🥭", type: "Fruit",     price: 5000, qty: "150 kg", location: "Ratnagiri",     seller: "Deepak Sawant", status: "Available"    },
  { id: 8,  name: "Banana",    emoji: "🍌", type: "Fruit",     price: 1800, qty: "300 kg", location: "Tamil Nadu",    seller: "Mani Raj",      status: "Limited"      },
  { id: 9,  name: "Maize",     emoji: "🌽", type: "Grain",     price: 1600, qty: "600 kg", location: "Karnataka",     seller: "Ravi Kumar",    status: "Available"    },
];

const FILTERS   = ["All", "Grain", "Vegetable", "Cash Crop", "Fruit"];
const STATUS_BG = { "Available": "success", "Limited": "warning", "Out of Stock": "danger" };
const TYPE_CLASS = { "Grain": "grain", "Vegetable": "vegetable", "Cash Crop": "cashcrop", "Fruit": "fruit" };

const CropMarketplace = () => {
  const [crops, setCrops]         = useState([]);
  const [search, setSearch]       = useState("");
  const [activeFilter, setFilter] = useState("All");

  useEffect(() => {
    const data = getCrops();
    setCrops(data.length > 0 ? data : defaultCrops);
  }, []);

  const filtered = crops.filter((c) => {
    const matchType   = activeFilter === "All" || c.type === activeFilter;
    const matchSearch = (c.name     || "").toLowerCase().includes(search.toLowerCase()) ||
                        (c.seller   || "").toLowerCase().includes(search.toLowerCase()) ||
                        (c.location || "").toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const available = crops.filter(c => c.status === "Available").length;
  const sellers   = [...new Set(crops.map(c => c.seller))].length;

  return (
    <div className="crop-marketplace">
      <Container>

        {/* ── Banner ── */}
        <div className="marketplace-banner mb-4">
          <Row className="align-items-center gy-3">
            <Col md={6}>
              <h2 className="banner-title mb-1">🌽 Crop Marketplace</h2>
              <p className="banner-subtitle mb-0">
                Buy fresh crops directly from farmers — no middlemen.
              </p>
            </Col>
            <Col md={6}>
              <div className="d-flex gap-3 flex-wrap justify-content-md-end">
                <div className="banner-stat">
                  <span className="banner-stat-num">{crops.length}</span>
                  <span className="banner-stat-label">Total Crops</span>
                </div>
                <div className="banner-stat">
                  <span className="banner-stat-num">{available}</span>
                  <span className="banner-stat-label">Available</span>
                </div>
                <div className="banner-stat">
                  <span className="banner-stat-num">{sellers}</span>
                  <span className="banner-stat-label">Sellers</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* ── Search + Filters ── */}
        <div className="filter-bar">
          <Row className="align-items-center g-2">
            <Col md={5}>
              <input
                type="text"
                className="form-control search-input"
                placeholder="🔍  Search crops, sellers, locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col md={7}>
              <div className="d-flex flex-wrap gap-2">
                {FILTERS.map((f) => (
                  <span
                    key={f}
                    className={`filter-chip ${activeFilter === f ? "active" : ""}`}
                    onClick={() => setFilter(f)}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        {/* ── Results Count ── */}
        <h5 className="section-heading">
          🌾 {filtered.length} Crop{filtered.length !== 1 ? "s" : ""} Found
        </h5>

        {/* ── Crop Cards ── */}
        {filtered.length === 0 ? (
          <div className="empty-state">
            <span className="empty-state-emoji">🌱</span>
            <h5 className="text-muted">No crops found</h5>
            <p className="text-muted">Try a different search or filter.</p>
          </div>
        ) : (
          <Row className="g-3">
            {filtered.map((crop) => (
              <Col md={4} key={crop.id}>
                <Card className={`crop-card-item shadow-sm ${TYPE_CLASS[crop.type] || ""}`}>
                  <Card.Body className="p-3">

                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="crop-emoji-large">{crop.emoji || "🌾"}</span>
                      <Badge
                        className="status-pill"
                        bg={STATUS_BG[crop.status] || "secondary"}
                      >
                        {crop.status}
                      </Badge>
                    </div>

                    <div className="crop-name mb-1">{crop.name}</div>
                    <small className="text-muted">{crop.type}</small>

                    <div className="crop-price-tag mt-2 mb-3">
                      ₹{(crop.price || 0).toLocaleString()}
                      <small className="text-muted fw-normal" style={{ fontSize: "0.75rem" }}> / qtl</small>
                    </div>

                    <div className="mb-3">
                      <div className="crop-info-row">📦 <span>Qty: {crop.qty || crop.quantity}</span></div>
                      <div className="crop-info-row">📍 <span>{crop.location}</span></div>
                      <div className="crop-info-row">👨‍🌾 <span>{crop.seller || "Unknown Seller"}</span></div>
                    </div>

                    <Button
                      className="btn-purchase w-100"
                      disabled={crop.status === "Out of Stock"}
                      onClick={() => alert(`✅ Purchase request sent for ${crop.name}!`)}
                    >
                      {crop.status === "Out of Stock" ? "❌ Out of Stock" : "🛒 Buy Now"}
                    </Button>

                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

      </Container>
    </div>
  );
};

export default CropMarketplace;

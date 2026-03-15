import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { getJobs } from "../../services/jobService";


// ── Default jobs if service is empty ──────────
const defaultJobs = [
  { id: 1, title: "Wheat Harvesting",    emoji: "🌾", type: "Harvesting", location: "Ludhiana, Punjab",        salary: 650, workers: 10, date: "15 Mar 2026", urgent: true  },
  { id: 2, title: "Rice Field Planting", emoji: "🍚", type: "Planting",   location: "Warangal, Telangana",     salary: 550, workers: 8,  date: "18 Mar 2026", urgent: false },
  { id: 3, title: "Sugarcane Cutting",   emoji: "🎋", type: "Harvesting", location: "Kolhapur, Maharashtra",   salary: 700, workers: 15, date: "20 Mar 2026", urgent: true  },
  { id: 4, title: "Tomato Picking",      emoji: "🍅", type: "Picking",    location: "Nashik, Maharashtra",     salary: 500, workers: 12, date: "22 Mar 2026", urgent: false },
  { id: 5, title: "Cotton Harvesting",   emoji: "🌸", type: "Harvesting", location: "Rajkot, Gujarat",         salary: 600, workers: 20, date: "25 Mar 2026", urgent: false },
  { id: 6, title: "Onion Farming Help",  emoji: "🧅", type: "Planting",   location: "Pune, Maharashtra",       salary: 480, workers: 6,  date: "28 Mar 2026", urgent: false },
];

const FILTERS   = ["All", "Harvesting", "Planting", "Picking"];
const TYPE_COLOR = { Harvesting: "warning", Planting: "success", Picking: "info" };

const LaborMarketplace = () => {
  const [jobs, setJobs]           = useState([]);
  const [search, setSearch]       = useState("");
  const [activeFilter, setFilter] = useState("All");
  const [appliedIds, setApplied]  = useState([]);

  useEffect(() => {
    const data = getJobs();
    setJobs(data.length > 0 ? data : defaultJobs);
  }, []);

  const filtered = jobs.filter((j) => {
    const matchType   = activeFilter === "All" || j.type === activeFilter;
    const matchSearch =
      (j.title    || "").toLowerCase().includes(search.toLowerCase()) ||
      (j.location || "").toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const urgentCount = jobs.filter(j => j.urgent).length;

  const handleApply = (id, title) => {
    setApplied([...appliedIds, id]);
    alert(`✅ Application sent for "${title}"!`);
  };

  return (
    <div className="labor-marketplace">
      <Container>

        {/* ── Banner ── */}
        <div className="lm-banner mb-4">
          <Row className="align-items-center gy-3">
            <Col md={6}>
              <h2 className="banner-title">👷 Job Marketplace</h2>
              <p className="banner-sub">Browse harvest jobs and apply directly to farmers</p>
            </Col>
            <Col md={6}>
              <div className="d-flex gap-3 flex-wrap justify-content-md-end">
                <div className="banner-stat">
                  <span className="banner-stat-num">{jobs.length}</span>
                  <div className="banner-stat-label">Total Jobs</div>
                </div>
                <div className="banner-stat">
                  <span className="banner-stat-num">{urgentCount}</span>
                  <div className="banner-stat-label">Urgent</div>
                </div>
                <div className="banner-stat">
                  <span className="banner-stat-num">{appliedIds.length}</span>
                  <div className="banner-stat-label">Applied</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* ── Filter Bar ── */}
        <div className="lm-filter-bar">
          <Row className="align-items-center g-2">
            <Col md={5}>
              <input
                type="text"
                className="form-control lm-search"
                placeholder="🔍  Search jobs or locations..."
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

        {/* ── Results ── */}
        <h5 className="section-heading">
          💼 {filtered.length} Job{filtered.length !== 1 ? "s" : ""} Available
        </h5>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <span className="empty-emoji">🔍</span>
            <h5 className="text-muted">No jobs found</h5>
            <p className="text-muted">Try a different search or filter.</p>
          </div>
        ) : (
          <Row className="g-3">
            {filtered.map((job) => (
              <Col md={4} key={job.id}>
                <Card className={`jm-card shadow-sm ${job.urgent ? "urgent" : ""}`}>
                  <Card.Body className="p-3">

                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="job-emoji">{job.emoji || "💼"}</span>
                      <div className="d-flex gap-1 flex-wrap justify-content-end">
                        <Badge className="type-badge" bg={TYPE_COLOR[job.type] || "secondary"}>
                          {job.type}
                        </Badge>
                        {job.urgent && (
                          <Badge className="type-badge" bg="danger">🔥 Urgent</Badge>
                        )}
                      </div>
                    </div>

                    <div className="job-title mb-1">{job.title}</div>

                    <div className="job-salary mb-2">
                      ₹{job.salary}/day
                    </div>

                    <div className="mb-3">
                      <div className="job-meta">📍 {job.location}</div>
                      <div className="job-meta">📅 {job.date || "Flexible"}</div>
                      <div className="job-meta">👷 {job.workers} workers needed</div>
                    </div>

                    <Button
                      className="btn-apply-job w-100"
                      disabled={appliedIds.includes(job.id)}
                      onClick={() => handleApply(job.id, job.title)}
                    >
                      {appliedIds.includes(job.id) ? "✔ Applied" : "Apply Now"}
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

export default LaborMarketplace;

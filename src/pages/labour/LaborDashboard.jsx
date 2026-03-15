import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";


// ── Sample Data ───────────────────────────────
const availableJobs = [
  {
    id: 1, title: "Wheat Harvesting",   emoji: "🌾",
    location: "Ludhiana, Punjab",       salary: 650,
    workers: 10, date: "15 Mar 2026",   type: "Harvesting",   urgent: true,
  },
  {
    id: 2, title: "Rice Field Planting", emoji: "🍚",
    location: "Warangal, Telangana",    salary: 550,
    workers: 8,  date: "18 Mar 2026",   type: "Planting",     urgent: false,
  },
  {
    id: 3, title: "Sugarcane Cutting",  emoji: "🎋",
    location: "Kolhapur, Maharashtra",  salary: 700,
    workers: 15, date: "20 Mar 2026",   type: "Harvesting",   urgent: true,
  },
];

const myApplications = [
  { job: "Tomato Picking",   location: "Nashik",   date: "10 Mar",  status: "Pending",  pay: "₹500/day" },
  { job: "Cotton Harvesting",location: "Gujarat",  date: "05 Mar",  status: "Accepted", pay: "₹650/day" },
  { job: "Onion Harvesting", location: "Pune",     date: "01 Mar",  status: "Completed",pay: "₹480/day" },
];

const tips = [
  { icon: "💡", title: "Stay Updated",   text: "Check new job postings daily for the best opportunities near you." },
  { icon: "⭐", title: "Build Reputation",text: "Complete jobs on time to get 5-star ratings from farmers." },
  { icon: "📱", title: "Stay Reachable",  text: "Keep your contact details updated to receive job offers quickly." },
];

const statusColor = { Pending: "warning", Accepted: "success", Completed: "secondary" };

const LaborDashboard = () => {
  const [appliedIds, setAppliedIds] = useState([2]); // job id 2 already applied

  const handleApply = (id, title) => {
    setAppliedIds([...appliedIds, id]);
    alert(`✅ Applied for "${title}"!`);
  };

  const totalEarned  = 3200;
  const jobsCompleted = 6;
  const rating        = 4.8;

  return (
    <div className="labor-dashboard">
      <Container>

        {/* ── Hero Banner ── */}
        <div className="labor-hero mb-4">
          <Row className="align-items-center gy-3">
            <Col md={6}>
              <div className="d-flex align-items-center gap-3">
                <div className="hero-avatar">👷</div>
                <div>
                  <h2 className="hero-title">Labor Dashboard</h2>
                  <p className="hero-subtitle">Find harvest jobs near you</p>
                  <span className="hero-badge">⭐ Rating: {rating}/5</span>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="d-flex gap-3 flex-wrap justify-content-md-end">
                <div className="hero-stat-box">
                  <span className="hero-stat-num">{availableJobs.length}</span>
                  <div className="hero-stat-label">New Jobs</div>
                </div>
                <div className="hero-stat-box">
                  <span className="hero-stat-num">{jobsCompleted}</span>
                  <div className="hero-stat-label">Completed</div>
                </div>
                <div className="hero-stat-box">
                  <span className="hero-stat-num">₹{totalEarned.toLocaleString()}</span>
                  <div className="hero-stat-label">Earned</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* ── Stat Cards ── */}
        <Row className="g-3 mb-4">
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#ffa502,#e67e00)" }}>
              <Card.Body>
                <span className="stat-icon">💼</span>
                <div className="stat-num">{availableJobs.length}</div>
                <div className="stat-lbl">Open Jobs</div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#2ed573,#1abc6a)" }}>
              <Card.Body>
                <span className="stat-icon">✅</span>
                <div className="stat-num">{jobsCompleted}</div>
                <div className="stat-lbl">Jobs Done</div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#1e90ff,#0052cc)" }}>
              <Card.Body>
                <span className="stat-icon">📋</span>
                <div className="stat-num">{myApplications.length}</div>
                <div className="stat-lbl">Applications</div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className="stat-card shadow text-center text-white"
              style={{ background: "linear-gradient(135deg,#a29bfe,#6c5ce7)" }}>
              <Card.Body>
                <span className="stat-icon">💰</span>
                <div className="stat-num">₹{totalEarned.toLocaleString()}</div>
                <div className="stat-lbl">Total Earned</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* ── Available Jobs ── */}
        <h5 className="section-heading">💼 Available Jobs Near You</h5>
        <Row className="g-3 mb-5">
          {availableJobs.map((job) => (
            <Col md={4} key={job.id}>
              <Card className="job-card shadow-sm h-100">
                <Card.Body className="p-3">

                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span style={{ fontSize: "2.2rem" }}>{job.emoji}</span>
                    <div className="d-flex gap-1 flex-wrap justify-content-end">
                      <Badge bg="light" text="dark" className="crop-badge">{job.type}</Badge>
                      {job.urgent && <Badge bg="danger" className="crop-badge">🔥 Urgent</Badge>}
                    </div>
                  </div>

                  <div className="job-title mb-1">{job.title}</div>

                  <div className="job-salary mb-2">₹{job.salary}/day</div>

                  <div className="mb-3">
                    <div className="job-meta">📍 {job.location}</div>
                    <div className="job-meta">📅 {job.date}</div>
                    <div className="job-meta">👷 {job.workers} workers needed</div>
                  </div>

                  <Button
                    className="btn-apply w-100"
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

        {/* ── My Applications ── */}
        <h5 className="section-heading">📋 My Applications</h5>
        <div className="app-table-wrap mb-5">
          <Table className="app-table mb-0" responsive hover>
            <thead>
              <tr>
                <th>Job</th>
                <th>Location</th>
                <th>Applied On</th>
                <th>Pay</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myApplications.map((app, i) => (
                <tr key={i}>
                  <td><strong>{app.job}</strong></td>
                  <td>📍 {app.location}</td>
                  <td>📅 {app.date}</td>
                  <td className="text-success fw-bold">{app.pay}</td>
                  <td>
                    <Badge bg={statusColor[app.status]} className="status-pill">
                      {app.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        {/* ── Tips ── */}
        <h5 className="section-heading">💡 Tips for Laborers</h5>
        <Row className="g-3">
          {tips.map((tip, i) => (
            <Col md={4} key={i}>
              <Card className="tip-card shadow-sm h-100">
                <Card.Body className="p-3">
                  <span className="tip-icon">{tip.icon}</span>
                  <strong style={{ color: "#1a1a2e" }}>{tip.title}</strong>
                  <p className="mt-2 mb-0 text-muted" style={{ fontSize: "0.87rem" }}>
                    {tip.text}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </div>
  );
};

export default LaborDashboard;

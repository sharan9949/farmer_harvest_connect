import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const PostJob = () => {

  const [job, setJob] = useState({
    title: "",
    location: "",
    salary: "",
    workers: "",
    date: "",
    description: ""
  });

  const [toast, setToast] = useState(false);

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));

    // Show toast instead of alert
    setToast(true);
    setTimeout(() => setToast(false), 3000);

    setJob({ title: "", location: "", salary: "", workers: "", date: "", description: "" });
  };

  return (
    <div className="postjob-page">
      <Container>
        <Card className="postjob-card mx-auto" style={{ maxWidth: "560px" }}>

          {/* ── Header Banner ── */}
          <div className="postjob-header">
            <div className="d-flex align-items-center gap-3">
              <span className="postjob-header-icon">📋</span>
              <div>
                <h3 className="postjob-header-title">Post Harvest Job</h3>
                <p className="postjob-header-sub">Fill in the details to find workers</p>
              </div>
            </div>
          </div>

          {/* ── Form Body ── */}
          <Card.Body className="postjob-body">
            <Form onSubmit={handleSubmit}>

              {/* Job Title */}
              <Form.Group className="mb-3">
                <Form.Label>Job Title</Form.Label>
                <div className="input-icon-wrap">
                  <span className="input-icon">💼</span>
                  <Form.Control
                    type="text"
                    name="title"
                    value={job.title}
                    onChange={handleChange}
                    placeholder="e.g. Wheat Harvesting, Rice Picking"
                    required
                  />
                </div>
              </Form.Group>

              {/* Location */}
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <div className="input-icon-wrap">
                  <span className="input-icon">📍</span>
                  <Form.Control
                    type="text"
                    name="location"
                    value={job.location}
                    onChange={handleChange}
                    placeholder="Village / District / State"
                    required
                  />
                </div>
              </Form.Group>

              {/* Salary + Workers side by side */}
              <div className="input-row mb-3">
                <Form.Group>
                  <Form.Label>Salary / Day</Form.Label>
                  <div className="input-icon-wrap">
                    <span className="input-icon">💰</span>
                    <Form.Control
                      type="number"
                      name="salary"
                      value={job.salary}
                      onChange={handleChange}
                      placeholder="₹ Amount"
                      required
                    />
                  </div>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Workers Needed</Form.Label>
                  <div className="input-icon-wrap">
                    <span className="input-icon">👷</span>
                    <Form.Control
                      type="number"
                      name="workers"
                      value={job.workers}
                      onChange={handleChange}
                      placeholder="No. of workers"
                      required
                    />
                  </div>
                </Form.Group>
              </div>

              {/* Date */}
              <Form.Group className="mb-3">
                <Form.Label>Work Date</Form.Label>
                <div className="input-icon-wrap">
                  <span className="input-icon">📅</span>
                  <Form.Control
                    type="date"
                    name="date"
                    value={job.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </Form.Group>

              <div className="form-divider" />

              {/* Description */}
              <Form.Group className="mb-4">
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={job.description}
                  onChange={handleChange}
                  placeholder="Describe the work, requirements, timings, etc."
                />
              </Form.Group>

              <Button type="submit" className="btn-postjob w-100">
                🚀 Post Job Now
              </Button>

            </Form>
          </Card.Body>

        </Card>
      </Container>

      {/* ── Toast Notification ── */}
      {toast && (
        <div className="success-toast">
          ✅ Job Posted Successfully!
        </div>
      )}

    </div>
  );
};

export default PostJob;

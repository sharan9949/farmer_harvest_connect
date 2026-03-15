import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const JobCard = ({ job }) => {

  const handleApply = () => {
    alert("Job Application Sent");
  };

  return (

    <Col md={4} className="mb-4">

      <Card className="shadow">

        <Card.Body>

          <Card.Title>{job.title}</Card.Title>

          <Card.Text>
            Location: {job.location}
          </Card.Text>

          <Card.Text>
            Salary: ₹{job.salary}
          </Card.Text>

          <Card.Text>
            Workers Needed: {job.workers}
          </Card.Text>

          <Button variant="primary" onClick={handleApply}>
            Apply Job
          </Button>

        </Card.Body>

      </Card>

    </Col>

  );
};

export default JobCard;
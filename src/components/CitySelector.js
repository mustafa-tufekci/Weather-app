import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState("");

  return (
    <>
      <Row>
        <Col>
          <h1>Weather App</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={6} className="text-center">
          <Form.Control
            type="text"
            placeholder="Enter City"
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Button
            variant="primary"
            type="submit"
            onClick={() => onSearch(city)}
          >
            Search
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;

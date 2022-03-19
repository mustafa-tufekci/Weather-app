import WeatherCard from "./WeatherCard";
import { Col, Row } from "react-bootstrap";

const WeatherList = ({ weathers }) => {
  return (
    <Row>
      {weathers.map(({ dt, main, weather }) => (
        <Col key={dt}>
          <WeatherCard
            dt={dt * 1000}
            temp_min={main.temp_min}
            temp_max={main.temp_max}
            // main={weather[0].main}
            desc={weather[0].description}
            icon={weather[0].icon}
          />
        </Col>
      ))}
    </Row>
  );
};

export default WeatherList;

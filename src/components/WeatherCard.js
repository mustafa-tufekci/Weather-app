import React from "react";
import { Card } from "react-bootstrap";
import classes from "./WeatherCard.module.css"

const WeatherCard = ({ dt, temp_min, temp_max, main, icon, desc }) => {
  const date = new Date(dt);
  return (
    <div className={classes.Card}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
      />
      <Card.Body>
        <Card.Title>{desc}</Card.Title>
        <p>
          <span style={{ fontSize: "1rem", fontWeight: "500" }}>
            {date.toLocaleTimeString()}
          </span>
          <br />
          {date.toLocaleDateString()}
        </p>
        {/* minimum temperature */}
        <p>Min: {temp_min}</p>
        {/* maximum temperature */}
        <p>Max: {temp_max}</p>
      </Card.Body>
    </div>
  );
};

export default WeatherCard;

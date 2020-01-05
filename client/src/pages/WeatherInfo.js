import React from "react";

import Skycons from "react-skycons";
import { Col } from "react-bootstrap";
export default function WeatherInfo({ weather, location }) {
  return (
    <Col sm={12} md={6} className="mx-auto text-center">
      <h4>{location}</h4>
      <Skycons className="w-auto h-auto" color="white" icon={weather.icon} />
      <h4>
        {weather.temperature}&deg;{weather.units}
      </h4>
      <h4>{weather.summary}</h4>
    </Col>
  );
}

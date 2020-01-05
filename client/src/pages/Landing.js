import React, { Component } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { Container, Row, Col, Jumbotron, Form } from "react-bootstrap";
import "./landing.css";
import WeatherInfo from "../pages/WeatherInfo";
import Axios from "axios";
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { city: "", latlng: "", loading: false };
  }
  async setWeather(coords, city) {
    if (!coords || coords === "") return;
    const url = "/api/weather/" + coords;

    Axios.get(url).then((res, rej) => {
      if (rej) console.log(rej);
      else if (res) {
        this.setState({ weather: res.data, city: city, loading: false });
      }
    });
  }
  componentDidMount() {
    var places = require("places.js");
    var placesAutoComplete = places({
      container: document.querySelector("#address-input"),
      type: "city",
      useDeviceLocation: false
    });
    placesAutoComplete.on("change", async e => {
      this.setState({ loading: true });
      var latlng = e.suggestion.latlng.lat + "," + e.suggestion.latlng.lng;
      var city = e.suggestion.value;
      await this.setWeather(latlng, city);
      placesAutoComplete.setVal("");
    });
  }
  render() {
    return (
      <React.Fragment>
        <Jumbotron className="d-flex-column align-items-center justify-content-center mx-auto bg-transparent">
          <h4 className="text-center">
            Enter a location, postal code or place
          </h4>
          <Form.Control
            type="search"
            id="address-input"
            className="w-sm-100 w-md-50 mx-auto text-dark"
          />
        </Jumbotron>
        <Container>
          <Row className="justify-content-around">
            {this.state.weather ? (
              <WeatherInfo
                location={this.state.city}
                weather={this.state.weather}
              />
            ) : (
              <Col sm={12} md={6} className="mx-auto text-center">
                <BeatLoader loading={this.state.loading} color="#fff" />
              </Col>
            )}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

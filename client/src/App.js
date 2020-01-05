import React, { Component } from "react";
import { Ripple } from "react-preloaders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "./layout/Layout";
import Navigation from "./layout/Navigation";
import Landing from "./pages/Landing";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <React.Fragment>
        <Ripple
          customLoading={this.state.loading}
          background="rgb(35,45,60)"
          color="#fff"
        />
        <Router>
          <Navigation />
          <Layout>
            <Switch>
              <Route exact path="/" component={Landing} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

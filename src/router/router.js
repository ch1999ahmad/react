import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import Home2 from '../components/home2'
class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/home2" component={Home2} />
        <Route exact path="/Home" component={Home} />
        
      </React.Fragment>
    );
  }
}
export default ReactRouter;

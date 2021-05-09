import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import Home from "./components/pages/Home";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
       
        <Route exact path="/about" component={Home} />
        </Wrapper>
      </div>
    </Router>

  );
}

export default App;
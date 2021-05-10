import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    
    <HashRouter>
      <div>
        <Wrapper>
        <Route exact path="/about" component={Home} />
        
        </Wrapper>
      </div>
    </HashRouter>

  );
}

export default App;
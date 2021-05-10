import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    
    <HashRouter basename="/">
      <div>
        <Wrapper>
        <Route path="/about" component={Home} />
        
        </Wrapper>
      </div>
    </HashRouter>

  );
}

export default App;
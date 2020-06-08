import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";

function App() {
  return (
    <Router>
      <div>
        {/* Nav bar tabs first */}
        <NavTabs />
        {/* react router is responding to what the path is */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/help" component={Help} />
      </div>
    </Router>
  );
}

export default App;

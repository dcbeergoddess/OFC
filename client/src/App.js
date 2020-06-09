import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import History from "./pages/History";
import EventMain from "./pages/EventMain";

function App() {
  return (
    <Router>
      <div>
        {/* Nav bar tabs first */}
        <NavTabs />
        {/* react router is responding to what the path is */}
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/EventMain" component={EventMain}/>
      </div>
    </Router>
  );
}

export default App;

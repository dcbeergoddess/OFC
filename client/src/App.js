import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import History from "./pages/History";
import EventMain from "./pages/EventMain";
import EventDetail from "./pages/EventDetail";
import AddEvent from "./pages/AddEvent";


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
        <Route path="/EventDetail" component={EventDetail}/>
        <Route path="/AddEvent" component={AddEvent}/>
      </div>
    </Router>
  );
}

export default App;

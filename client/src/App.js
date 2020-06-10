import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import EventCard from "./components/EventCard";
import Home from "./pages/Home";
import History from "./pages/History";
import EventMain from "./pages/EventMain";
import EventDetail from "./pages/EventDetail";
import AddEvent from "./pages/AddEvent";
import AddComment from "./pages/AddComment";


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
        <Route path="/AddComment" component={AddComment}/>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import {Link, Route} from "react-router-dom";
import TimelineCard from "../components/TimelineCard"
import timelineJson from "../timeline.json"
import Stats from "./Stats"

function History(props){
  return (
    <>
      <h1>History of Systemic Inequality</h1>

      <div>
        {timelineJson.map(timeline => (
          <TimelineCard 
          key={timeline.id}
          title={timeline.title}
          date={timeline.date}
          image={timeline.image}
          text={timeline.text}
          />
        ))}
      </div>

      <Link to={`${props.match.url}/stats`} role="button" className="btn btn-link">
        SHOW Stats
      </Link>{" "}
      <Link to="/history" role="button" className="btn btn-link">
        Hide Stats
      </Link>

      <Route exact path={`${props.match.url}/stats`} component={Stats} />
    </>
  );
}

export default History;
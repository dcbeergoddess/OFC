import React from "react";
import {Link, Route} from "react-router-dom";
import {Flex} from "../components/Flex";
import TimelineCard from "../components/TimelineCard/TimelineCard";
import timelineJson from "../timeline.json";
import Stats from "./Stats";


function History(props){
  return (

    <>

    <div className='container' style={{width:'100vw', minHeight:'100vh', paddingBottom: '50px'}}>
      <h1 style={{paddingTop:"20px"}}>History of Systemic Inequality</h1>
      <Flex container width="100%" margin="auto" justifyContent="space-around">
        {timelineJson.map(timeline => (
          <TimelineCard
          key={timeline.id}
          title={timeline.title}
          date={timeline.date}
          image={timeline.image}
          text={timeline.text}
          />
        ))}
      </Flex>

      <Link to={`${props.match.url}/stats`} role="button" className="btn btn-link">
        Show Stats
      </Link>{" "}
      <Link to="/history" role="button" className="btn btn-link">
        Hide Stats
      </Link>

      <Route path={`${props.match.url}/stats`} component={Stats} />
    </div>

    </>
  );
}

export default History;
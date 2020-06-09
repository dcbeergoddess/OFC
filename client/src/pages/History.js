import React from "react";
import {Link, Route} from "react-router-dom";
import Stats from "./stats"

function History(props){
  return (
    <div>
      <h1>History of Change</h1>
      <p>
        I'm baby pitchfork hashtag waistcoat bitters fanny pack seitan disrupt cold-pressed slow-carb. Chia activated charcoal vaporware dreamcatcher hell of try-hard. Godard pop-up salvia hammock artisan fashion axe. Semiotics DIY photo booth normcore, austin direct trade tilde +1. Freegan cardigan you probably haven't heard of them disrupt. Quinoa pinterest gastropub, tofu tilde distillery meh fingerstache small batch cold-pressed truffaut disrupt photo booth.
      </p>

      <Link to={`${props.match.url}/stats`} role="button" className="btn btn-link">
        SHOW Stats
      </Link>{" "}
      <Link to="/history" role="button" className="btn btn-link">
        Hide Stats
      </Link>

      <Route exact path={`${props.match.url}/stats`} component={Stats} />
    </div>
  );
}

export default History;
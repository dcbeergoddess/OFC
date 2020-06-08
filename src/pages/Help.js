import React from "react";
import {Link, Route} from "react-router-dom";
import Faq from "./Faq"

function Help(props){
  return (
    <div>
      <h1>Help Page</h1>
      <p>
        I'm baby pitchfork hashtag waistcoat bitters fanny pack seitan disrupt cold-pressed slow-carb. Chia activated charcoal vaporware dreamcatcher hell of try-hard. Godard pop-up salvia hammock artisan fashion axe. Semiotics DIY photo booth normcore, austin direct trade tilde +1. Freegan cardigan you probably haven't heard of them disrupt. Quinoa pinterest gastropub, tofu tilde distillery meh fingerstache small batch cold-pressed truffaut disrupt photo booth.
      </p>

      <Link to={`${props.match.url}/faq`} role="button" className="btn btn-link">
        SHOW FAQ
      </Link>{" "}
      <Link to="/help" role="button" className="btn btn-link">
        Hide FAQ
      </Link>

      <Route exact path={`${props.match.url}/faq`} component={Faq} />
    </div>
  );
}

export default Help;
import React from "react";
import {Link, Route} from "react-router-dom";


function EventMain(props){
  return (
    <div>
      <h1>Event Main Page</h1>
      <p>
      Bacon ipsum dolor amet corned beef kielbasa flank, swine capicola chislic salami chicken pork belly beef. Biltong venison prosciutto capicola chicken beef ribs drumstick fatback corned beef t-bone porchetta filet mignon turkey. Pork loin picanha andouille porchetta shoulder. Venison cow t-bone pork belly tri-tip salami flank short ribs beef ribs chislic sausage turkey landjaeger. Tri-tip pork belly beef jerky kevin.
      </p>

      <Link to="/" role="button" className="btn btn-link">
        Go Back
      </Link>

      <Route exact path={`${props.match.url}/EventMain`} component={EventMain} />
    </div>
  );
}

export default EventMain;
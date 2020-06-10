import React from "react";
import {Link, Route} from "react-router-dom";


function AddEvent(props){
  return (
    <div>
      <h1>Add Event Form Page</h1>
      <h2>this page will have a form component</h2>
      <p>
      Curl into a furry donut plays league of legends cough furball. Why use post when this sofa is here. Stuff and things Gate keepers of hell do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life stand with legs in litter box, but poop outside bite off human's toes yet sleeps on my head so cats are the world. Stuff and things. Rub butt on table lick arm hair. Give me some of your food give me some of your food give me some of your food meh, i don't want it lick human with sandpaper tongue or find empty spot in cupboard and sleep all day eat all the power cords so rub face on everything attack dog, run away and pretend to be victim so mew. Ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss cat dog hate mouse eat string barf pillow no baths hate everything but while happily ignoring when being called poop in litter box, scratch the walls run outside as soon as door open.
      </p>

      <Link to="/EventMain" role="button" className="btn btn-link">
        Go Back
      </Link>

      <Route exact path={`${props.match.url}/AddEvent`} component={AddEvent} />
    </div>
  );
}

export default AddEvent;
import React from "react";
import "../components/Flex"
import "./Home.css"

function Home() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Black Lives Matter</h1>
          <p className="lead">Login or Sign Up to Find Events in the DMV Area</p>
        </div>
      </div>
      <h1>Organizing for Change</h1>
      <p>
        Organizing for Change is a site that supports the critical mass of activists in the DMV area who envision a vibrant world in which people of all races create, share and enjoy resources and relationships equitably. By signing up, activists can view and add events happing in the DC area related to building awareness and solutions for racial justice.
      </p>

      <a href="/EventMain" role="button" className="btn btn-link">
        See Events
      </a>
    </>

  );
}

export default Home;

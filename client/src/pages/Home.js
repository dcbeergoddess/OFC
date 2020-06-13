import React from "react";
import {Link } from 'react-router-dom'
import "../components/Flex"
import "./Home.css"

function Home() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4"></h1>
          <p className="lead"></p>
        </div>
      </div>
      <p style={{fontFamily:"roboto", fontSize: "2.5em"}}>Login or Sign Up to Find Events in the DMV Area</p>
      <p  style={{fontFamily:"roboto", fontSize: "1.5em", textAlign: "center"}}>
        Organizing for Change is a site that supports the critical mass of activists in the DMV area who envision a vibrant world in which people of all races create, share and enjoy resources and relationships equitably. By signing up, activists can view and add events happing in the DC area related to building awareness and solutions for racial justice.
      </p>

      <Link to="/EventMain" role="button" className="btn btn-lg btn-dark" style={{display: "flex", alignItems: "center", justifyContent: "center", color: "#FAFAD2"}}>
        See Events
      </Link>
    </>

  );
}

export default Home;

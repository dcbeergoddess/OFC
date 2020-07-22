import React from "react";
import "./Home.css"
// import { Jumbotron } from "react-bootstrap";

function Home() {
  return (
    <>
      {/* <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <p className="lead"></p>
        </div>
      </div> */}
      <div className='container' style={{width:'100vw', minHeight:'100vh', paddingBottom: '50px'}}>
      <p style={{fontFamily:"Georgia", fontSize: "3em"}}>Login or Sign Up to Find Events in the DMV Area</p>
      <p  style={{fontFamily:"Georgia", fontSize: "1.5em", textAlign: "left", padding: "0px 50px 0px 50px"}}>
        Organizing for Change is a site that supports the critical mass of activists who envision a vibrant world in which people of all races create, share and enjoy resources and relationships equitably.</p>
        
        <p  style={{fontFamily:"Georgia", fontSize: "1.5em", textAlign: "left", padding: "0px 50px 0px 50px"}}> By signing up, activists can view and add events happening in the DC area related to building awareness and solutions for racial justice. Click on the History of Inequality link to see a timeline of historical steps towards equality in the US.
      </p>
      </div>
    </>

  );
}

export default Home;

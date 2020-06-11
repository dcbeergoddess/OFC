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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
        varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
        Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
        imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
        ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
        elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
        consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>

      <a href="/EventMain" role="button" className="btn btn-link">
        See Events
      </a>
    </>

  );
}

export default Home;

import React from "react";
import {Table} from "react-bootstrap"

function Stats() {
  return (
    <div className='container' style={{width:'100vw', paddingBottom: '50px'}}>
      <h1 className="text-center">Influence on Race in the COVID-19 Pandemic</h1>
      <p>
      The 2019 Coronavirus Disease pandemic showed a lot in the United States' ability to handle a major crisis. This pandemic affected the country as whole on multiple levels: socially, economically, politically, health-wise, etc. It tests our resolve to face major uncertainity and stand united. However, it's also shown how past societal issues and pressures influenced the way COVID-19 impacts our country. One of those ways is through race. It's been proven that the pandemic has affected certain racial groups more than others. African-Americans have been affected by this virus at nearly six time the rate comapared to white Americans at a nationally level. Here, in the DMV area, this racial pressure correlation continues. The stats will show that the COVID-19 positivity case rates, the death rates, and the overall response rates have proportionally affected black Americans over the rest of the racial counterparts:
      </p>

      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>State</th>
      <th>Case Total</th>
      <th>Case (White total)</th>
      <th>Case (Black total)</th>
      <th>Case (Latinx total)</th>
      <th>Case (Asian total)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DC</td>
      <td>10847</td>
      <td>2218</td>
      <td>5354</td>
      <td>N/A</td>
      <td>169</td>
    </tr>
    <tr>
      <td>MD</td>
      <td>73109</td>
      <td>14797</td>
      <td>21160</td>
      <td>19452</td>
      <td>1426</td>
    </tr>
    <tr>
      <th>VA</th>
      <th>70670</th>
      <th>15385</th>
      <th>10773</th>
      <th>23343</th>
      <th>2275</th>
    </tr>
  </tbody>
</Table>
    </div>
  );
}

export default Stats;
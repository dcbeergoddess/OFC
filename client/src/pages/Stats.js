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
      <th>Cases (White Only)</th>
      <th>Cases (Black Only)</th>
      <th>Cases (LatinX Only)</th>
      <th>Cases (Asian Only)</th>
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
<br></br>

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>State</th>
      <th>Death Total</th>
      <th>Deaths (White Only)</th>
      <th>Deaths (Black Only)</th>
      <th>Deaths (LatinX Only)</th>
      <th>Deaths (Asian Only)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DC</td>
      <td>568</td>
      <td>60</td>
      <td>421</td>
      <td>74</td>
      <td>8</td>
    </tr>
    <tr>
      <td>MD</td>
      <td>3319</td>
      <td>1424</td>
      <td>1344</td>
      <td>369</td>
      <td>129</td>
    </tr>
    <tr>
      <th>VA</th>
      <th>1966</th>
      <th>1058</th>
      <th>455</th>
      <th>216</th>
      <th>114</th>
    </tr>
  </tbody>
</Table>

    </div>
  );
}

export default Stats;
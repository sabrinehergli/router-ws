import React from 'react'

import { Link, Route } from 'react-router-dom';

const Category = ({ match }) => {
    console.log(match);
return( <div> <ul>
    <li><Link to={`${match.url}/shoes`}>Shoes</Link></li>
    <li><Link to={`${match.url}/boots`}>Boots</Link></li>
    <li><Link to={`${match.url}/footwear`}>Footwear</Link></li>

  </ul>
  <Route path={`${match.path}/:name`} render= {({match}) =>
  ( <div> 
      <h3> {match.params.name}</h3>
      {console.log(match.params)}
      </div>)
  
  }/>
  </div>)
}

export default Category

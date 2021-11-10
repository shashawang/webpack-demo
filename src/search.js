'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
// import pic from './pic.jpeg'
import smPic from './pic.jpeg'
import './search.less'

class Search extends React.Component {
  render(h) {
    return <div className="search_text">Search Text...888
      <img src={smPic} />
    </div>;
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
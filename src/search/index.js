'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
// import pic from './pic.jpeg'
import smPic from '../pic.jpeg'
import './search.less'
import '../../common';
import {a} from './tree-shaking'

class Search extends React.Component {
  render(h) {
    const text = a()
    return <div className="search_text">Search Text...888
      <img src={smPic} />
    </div>;
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
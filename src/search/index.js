'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
// import pic from './pic.jpeg'
import smPic from '../pic.jpeg'
import './search.less'
import '../../common';
import {a} from './tree-shaking'

class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null
    }
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
  }

  render(h) {
    const {Text} = this.state
    return <div className="search_text">Search Text...888
      {
        Text ? <Text /> : null
      }
      <img src={smPic} onClick={this.loadComponent.bind(this)} />
    </div>;
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
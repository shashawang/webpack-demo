import _ from 'lodash';
import './style.css';
import masterMiao from './masterMiao.png';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
    myIcon.src = masterMiao;
    element.appendChild(myIcon);

    console.log(Data);

    return element;
  }
  
  document.body.appendChild(component());
  
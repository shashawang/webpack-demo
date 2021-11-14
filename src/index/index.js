import { cube } from './math.js';
import '../../common';

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '3 cubed is equal to ' + cube(3)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
  
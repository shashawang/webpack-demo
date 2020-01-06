// import _ from 'lodash';
// import { file, parse } from './globals.js';
var  { file, parse }=require('./globals.js') //官网的引入方式会报错，貌似是因为common.js语法问题

function component() {
  var element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  // Assume we are in the context of `window`
  // this.alert('Hmmm, this probably isn\'t a great idea...')
  // this.alert(file)
  // parse()

  return element;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
    console.log(json)
  })
  .catch(error => console.error('Something went wrong when fetching this data: ', error))

// import _ from 'lodash';

// function component() {
// function getComponent() {
async function getComponent() {
  // var element = document.createElement('div');
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // return element;

  // 使用import
  // return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
  //   var element = document.createElement('div');
  //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //   return element;
  // }).catch(error => 'An error occurred while loading the component');

  // 使用async结合import
   var element = document.createElement('div');
   const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
}

// document.body.appendChild(component());
getComponent().then(component => {
  document.body.appendChild(component);
})

// 打包结果都会有index.html，而且lodash.bundle.js在我的打包结果里有vendors~前缀

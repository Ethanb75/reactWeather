//the e argument is short for event
var React = require('react');
var ReactDOM = require('react-dom');
//es6 syntax object destructuring
//ex below 
// var obj = {
// 	name: 'bob'
// }
// is the same as... 
// var {name} = obj;
//configures routes for our single app
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


//load in foundation in js (wew lad)
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//require for our custom app.css
require('style!css!applicationStyle');

ReactDOM.render(
	// use the name attribute plus ="" to pass values into the render function
	// the path route will be rendered if the route is '/' then 'about'
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path="about" component={About}/>
				<Route path="examples" component={Examples}/>
				<IndexRoute component={Weather}/>
			</Route>
		</Router>,
		document.getElementById('app')
);
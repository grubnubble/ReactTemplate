var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
	name: 'Montana',
	location: 'Austin'
};

var objTwo = {
	age: 28,
	...objOne
};

console.log(objTwo);

ReactDOM.render(
	<h1>Boilerplate App!</h1>,
	document.getElementById('app')
);
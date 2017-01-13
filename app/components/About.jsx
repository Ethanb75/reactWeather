var React = require('react');
// var About = React.createClass({
//     render: function(){
//         return (
//             <h3>About component</h3>
//         );
//     }
// });
//below is a stateless method that can be defined in react 
//using arrow functions you can render this h3 without having to define render
var About = (props) => {
    return (
           <h3>About component</h3>
       );     
};
module.exports = About;
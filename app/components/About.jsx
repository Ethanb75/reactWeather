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
            <div>
                <h1 className="text-center">About</h1>
                <p>
                    This is a small learning experiment using <a href="https://facebook.github.io/react/">React</a>. I used the free <a href="http://openweathermap.org/">Open Weather Map</a> api.
                     The source code for the project is available on <a href="https://github.com/Ethanb75/reactWeather">Github</a>. <hr /> While i normally
                     use bootstrap for styling, i used foundation this time to broaden my skillset and try something new.
                </p>
            </div>
           
       );     
};
module.exports = About;
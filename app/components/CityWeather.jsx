var React = require('react');
// var CityWeather = React.createClass({
//     render: function(){
//         var {temp, location} = this.props;
//         return (
//             <h1>In {location}, it is {temp}</h1>
//         );
//     },
// });

var CityWeather = (props) => {
     var {temp, location} = props;
        return (
            <h2 className="text-center">In {location}, it is {temp}</h2>
        );
};
module.exports = CityWeather;
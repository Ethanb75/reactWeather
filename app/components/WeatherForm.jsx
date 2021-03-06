var React = require('react');
var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        // prevents entire page from refreshing
        e.preventDefault();
        var location = this.refs.location.value;
        
        if (location.length > 0 ){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function(){
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="search" ref="location" placeholder="type in a city or zip"/>
                <button className="hollow expanded button">Get Weather</button>
            </form>
        );
    },
});
module.exports = WeatherForm;
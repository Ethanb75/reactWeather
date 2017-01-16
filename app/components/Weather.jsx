var React = require('react');
var WeatherForm = require('WeatherForm');
var CityWeather = require('CityWeather');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false,
        };
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({
                isLoading: true,
                errorMessage: undefined
            });
            
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false,
            });
        }, function(e){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
        //takes our object of attributes
        // this.setState({
        //     location: location,
        //     temp: 23
        // })
    },
    render: function(){
        // var location = this.state.location;
        // var temp = this.state.temp;
        //below is the same
        var {isLoading,temp,location,errorMessage} = this.state;
        //function to determine what to render
        function renderMessage() {
            //if loading is true fetch weather
            if (isLoading){
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if (temp && location) {
                //after loading state return this
                return <CityWeather location={location} temp={temp} />;
            }
        };
        //error rendering
        function renderError(){
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        };
        return (
            <div>
                <h2 className="text-center page-title">Get yer' Weather</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});
module.exports = Weather;
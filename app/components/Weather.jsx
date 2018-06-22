var React = require('react');
var WeatherForm = require('WeatherForm')
var WeatherMessage = require('WeatherMessage')
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({
  getInitialState: function (){
    return {
      // location: 'Miami',
      // temp: 88
      isLoading: false
    }
  },
  handleSearch: function (location){
    var that = this
    this.setState({
      isLoading: true
    })
    openWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, function (errorMessage){
      that.setState({
        isLoading: false
      })
      alert(errorMessage)
    })
  },
  render: function(){
    var {isLoading, temp, location} = this.state
    // var location = this.state.location
    // var temp = this.state.temp
    function renderMessage () {
      if (isLoading){
        return <h3>Fetching Weather...</h3>
      }else if (temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

    return (
      <div>
          <h3>Get Weather</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
      </div>


    );
  }
});

module.exports = Weather;

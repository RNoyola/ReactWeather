var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (
//       <h3>About Compoment</h3>
//     );
//   }
// });
var About = (props) => {
  return (
    <div>
      <h1 className='text-center'>About</h1>
      <p>Weather application build in react becaucause I-m trying to learn this stuff</p>
      <p>Some random data</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the js framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - This was API used
        </li>
      </ul>
    </div>
  )
}

module.exports = About;

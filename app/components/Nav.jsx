var React = require('react');
//lets us create links to switch pages
var {Link, IndexLink} = require('react-router');
// var Nav = React.createClass({
//     render: function(){
//         return (
//             <div>
//                 <h2>Here</h2>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
//                 <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
//                 <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
//             </div>
//         );
//     }
// });

var Nav = (props) => {
    return (
            <div>
                <h2>Here</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
            </div>
        );
}
//we use 'Link' because we can add special styles to let you know what page is active
//But that'll apply style to every child, so we use index link to specify the parent index link and differentiate it from the children
module.exports = Nav;
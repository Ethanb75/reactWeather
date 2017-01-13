var React = require('react');
//lets us create links to switch pages
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
   onSearch: function(e){
       e.preventDefault();
       alert('not wired yet');
   },
   render: function(){
       return (
            //className prevents conflicts between the jsx class property
            <div className="top-bar">
                
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Simple React Weather</li>
                        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather</IndexLink></li>
                        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
                        <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="search weather city/zip"/>
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            
            </div>
        );
   } 
});

//we use 'Link' because we can add special styles to let you know what page is active
//But that'll apply style to every child, so we use index link to specify the parent index link and differentiate it from the children
module.exports = Nav;
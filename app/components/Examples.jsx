var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
    //code from render
    return (
        <div>
            <h1 className="text-center page-title">Examples: </h1>
            <p> Here are a few examples of locations to try</p>
            <ol className="">
                <li>
                    <Link to="/?location=Atlanta">Atlanta, GA</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, Brazil</Link>
                </li>
                <li>
                    <Link to="/?location=Tokyo">Tokyo, Japan</Link>
                </li>
            </ol>
        </div>
        
    );
};
module.exports = Examples;
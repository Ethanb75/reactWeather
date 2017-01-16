var React = require('react');
//data-reveal lets foundation know we are dealing with a modal
//data-close lets foundation know we are closing the modal when we click this
var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error',
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    //called after the dom event is run
    componentDidMount: function(){
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function(){
        var {title, message} = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
    }
});
module.exports = ErrorModal;
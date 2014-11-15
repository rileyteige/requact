/** @jsx React.DOM */
define(['React'], function (React) {
	var Book = React.createClass({
		propTypes: {
			title: React.PropTypes.string.isRequired
		},
		handleClick: function () {
			this.props.onBookSelected(this.props.title);
		},
		render: function () {
			return	<div onClick={this.handleClick} className="answer">
						<h4>{this.props.title}</h4>
					</div>
		}
	})

	return Book;
});
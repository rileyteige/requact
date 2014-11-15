/** @jsx React.DOM */
define(['React'], function (React) {
	var getRefs = function(component) {
		var result = {};
		Object.keys(component.refs).forEach(function (refName) {
			result[refName] = component.refs[refName].getDOMNode().value;
		});

		return result;
	}

	var AddGameForm = React.createClass({
		propTypes: {
			onGameFormSubmitted: React.PropTypes.func.isRequired
		},
		handleSubmit: function () {
			this.props.onGameFormSubmitted(getRefs(this));
			return false;
		},
		render: function () {
			return (
			<div className="row">
				<div className="col-md-12">
					<h1>Add Game</h1>
					<form role="form" onSubmit={this.handleSubmit}>
						<div className="form-group">
							<input ref="imageUrl" type="text" className="form-control" placeholder="Image Url" />
						</div>
						<div className="form-group">
							<input ref="answer1" type="text" className="form-control" placeholder="Answer 1" />
						</div>
						<div className="form-group">
							<input ref="answer2" type="text" className="form-control" placeholder="Answer 2" />
						</div>
						<div className="form-group">
							<input ref="answer3" type="text" className="form-control" placeholder="Answer 3" />
						</div>
						<div className="form-group">
							<input ref="answer4" type="text" className="form-control" placeholder="Answer 4" />
						</div>
					  <button type="submit" className="btn btn-default">Submit</button>
					</form>
				</div>
			</div>);
		}
	});

	return AddGameForm;
});
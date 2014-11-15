/** @jsx React.DOM */
define(['React', 'underscore', 'jsx!components/Book'], function (React, _, Book) {
	var Quiz = React.createClass({
		propTypes: {
			data: React.PropTypes.array.isRequired
		},
		getInitialState: function () {
			return _.extend({
				bgClass: 'neutral',
				showContinue: false
			}, this.props.data.selectGame());
		},
		handleBookSelected: function (title) {
			var isCorrect = this.state.checkAnswer(title);
			this.setState({
				bgClass: isCorrect ? 'pass' : 'fail',
				showContinue: isCorrect
			});
		},
		handleContinue: function () {
			this.setState(this.getInitialState());
		},
		render: function () {
			return (
			<div>
				<div className="row">
					<div className="col-md-4">
						<img src={this.state.author.imageUrl} className="authorimage col-md-3" />
					</div>
					<div className="col-md-7">
						{this.state.books.map(function (b) {
							return <Book onBookSelected={this.handleBookSelected} title={b} />
						}, this)}
					</div>
					<div className={"col-md-1 " + this.state.bgClass}/>
				</div>
				{this.state.showContinue ? (
					<div className="row">
						<div className="col-md-12">
							<input	onClick={this.handleContinue}
									type="button"
									className="btn btn-primary btn-lg pull-right"
									value="Continue"/>
						</div>
					</div>) : <span/>
				}
			</div>);
		}
	});

	return Quiz;
});

// 	var Quiz = React.createClass({
// 		propTypes: {
// 			data: React.PropTypes.array.isRequired
// 		},
// 		getInitialState: function () {
// 			return _.extend({
// 				bgClass: 'neutral',
// 				showContinue: false
// 			}, this.props.data.selectGame());
// 		},
// 		handleBookSelected: function (title) {
// 			var isCorrect = this.state.checkAnswer(title);
// 			this.setState({
// 				bgClass: isCorrect ? 'pass' : 'fail',
// 				showContinue: isCorrect
// 			});
// 		},
// 		handleContinue: function () {
// 			this.setState(this.getInitialState());
// 		},
// 		handleAddGame: function () {
// 			routie('add');
// 		},
// 		render: function () {
// 			return (
// 			<div>
// 				<div className="row">
// 					<div className="col-md-4">
// 						<img src={this.state.author.imageUrl} className="authorimage col-md-3" />
// 					</div>
// 					<div className="col-md-7">
// 						{this.state.books.map(function (b) {
// 							return <Book onBookSelected={this.handleBookSelected} title={b} />;
// 						}, this)}
// 					</div>
// 					<div className={"col-md-1 " + this.state.bgClass}/>
// 				</div>
// 				{this.state.showContinue ? (
// 					<div className="row">
// 						<div className="col-md-12">
// 							<input 	onClick={this.handleContinue}
// 									type="button"
// 									className="btn btn-primary btn-lg pull-right"
// 									value="Continue"/>
// 						</div>
// 					</div>) : <span/>
// 				}
// 				<div className="row">
// 					<div className="col-md-12">
// 						<input 	onClick={this.handleAddGame}
// 								id="addGameButton"
// 								type="button"
// 								value="Add Game"
// 								class="btn "/>
// 					</div>
// 				</div>
// 			</div>);
// 		}
// 	});
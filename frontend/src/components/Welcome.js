import React, {Component} from 'react';

class Welcome extends Component {
	logo = "user.jpg";

	state = {
		welcomeText: "Bienvenido",
		version: "versión"
	}

	componentDidMount() {
		const url1 = `http://localhost:3001/suppliers/welcome_text`;
		const url2 = `http://localhost:3001/suppliers/app_version`;
		fetch(url1)
		.then(response => response.json())
		.then(res => this.setState({welcomeText: res.text}));
		fetch(url2)
		.then(response => response.json())
		.then(res => this.setState({version: res.text}));
	}

	onContinueClick = (e) => {
		this.props.continueCallback();
	}

	render() {
		return(
			<div className="card w-25 text-center start-50 translate-middle-x " >
				<img src={this.logo} className="card-img-top "/>
				<div className="card-body ">
					<h6>{this.state.welcomeText}</h6>
					<br/>
					<button onClick={this.onContinueClick} className="btn btn-primary">Continuar</button>
				</div>
				<div className="card-footer bg-transparent text-end"><small>{this.state.version}</small></div>
			</div>
		)
	}

}

export default Welcome;
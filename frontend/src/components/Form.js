import React, {Component} from 'react';

class Form extends Component {

	nameInputRef = React.createRef();
	razonInputRef = React.createRef();
	addressInputRef = React.createRef();

	onSubmit = (e) => {
		e.preventDefault();
		const name = this.nameInputRef.current.value;
		const razon = this.razonInputRef.current.value;
		const address = this.addressInputRef.current.value;
		this.props.handleCreation({ "nombre": name, "razon": razon, "direccion": address });
	}

	render() {
		return (

			<form onSubmit={this.onSubmit}>
				<h3>Nuevo Registro</h3>
				<div className="form-group">
					<label for="nameTxt">Nombre</label>
					<input ref={this.nameInputRef} type="text" className="form-control" id="nameTxt" placeholder="Ingresar nombre" />
				</div>
				<div className="form-group">
					<label for="razonTxt">Razón Social</label>
					<input ref={this.razonInputRef} type="text" className="form-control" id="razonTxt" placeholder="Ingresar Razón Social" />
				</div>
				<div className="form-group">
					<label for="addressTxt">Dirección</label>
					<input ref={this.addressInputRef} type="text" className="form-control" id="adressTxt" placeholder="Ingresar Dirección" />
				</div>
				<br/>
				<button type="submit" className="btn btn-primary">Submit</button>

			</form>
		)
	}

}

export default Form;
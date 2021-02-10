import React, {Component} from 'react';

class SupplierRow extends Component {

	handleDeleteEvent = (e) => {
		var supplierName = e.target.parentElement.parentElement.children[1].textContent;
		console.log(supplierName);
		this.props.handleDelete(supplierName);
	}

	render() {
		return (
			<tr>
				<th scope="row">{this.props.number}</th>
				<td>{this.props.supplier.nombre}</td>
				<td>{this.props.supplier.razon}</td>
				<td>{this.props.supplier.direccion}</td>
				<td><button onClick={this.handleDeleteEvent} className="btn btn-danger">Eliminar</button></td>
			</tr>
		)
	}

}

export default SupplierRow;
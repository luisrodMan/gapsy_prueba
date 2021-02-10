import React, {Component} from 'react';

import SupplierRow from './SupplierRow'

class Dashboard extends Component {

	state = {
		suppliers: []
	}

	handleCreateClick = (e) => {
		this.props.handleCreate();
	}

	handleNextPage = (e) => {
		const page = 1;
		const url = `https://localhost:3001/suppliers?page=${page}`;
		console.log(url);

		fetch(url)
		.then(response => response.json())
		.then(res => this.setState({suppliers:res}));
	}

	render() {
		return (
			<div className="dashboard">
			<div className="row">
				<div className="col-md-12">
					<div className="text-end">
						<a className="text-end btn btn-link" onClick={this.handleCreateClick}>Agregar</a>
					</div>
				</div>
			</div>
			
			<div className="row">
				<div className="col-md-12">
				<table className="table">
					<thead>
						<tr>
						<th scope="col">#</th>
						<th scope="col">Nombre</th>
						<th scope="col">Razón Social</th>
						<th scope="col">Dirección</th>
						<th scope="col">Acciones</th>
						</tr>
					</thead>
					<tbody>
					{this.props.suppliers.map((supplier, index) => (
						<SupplierRow 
							number={index+1}
							supplier={supplier}
							handleDelete={this.props.handleDelete} />
					))}
					</tbody>
					</table>
				</div>
			</div>
			<div>
				<button onClick={this.handleNextPage}>next page</button>
			</div>
			</div>
		)
	}

}

export default Dashboard;
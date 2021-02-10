import React, {Component} from 'react';
import Header from './components/Header'
import Welcome from './components/Welcome'
import Dashboard from './components/Dashboard'
import Form from './components/Form'

class App extends Component {

  state = {
    isHomePage: true,
    isFormPage: false,
    isDashboard: false,
    page: 1,
    suppliers: []
  }

  fetchSuppliers = () => {
    const page = this.state.page;
    const url = `http://localhost:3001/suppliers?page=${page}`;
    console.log(url);

    fetch(url)
      .then(response => response.json())
      .then(res => this.setState({suppliers:res}));
  }

  handleDelete = (supplierName) => {
    console.log("deletingHandler: " + supplierName);
    const url = `http://localhost:3001/suppliers/${supplierName}`;
    fetch(url, {
      method: 'DELETE'
    }).then(response => response.json())
    .then(res => {
      console.log(res.text) 
      this.fetchSuppliers();
    })
  }

  handleContinueClick = () => {
    this.setState({isHomePage: false, isFormPage:false, isDashboard: true}, () => {
      this.fetchSuppliers();
    })
  }
  
  handleCreateClick = () => {
    this.setState({isHomePage: false, isFormPage:true, isDashboard: false})
  }

  // este método se utilizara para crear un nuevo registro
  handleCreation = (newdata) => {
    console.log(newdata)
    this.setState({isHomePage: false, isFormPage:false, isDashboard: true}, () => {
      
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        { (this.state.isHomePage ? <Welcome continueCallback={this.handleContinueClick} /> : 
          (this.state.isDashboard ? <Dashboard 
            suppliers = {this.state.suppliers}
            handleDelete = {this.handleDelete}
            handleCreate = {this.handleCreateClick} /> :
            <Form handleCreation = {this.handleCreation}/> )) }
      </div>
    );
  }
}

export default App;

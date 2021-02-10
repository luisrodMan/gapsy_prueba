import React, {Component} from 'react';

class Header extends Component {

	logo = "logo.png";

	render() {
		return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={this.logo} alt="" width="30%" height="30%" className="d-inline-block align-top"/>e-Commerce Gapsi
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
    </div>
  </div>
</nav>
		);
	}

}

export default Header;
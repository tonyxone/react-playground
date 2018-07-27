import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component{

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">React Playground</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/feature">Features</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/pricing">Pricing</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/action" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Action
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link className="dropdown-item" to="/action/action1">Action1</Link>
          <Link className="dropdown-item" to="/action/action2">Action2</Link>
          <Link className="dropdown-item" to="/action/action3">Action3</Link>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
        )
    }

}

export default Menu;
import React, { Component } from 'react';
import './NavBar.scss';

class NavBar extends Component {

    render() {
      return (
      <nav className="navbar navbar-ct-blue navbar-fixed-top navbar-transparent" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand navbar-brand-logo" href="http://www.creative-tim.com">
                    <div className="logo">
                        <img src="https://s3.amazonaws.com/creativetim_bucket/new_logo.png"></img>
                    </div>
                    <div className="brand"> Juan Zamudio </div>
                </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="javascript:void(0)" data-toggle="search">
                                <i className="pe-7s-search"></i>
                                <p>Search</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="pe-7s-mail">
                                    <span className="label"> 23 </span>
                                </i>
                                <p>Messages</p>
                            </a>
                        </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="pe-7s-user"></i>
                            <p>Account</p>
                    </a>
                    <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    </ul>
                </li>
                </ul>
            </div>
        </div>
      </nav>
    )
    }
}

export default NavBar;
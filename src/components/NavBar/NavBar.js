import React, { Component } from 'react';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
        <div className="container">
            <div className="navbar-translate">
                <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar"></span>
                    <span className="navbar-toggler-bar"></span>
                    <span className="navbar-toggler-bar"></span>
                </button>
                <a className="navbar-brand" href="https://www.creative-tim.com">Juan Zamudio</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Follow on Twitter" data-placement="bottom" href="https://twitter.com/juanezamudio" target="_blank">
                            <i className="fa fa-twitter"></i>
                            <p className="d-lg-none">Twitter</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Friend on FB" data-placement="bottom" href="https://www.facebook.com/juanezamudio" target="_blank">
                            <i className="fa fa-facebook-square"></i>
                            <p className="d-lg-none">Facebook</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Follow on IG" data-placement="bottom" href="https://www.instagram.com/juanesteban___" target="_blank">
                            <i className="fa fa-instagram"></i>
                            <p className="d-lg-none">Instagram</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="tooltip" title="Follow on GitHub" data-placement="bottom" href="https://www.github.com/juanezamudio" target="_blank">
                            <i className="fa fa-github"></i>
                            <p className="d-lg-none">GitHub</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="documentation/tutorial-components.html" target="_blank" className="nav-link"><i className="nc-icon nc-book-bookmark"></i>Resume</a>
                    </li>
                    <li className="nav-item">
						<a href="https://www.creative-tim.com/product/paper-kit-2-pro?ref=pk2-free-local" target="_blank" className="btn btn-danger btn-round">Contact Me</a>
					</li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default NavBar;

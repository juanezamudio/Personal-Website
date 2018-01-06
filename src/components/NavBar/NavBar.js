import React, { Component } from 'react';
import Button from '../Button/Button';
import './NavBar.scss';
import resume from "../../images/Resume.pdf";

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
        <div className="container">
            <div className="navbar-translate">
                <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-bar">
                    Juan Zamudio
                    </span>
                    <span className="navbar-toggler-bar">
                    is
                    </span>
                    <span className="navbar-toggler-bar">
                    Cool
                    </span>
                </button>
                <a className="navbar-brand" href="https://www.creative-tim.com">Juan Zamudio</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" rel="noopener noreferrer" title="Follow on Twitter" data-placement="bottom" href="https://twitter.com/juanezamudio" target="_blank">
                            <i className="fa fa-twitter"></i>
                            <p className="d-lg-none">Twitter</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="noopener noreferrer" title="Friend on FB" data-placement="bottom" href="https://www.facebook.com/juanezamudio" target="_blank">
                            <i className="fa fa-facebook-square"></i>
                            <p className="d-lg-none">Facebook</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="noopener noreferrer" title="Follow on IG" data-placement="bottom" href="https://www.instagram.com/juanesteban___" target="_blank">
                            <i className="fa fa-instagram"></i>
                            <p className="d-lg-none">Instagram</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" rel="noopener noreferrer" title="Follow on GitHub" data-placement="bottom" href="https://www.github.com/juanezamudio" target="_blank">
                            <i className="fa fa-github"></i>
                            <p className="d-lg-none">GitHub</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a rel="noopener noreferrer" title="Resume" href={resume} target="_blank" className="nav-link"><i className="nc-icon nc-paper"></i></a>
                    </li>
                    <li className="nav-item">
                        {/* <a rel="noopener noreferrer" href="#" target="_blank" className="btn btn-danger btn-round">Contact Me</a> */}
                        <Button isRound={false} hasIcon={false} isSimple={false} text="Contact Me"></Button>
					</li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default NavBar;

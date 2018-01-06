import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  
    getYear() {
        return new Date().getFullYear();
    }

    render() {
        
        return (
        <footer class="footer">
            <div class="container">
            <div class="row">
                <nav class="footer-nav">
                <ul>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="./index.html">About Me</a>
                    </li>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="http://www.github.com/juanezamudio">Github Repos</a>
                    </li>
                    <li>
                    <a rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/users/8632825/juanezamudio">Stack Overflow</a>
                    </li>
                </ul>
                </nav>
                <div class="credits ml-auto">
                <span class="copyright">
                    © {this.getYear()},
                    made with <i class="fa fa-heart heart" /> by Juan Zamudio
                </span>
                </div>
            </div>
            </div>
        </footer>
        );
    }
}

export default Footer;

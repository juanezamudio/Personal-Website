import React, {Component} from 'react';
import PropTypes from 'prop-types';
import css from './Button.scss';

const propTypes = {
    isRound: PropTypes.bool,
    hasIcon: PropTypes.bool,
    isSimple: PropTypes.bool,
    text: PropTypes.string,
    color: PropTypes.string
};

class Button extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let button;

        if (this.props.isRound) {
            if (this.props.hasIcon) {
                button = <button type="button" className="btn btn-danger btn-just-icon"><i className="fa fa-heart"></i>{this.props.text}</button>
            } else {
                button = <button type="button" className="btn btn-danger btn-round">{this.props.text}</button>
            }
        } else {
            if (this.props.isSimple) {
                button = <button type="button" className="btn btn-danger btn-link">{this.props.text}</button>
            } else {
                button = <button type="button" className="btn btn-danger">{this.props.text}</button>
            }
        }

        return (
            <div className="main">
            {button}
            </div>
        );
    }
}

Button.propTypes = propTypes;

export default Button;
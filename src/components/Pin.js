import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {PIN_MAX_VALUE, PIN_DEFAULT_ICON} from '../constants';

class Pin extends PureComponent {
	constructor(props) {
		super(props);

		this.click = this.click.bind(this);
	}

	click() {
		this.props.onClickHandler(this.props.value);
	}

	render() {
		const valueClassName = (this.props.value <= PIN_MAX_VALUE) ? 'is-visually-hidden' : null;
		const clickHandler = (this.props.onClickHandler !== null) ? this.click : null;

		return (
			<div 
				className={`pin pin-color-${this.props.value}`} 
				data-icon={this.props.icon}
				onClick={clickHandler}>
					<span className={valueClassName}>{this.props.value}</span>
			</div>
		);
	}	
}

Pin.propTypes = {
	value: PropTypes.number.isRequired,
	icon: PropTypes.string,
	onClickHandler: PropTypes.func
};

Pin.defaultProps = {
	icon: PIN_DEFAULT_ICON
};

export default Pin;
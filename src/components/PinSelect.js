import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Pin from './Pin';
import {PIN_MAX_VALUE, PIN_DEFAULT_ICON} from '../constants';

class PinSelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 1,
			state: 'collapsed' 
		};

		this.toggleOptions = this.toggleOptions.bind(this);
		this.selectOption = this.selectOption.bind(this);
	}
	
	toggleOptions() {
		const optionsState = (this.state.state === 'collapsed') ? 'expanded' : 'collapsed';
		this.setState({ state : optionsState });
	}

	selectOption(value) {
		console.log(value);
		this.setState({ value });
		this.toggleOptions();	
	}

	
	render() {
		const pins = [];
		const {pinIcon} = this.props;

		for(let i=1; i<= PIN_MAX_VALUE; i++) {
			pins.push(<Pin key={i} value={i} icon={pinIcon} onClickHandler={this.selectOption}/>);
		}

		return (
			<div className={`pin-select ${this.state.state}`}>
				<Pin value={this.state.value} icon={pinIcon} onClickHandler={this.toggleOptions}/>
				<div className="pin-select-options ">
					{pins}
				</div>
			</div>
		);		
	}
}

PinSelect.propTypes = {
	pinIcon: PropTypes.string
};

PinSelect.defaultProps = {
	pinIcon: PIN_DEFAULT_ICON
};

export default PinSelect;
import React, {Component} from 'react';
import {PINS_PER_SLOT} from '../constants';
import Pin from './Pin';
import PinSelect from './PinSelect';

class PinSlot extends Component {
	constructor(props) {
		super(props);		
	}

	renderStaticSlot() {
		const pins = [];
		const values = this.props.value.split('');

		for(let i=0; i<values.length; i++) {
			pins.push(<Pin value={parseInt(values[i], 10)}/>);
		}

		return pins;
	}

	renderActiveSlot() {
		const pins = [];		
		for(let i=0; i<PINS_PER_SLOT; i++) {
			pins.push(<PinSelect />);
		}

		return pins;
	}

	render() {		
		return (
			<div className="pin-slot">
				{(this.props.value) ? 
					this.renderStaticSlot() :
					this.renderActiveSlot()}
			</div>
		);
	}
}

export default PinSlot;
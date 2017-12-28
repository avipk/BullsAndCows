import React from 'react';
import {PIN_MAX_VALUE} from '../constants';

function Pin({value, icon="\u26AB"}) {
	const val = parseInt(value, 10);
	let jsx = null;	
	if(Number.isInteger(val) && val <= PIN_MAX_VALUE) {
		jsx = <div className={`pin pin-color-${val}`} data-icon={icon}><span className="is-visually-hidden">{val}</span></div>;
	}else{
		jsx = <div className="pin pin-unknown">{val}</div>;
	}
	
	return jsx;
}

export default Pin;
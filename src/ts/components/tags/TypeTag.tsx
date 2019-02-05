import React from 'react';
import {Type} from '../../types';

const typeDataMap: {[K in Type]: {icon: string}} = {
	Personal: {icon: 'fas fa-user'},
	Professional: {icon: 'fas fa-user-tie'}
};

export const TypeTag = (props: {name: Type}) => (
	<span>
		<i className={typeDataMap[props.name].icon}></i>
		{props.name}
	</span>
);

import React from 'react';
import {Project as ProjectType} from '../types';
import {TypeTag} from './tags/TypeTag';

export const Project = (props: {data: ProjectType}) => (
	<div>
		<h1>{props.data.title}</h1>
		<TypeTag name={props.data.type}/>
		{props.data.company && <em>{props.data.company}</em>}
		{props.data.description}
	</div>
);

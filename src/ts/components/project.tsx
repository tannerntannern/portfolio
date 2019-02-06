import React from 'react';
import {Project as ProjectType} from '../types';
import {TypeTag} from './tags/TypeTag';
import {CategoryTag} from './tags/CategoryTag';
import {DevStatusTag} from './tags/DevStatusTag';
import {Carousel} from './carousel';

export const Project = (props: {data: ProjectType}) => (
	<div>
		<h1>{props.data.title}</h1>
		<TypeTag name={props.data.type}/>
		<CategoryTag name={props.data.category}/>
		<DevStatusTag name={props.data.status}/>
		<Carousel sources={props.data.images}/>
		{props.data.description}
	</div>
);

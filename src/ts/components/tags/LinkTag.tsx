import React from 'react';
import {Link} from '../../types';
import convert from '../../util/case';

const linkDataMap: {[K in Link]: {icon: string}} = {
	website: {icon: 'fas fa-globe-americas'},
	demo: {icon: 'far fa-hand-point-right'},
	source: {icon: 'fas fa-code'},
	documentation: {icon: 'fas fa-book'},
	install: {icon: 'fas fa-download'},
	download: {icon: 'fas fa-file-download'},
	blogPost: {icon: 'fas fa-blog'}
};

export const LinkTag = (props: {type: Link, href: string}) => (
	<div>
		<a href={props.href} target="_blank">
			<i className={linkDataMap[props.type].icon}></i>
			&nbsp;
			{convert(props.type, 'camel', 'title')}
		</a>
	</div>
);
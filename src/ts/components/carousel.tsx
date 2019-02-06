import React from 'react';

export const Carousel = (props: {sources: string[]}) => (
	<div className="carousel">{
		props.sources.map(source =>
			<img key={source} src={'./img/projects/' + source} alt=""/>
		)
	}</div>
);

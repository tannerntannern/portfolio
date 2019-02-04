import React from 'react';

export const CollaboratorTag = (props: {name: string, link: string }) => (
	<a href={props.link}>{props.name}</a>
);

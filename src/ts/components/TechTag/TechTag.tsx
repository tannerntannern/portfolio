import {Technology} from '../../types';

// This structure serves two purposes: 1) hold the links and icon names of each technology and 2) generate TS errors
// if any Technology entries are added without updating this structure.
// const techDataMap: {[K in keyof typeof Technology]: {icon?: string, link: string}} = {};

export const TechTag = (props: { name: keyof typeof Technology }) => (
	<div>
		<span>{props.name}</span>
	</div>
);
import React from 'react';
import {Timeline} from '../../types';

// Because fuck the Date API
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDate(date: Date): string {
	return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

const timelineContent = (timeline: Timeline) => {
	// If only start date is given; January 2019
	if (!timeline.end)
		return `Started ${formatDate(timeline.start)}`;

	// If the years are the same, we can truncate a little bit; January – February 2019
	const sYear = timeline.start.getFullYear(), eYear = timeline.end.getFullYear();
	if (sYear === eYear) {
		// If the months are the same, we can truncate even further (effectively the same as no end date)
		const sMonth = timeline.start.getMonth(), eMonth = timeline.end.getMonth();
		if (sMonth === eMonth) {
			return `${formatDate(timeline.start)}`;
		} else {
			return `${months[sMonth]}–${formatDate(timeline.end)}`;
		}
	}

	// Otherwise, format both start and end dates; December 2018 – February 2019
	else {
		return `${formatDate(timeline.start)}–${formatDate(timeline.end)}`;
	}
};

export const TimelineTag = (props: {data: Timeline}) => <em>{timelineContent(props.data)}</em>;

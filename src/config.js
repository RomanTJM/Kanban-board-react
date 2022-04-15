const LIST_TYPES = {
	BACKLOG: 'backlog',
 	READY: 'ready',
	IN_PROGRESS: 'inProgress',
	FINISHED: 'finished',
}

const LIST_TITLES = {
	[LIST_TYPES.BACKLOG]: 'Backlog',
  	[LIST_TYPES.READY]: 'Ready',
	[LIST_TYPES.IN_PROGRESS]: 'In Progress',
	[LIST_TYPES.FINISHED]: 'Finished',
}

export {LIST_TYPES, LIST_TITLES}
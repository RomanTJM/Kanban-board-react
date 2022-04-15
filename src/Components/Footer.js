import React from 'react';
import {LIST_TYPES} from '../config';


function Footer(props) {
  const {tasks} = props;
	const activeTasks = tasks.filter(task => task.status === LIST_TYPES.BACKLOG); 
	const finishedTasks = tasks.filter(task => task.status === LIST_TYPES.FINISHED);
		return (
			<footer className='footer'>
				<div className='footer-item footer-right'>
					<div className='active-tasks'>Active tasks: {activeTasks.length}</div>
					<div>Finished tasks: {finishedTasks.length}</div>
				</div>
				<div className='footer-item'>Kanban board by Riabchenko Roman, 2022</div>
			</footer>
		);
}

export default Footer;
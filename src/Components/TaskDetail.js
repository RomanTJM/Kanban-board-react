import React, {useState, useRef} from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {formatDate} from '../utils';
import CrossIcon from '../Icons/cross.svg';

function TaskDetail(props) {
	const match = useRouteMatch();
	const {taskId} = match.params;
	const {tasks, setTasks} = props;
	const task = tasks.find(task => task.id === taskId);
	const description = useRef();
	const [clicked, setClicked] = useState(false);

	function submitEditText() {
		setClicked(!clicked);
	}

	function editNewText() {
		const newDescription = description.current.value;
		const currentID = description.current.id;
		const updatedTasks = tasks.map(task => {
			if (task.id === currentID) {
				return {...task, description: newDescription}
			}
			return task
			});
		setTasks(updatedTasks);
	}

	function renderTaskDetails() {
		return (
			<>
				<div className='detail-header'>
					<h2 className='detail-title'>{task.title}</h2>
				</div>
				<p className='created'>Created at: {formatDate(task.created)}</p>
				<p>Description:</p>
				<div className='edit'>
					{clicked ?
						<>
							<textarea 
							className='edit-text' 
							ref={description} 
							onChange={editNewText} 
							value={task.description} 
							id={task.id}>{task.description}
							</textarea>
							<button type='submit' onClick={submitEditText} className='button button-submit'>Submit</button>
						</>
						:
						<>
							<p>{task.description || 'This task has no description.'}</p>
							<button onClick={submitEditText} className='button button-submit'>Edit text</button>
						</>
					}
				</div>
			</>
		);
	}

	const renderEmptyState = () => {
		return (
			<div className='empty-state'>
				<p>Task with ID <span className='task-not-found'>{taskId}</span> was not found.</p>
			</div>
		);
	}

	return (
		<div className='detail'>
        	<Link className='home-link' to='/'>
				<img src={CrossIcon} alt='cross icon'/>
			</Link>
			{task ? renderTaskDetails() : renderEmptyState()}
		</div>
	);
}

export default TaskDetail;
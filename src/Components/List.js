import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {LIST_TYPES} from '../config';
import AddTaskForm from './AddTaskForm';
import ReplaceTaskForm from './ReplaceTaskForm';


function List(props) {
	const {type, title, tasks, setTasks, allTasks, addNewTask} = props;
	const [isFormVisible, setFormVisible] = useState(false);

	const backlogTasks = allTasks.filter(task => task.status === LIST_TYPES.BACKLOG);
	const readyTasks = allTasks.filter(task => task.status === LIST_TYPES.READY);
	const inProgressTasks = allTasks.filter(task => task.status === LIST_TYPES.IN_PROGRESS);

	function handleAddNewClick() {
		setFormVisible(!isFormVisible);
	};

	function formSubmit(title, description) {
		addNewTask(title, description);
	};
  
	return (
		<div className='task-list'>
			<h2 className='task-list-title'>{title}</h2>
				{tasks.length ? 
					tasks.map(task => 
						<Link to={`/tasks/${task.id}`} key={task.id} className='title-link'>
							<div className='item-title'>{task.title}</div>
						</Link>) : 
					<p>No tasks added yet.</p>
				}

				{type === LIST_TYPES.BACKLOG &&
					<AddTaskForm formSubmit={formSubmit} isFormVisible={isFormVisible} setFormVisible={setFormVisible} handleAddNewClick={handleAddNewClick} />}

				{type === LIST_TYPES.READY &&
					<ReplaceTaskForm isFormVisible={isFormVisible} setFormVisible={setFormVisible} handleAddNewClick={handleAddNewClick} tasks={allTasks} replaceTasks={backlogTasks} setTasks={setTasks} newStatus={LIST_TYPES.READY}/>}

				{type === LIST_TYPES.IN_PROGRESS &&
					<ReplaceTaskForm isFormVisible={isFormVisible} setFormVisible={setFormVisible} handleAddNewClick={handleAddNewClick} tasks={allTasks} replaceTasks={readyTasks} setTasks={setTasks} newStatus={LIST_TYPES.IN_PROGRESS} />}

				{type === LIST_TYPES.FINISHED &&
					<ReplaceTaskForm isFormVisible={isFormVisible} setFormVisible={setFormVisible} handleAddNewClick={handleAddNewClick} tasks={allTasks} replaceTasks={inProgressTasks} setTasks={setTasks} newStatus={LIST_TYPES.FINISHED} />}

		</div>
	);
}

export default List;
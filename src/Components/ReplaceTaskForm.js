import React, {useRef} from 'react';
import PlusIcon from '../Icons/plus.svg';

function ReplaceTaskForm(props) {
	const {tasks, replaceTasks, setTasks, isFormVisible, setFormVisible, handleAddNewClick, newStatus} = props;
	const id = useRef();
	
	function replaceTask() {
		const updatedTasks = tasks.map(task => {
		if (task.id === id.current.value) {
			return {...task, status: newStatus}
		}
		return task
		});

		const filteredTasks = tasks.filter(task => task.id !== id.current.value);
		const taskToAdd = updatedTasks.find(task => task.id === id.current.value);
		const newUpdatedTasks = [...filteredTasks, taskToAdd];

		setTasks(newUpdatedTasks);
		setFormVisible(!isFormVisible);
	}

	function disableButton() {
		let disabled = false;
		if(replaceTasks.length === 0) {
			disabled = true;
			return disabled
		}
		return disabled
	}

  	if(isFormVisible) {
    	return (
			<div>
				<select ref={id} className='select'>
					{replaceTasks.map(task => {
						return <option key={task.id} value={task.id}>{task.title}</option>
					})}
				</select>
				<button onClick={replaceTask} className='button button-submit' type='submit'>Submit</button>
			</div>
		);
  	}
	return (
		<button disabled={disableButton()} className='button button-add' onClick={handleAddNewClick}>
			<img src={PlusIcon} alt='plus icon' className='plus-icon'/>
			Add card
		</button>
	);
}

export default ReplaceTaskForm;
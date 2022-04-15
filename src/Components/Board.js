import uniqid from 'uniqid';
import {LIST_TYPES, LIST_TITLES} from '../config';
import List from '../Components/List';


function Board(props) {
  const {tasks, setTasks} = props;

  function addNewTask(title, description) {
		const task = {
			id: uniqid(),
			title,
			description,
			created: new Date().toISOString(),
			status: LIST_TYPES.BACKLOG,						
		};
		setTasks([...tasks, task]);
	}
  
  return (
    <div className='board'>
      {Object.values(LIST_TYPES).map(type => {
			const listTasks = tasks.filter(task => task.status === type)
				return (
					<List
						key={type}
						type={type}
						title={LIST_TITLES[type]}
						tasks={listTasks || []}
						allTasks={tasks}
						addNewTask={addNewTask}
						setTasks={setTasks}												
					/>
				)
		})}
    </div>
  );
}

export default Board;
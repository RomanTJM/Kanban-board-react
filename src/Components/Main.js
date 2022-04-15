import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Board from './Board';
import TaskDetail from '../Components/TaskDetail';


function Main(props) {
	return (
		<main className='main'>
			<Switch>
				<Route exact path={'/'}>
					<Board {...props}/>
				</Route>
				<Route path={'/tasks/:taskId'}>
					<TaskDetail {...props} />
				</Route>
			</Switch>
		</main>
  	);
}

export default Main;
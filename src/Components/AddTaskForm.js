import React, {useState} from 'react';
import PlusIcon from '../Icons/plus.svg';

function AddTaskForm(props) {
  const {formSubmit, isFormVisible, setFormVisible, handleAddNewClick} = props;
  
  const initialState = {
    title: "",
    description: "",
    error: undefined,
  };
  const [values, setValues] = useState(initialState);

  function handleChange(e) {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (values.title) {
      formSubmit(values.title, values.description, values.error);
      setFormVisible(false);
      setValues(initialState);
    } else {
      setValues({ ...values, error: "To add a task enter a title" });
      setFormVisible(false);
    }
  }

  if(isFormVisible) {
    return (
      <form className='formAddNewTask'>       
        <input
        className='input'
        id='taskTitle'
        name='title'
        type='text'
        placeholder='Enter task title'
        onChange={handleChange}
        />
			  <textarea
        className='textarea'
        id='taskDescription'
        name='description'
        placeholder='Enter task description'
        value={values.description}
        onChange={handleChange}
        />
        <button
        onClick={handleSubmit}
        className='button button-submit'
        type='submit'>
          Submit
        </button>        
      </form>
    );
  };
    return (
      <>
      <div className='error'>{values.error}</div>
      <button className='button button-add' onClick={handleAddNewClick}>
        <img src={PlusIcon} alt='plus icon' className='plus-icon'/>
				Add card
			</button>
      </>      
    );
}

export default AddTaskForm;
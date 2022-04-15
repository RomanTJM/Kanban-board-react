import React from 'react';
import userAvatar from '../Image/user-avatar.svg';
import ArrowDown from '../Icons/arrow-down.svg';
import ArrowUp from '../Icons/arrow-top.svg';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
  };

  render() {
    const {clicked} = this.state;
    let arrowImg;

    if(clicked) {
      arrowImg = <img src={ArrowUp} alt='Close arrow'/>;
    } else {
      arrowImg = <img src={ArrowDown} alt='Open arrow'/>;
    }
      
    return (
      <>
        <button className='dropdown-button' onClick={() => this.setState({clicked: !clicked})}>
          <img src={userAvatar} alt='user avatar' className='avatar'/>
          {arrowImg}
        </button>
        <div className={`${clicked ? "dropdown" : "none"}`}>
          <ul className='dropdown-menu'>
            <li className='dropdown-item'><a className='dropdown-link' href='#profile'>Profile</a></li>
            <li className='dropdown-item'><a className='dropdown-link' href='#logout'>Log out</a></li>
          </ul>
        </div>
      </>  
    ); 
  }
}

export default Dropdown;
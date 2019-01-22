import React from 'react';
import Login from './Login.jsx';
import Profile from './Profile.jsx';
import Delivery from './Delivery.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      id: 1,
    };
  }

  render() {
    return (
      <div>
          <Login />
          <div style={{'position': 'relative'}}>
            <Profile restaurant={this.state.restaurant} />
          </div>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    );
  }
}

export default Header;
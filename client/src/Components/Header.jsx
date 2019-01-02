import React from 'react';
import axios from 'axios';
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

  componentDidMount() {
    const id = window.location.pathname.substring(13);
    axios.get(`/restaurants/${id}/profile`)
      .then((response) => {
        this.setState({
          restaurant: response.data[0],
        });
      });
  }

  render() {
    return (
      <div>
        <Login /><br></br><br></br><br></br>  
        <Profile restaurant={this.state.restaurant} />
      </div>
    );
  }
}

export default Header;
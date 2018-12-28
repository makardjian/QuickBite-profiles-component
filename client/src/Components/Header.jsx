import React from 'react';
import { get } from 'http';
import axios from 'axios';
import Login from './Login.jsx';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
        console.log(response.data[0]);
        this.setState({
          restaurant: response.data[0],
        });
      });
    
   
  }

  render() {
    return (
      <div>
        <Login />
        {/* <div>Name = {this.state.restaurant.name}</div>
        <div>Address = {this.state.restaurant.address}</div>
        <div>Accurate = {this.state.restaurant.accuracy}</div>
        <div>Quality = {this.state.restaurant.quality}</div>
        <div>Stars = {this.state.restaurant.stars}</div>
        <div>{this.state.restaurant.picture}</div> */}
      </div>
    );
  }
}

export default Header;
import React from 'react';
import axios from 'axios';
import Login from './Login.jsx';
import Profile from './Profile.jsx';

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
        <Login />
        <Profile restaurant={this.state.restaurant} />

        {/* <img width='714' height='400'src={this.state.restaurant.picture} id='img'></img> */}
        {/* <h1>hi</h1> */}
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
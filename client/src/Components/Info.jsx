import React from 'react';
import axios from 'axios';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant : {},
    }
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
      <div id='info'>
        <h2>{this.state.restaurant.name}</h2>
        <span>
          <a>{this.state.restaurant.address} </a>
          <a> {this.state.restaurant.number}</a>
        </span>
        <div>
          <span> {this.state.restaurant.quality}% Food was good</span>
          <span> {this.state.restaurant.delivery}% Delivery was on time</span>
          <span> {this.state.restaurant.accuracy}% Order was accurate</span>
        </div>
      </div>
    )
  }
}

export default Info;
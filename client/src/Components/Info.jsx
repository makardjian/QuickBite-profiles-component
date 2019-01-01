import React from 'react';
import Stars from './Stars.jsx';
import axios from 'axios';
import styles from './../styles/Info.css';

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

  getStars(stars) {
    let starsArray = ['☆','☆','☆','☆','☆'];
    let full = '★';
    for(let i = 0; i < stars; i++) {
      starsArray[i] = full;
    }
    return starsArray;
  }

  render() {
    const stars = this.getStars(this.state.restaurant.stars);
    const quality = this.state.restaurant.quality;
    const delivery = this.state.restaurant.delivery;
    const accuracy = this.state.restaurant.accuracy;
    return (
      <div className={styles.info}>
        <h2>{this.state.restaurant.name}</h2>
        <span>
          <a>{this.state.restaurant.address} </a>
          <a> {this.state.restaurant.number}</a>
        </span>
        <div>
          <span> <Stars quality={quality} delivery={delivery} accuracy={accuracy} stars={this.state.restaurant.stars}/> </span>
          <span> {this.state.restaurant.quality}% Food was good</span>
          <span> {this.state.restaurant.delivery}% Delivery was on time</span>
          <span> {this.state.restaurant.accuracy}% Order was accurate</span>
        </div>
      </div>
    )
  }
}

export default Info;
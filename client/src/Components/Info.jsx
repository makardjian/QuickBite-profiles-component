import React from 'react';
import Stars from './Stars.jsx';
import axios from 'axios';
import NavigationButtons from './NavigationButtons.jsx';
import Delivery from './Delivery.jsx';
import { Button } from 'react-bootstrap';
import styles from './../styles/Info.css.js';

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
    const quality = this.state.restaurant.quality;
    const delivery = this.state.restaurant.delivery;
    const accuracy = this.state.restaurant.accuracy;
    
    return (
      <div>
        <div>
          <div style={styles.info}>
            <h2>{this.state.restaurant.name}</h2>
            <span>
              <Button style={styles.button}>{this.state.restaurant.address}</Button>
              <Button style={styles.button}>{this.state.restaurant.number}</Button>
            </span>
            <div>
              <span style={styles.ratings}> <Stars quality={quality} delivery={delivery} accuracy={accuracy} stars={this.state.restaurant.stars}/> </span>
              <span style={styles.ratings}> <strong>{this.state.restaurant.quality}% </strong> Food was good</span>
              <span style={styles.ratings}> <strong>{this.state.restaurant.delivery}%</strong> Delivery was on time</span>
              <span style={styles.ratings}> <strong>{this.state.restaurant.accuracy}%</strong> Order was accurate</span>
              <br></br><br></br><br></br>
            </div>
            <Delivery />
            <NavigationButtons />
          </div>
        </div>
      </div>
    )
  }
}

export default Info;
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
  
  render() {
    const quality = this.props.restaurant.quality;
    const delivery = this.props.restaurant.delivery;
    const accuracy = this.props.restaurant.accuracy;
    
    return (
      <div>
        <div>
          <div style={styles.info}>
            <h2>{this.props.restaurant.name}</h2>
            <span>
              <Button style={styles.button}>{this.props.restaurant.address}</Button>
              <Button style={styles.button}>{this.props.restaurant.number}</Button>
            </span>
            <div>
              <span style={styles.ratings}> <Stars quality={quality} delivery={delivery} accuracy={accuracy} stars={this.props.restaurant.stars}/> </span>
              <span style={styles.ratings}> <strong>{this.props.restaurant.quality}% </strong> Food was good</span>
              <span style={styles.ratings}> <strong>{this.props.restaurant.delivery}%</strong> Delivery was on time</span>
              <span style={styles.ratings}> <strong>{this.props.restaurant.accuracy}%</strong> Order was accurate</span>
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
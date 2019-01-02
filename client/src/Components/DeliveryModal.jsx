import React from 'react';
import { FormControl } from 'react-bootstrap';
import styles from './../styles/DeliveryModal.css.js';

export class DeliveryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAddress: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      userAddress: e.target.value
    })
  }

  render() {
    return(
      <div>
        <p>Free delivery. $15 minimum</p>
        <div>
          <p><strong>When would you like your order?</strong></p>
          <a href='#'>ASAP (60-70 minutes)</a>
          <FormControl value={this.state.userAddress} type="text" 
          placeholder="Enter address" onChange={this.handleChange}></FormControl>
        </div>
      </div>
    )
  }
}

export class PickupModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>No minimum. No fee</p>
        <div>
          <p><strong>When would you like your order?</strong></p>
          <a href='#'>ASAP (10-20 minutes)</a> 
        </div>
      </div>
    )
  }
}

export class DeliveryInfo extends React.Component {
  render() {
    return (
      <div style={styles.info}>
        <p>Delivery, ASAP (10-20m)</p>
        <p>$15 min, Free delivery</p>
      </div>
    )
  }
}

export class PickupInfo extends React.Component {
  render() {
    return (
      <div style={styles.info}>
        <p>Pickup, ASAP (10-20m)</p>
        <p>No minumum, no fee</p>
      </div>
    )
  }
}

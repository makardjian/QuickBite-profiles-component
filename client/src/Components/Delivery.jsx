import React from 'react';
import {DeliveryModal} from './DeliveryModal.jsx';
import {DeliveryInfo} from './DeliveryModal.jsx';
import {PickupModal} from './DeliveryModal.jsx';
import {PickupInfo} from './DeliveryModal.jsx'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'; 
import styles from './../styles/Delivery.css.js';

class Delivery extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      show: false,
      delivery: true
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleChange(e) {
   if(e.target.value === 'delivery') {
     this.setState({
       delivery: true
     })
   } else {
     this.setState({
       delivery: false
     })
   }
  }

  

  render() {
      return (
        <span className="modal-container">
          <Button 
            onClick={() => this.setState({ show: true })}
            style={styles.deliveryButton}
          >
            {this.state.delivery ? <DeliveryInfo /> : <PickupInfo />}
          </Button>
        <span>
          <a href='#'>Change</a>
        </span>

          <Modal
            show={this.state.show}
            onClose={this.handleClose}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Button onClick={this.handleClose}>X</Button>
            <Modal.Body>
              <h3>Your order settings</h3>
              <div>
                <Button value='delivery' onClick={this.handleChange}>Delivery</Button>
                <Button value='pickup' onClick={this.handleChange}>Pickup</Button>
              </div>
              <div>
                {this.state.delivery ? <DeliveryModal /> : <PickupModal />}
              </div>
              <div>
                <Button onClick={this.handleClose}>Update</Button>
                <Button onClick={this.handleClose}>Cancel</Button>
              </div>
            </Modal.Body>
          </Modal>
        </span>
      );
  }
}

export default Delivery;

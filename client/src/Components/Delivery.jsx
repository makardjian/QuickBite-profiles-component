import React from 'react';
import {DeliveryModal} from './DeliveryModal.jsx';
import {PickupModal} from './DeliveryModal.jsx';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'; 

class Delivery extends React.Component {
  constructor(props) {
    super(props);

    this.handleHide = this.handleHide.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      show: false,
      delivery: true
    };
  }

  handleHide() {
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
    // if(this.state.delivery === true) {
      return (
        <span className="modal-container">
          <Button
            onClick={() => this.setState({ show: true })}
          >
            Delivery
          </Button>

        <span>
          <a href='#'>Change</a>
        </span>

          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Button onClick={this.handleHide}>X</Button>
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
                <Button onClick={this.handleHide}>Update</Button>
                <Button onClick={this.handleHide}>Cancel</Button>
              </div>
            </Modal.Body>
          </Modal>
        </span>
      );
  }
}

export default Delivery;

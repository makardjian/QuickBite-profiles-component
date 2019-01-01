import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

class DeliveryModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      delivery: true
    };
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    if(this.state.delivery === true) {
      return (
        <div className="modal-container" /*style={{ height: 0 }}*/ >
          <Button
            onClick={() => this.setState({ show: true })}
          >
            Delivery
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Body>
              Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
              ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
              <div>
                <Button onClick={this.handleHide}>Update</Button>
                <Button onClick={this.handleHide}>Cancel</Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      );
    } else {
      return (
        <div className="modal-container" /*style={{ height: 0 }}*/ >
          <Button
            onClick={() => this.setState({ show: true })}
          >
            Pickup
          </Button>
  
          <Modal
            show={this.state.show}
            onHide={this.handleHide}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Body>
              Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
              ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.

              <Button onClick={this.handleHide}>Update</Button>
              <Button onClick={this.handleHide}>Cancel</Button>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
    
  }
}


export default DeliveryModal;
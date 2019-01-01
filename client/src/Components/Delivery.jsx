import React from 'react';
import DeliveryModal from './DeliveryModal.jsx';

class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      delivery: true
    };
  }

  render() {
    if (this.state.delivery === true) {
      return(
        <div>
          <div>
            <DeliveryModal />
            <a href='#'>Change</a>
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <h1>Oh no</h1>
        </div>
      )
    }
     
  }
}

export default Delivery;

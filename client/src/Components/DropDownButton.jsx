import React from 'react';
import styles from './../styles/DropDownButton.css.js'

class DropDownButton extends React.Component {
  constructor() {
    super();
    this.state = {
      showAddress: false,
    }
    this.showAddress = this.showAddress.bind(this);
  }
  
  showAddress(event) {
    event.preventDefault();
    
    this.setState({
      showAddress: !this.state.showAddress,
    });
  }

  render() {
    const searchImg = <img src="https://img.icons8.com/ios/50/000000/marker.png" />
    return (
      <span style={styles.dropDownSpan}>
        <button onClick={this.showAddress} style={styles.dropDownButton}>
          Enter an address 
        </button>
        
        {
          this.state.showAddress
            ? (
              <div className="menu" style={styles.address}>
                <input type='text' placeholder='Enter a new address' style={styles.inputForm}/>
              </div>
            )
            : (
              null
            )
        }
      </span>
    );
  }
}

export default DropDownButton;

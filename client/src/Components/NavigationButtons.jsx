import React from 'react';
import styles from './../styles/NavigationButtons.css.js';

class NavigationButtons extends React.Component {
  render() {
    return (
      <div style={styles.navButton}>
          <a href='#'>Menu </a>
          <a href='#'>About </a>
          <a href='#'>Reviews </a>
      </div>
    )
  }
}

export default NavigationButtons;
import React from 'react';

class NavigationButtons extends React.Component {
  render() {
    const styles = {
      navButton: {
        'padding': '10px',
        'border': '1px solid gray',
        'position': 'absolute',
        'bottom': '40px',
        'width': '100%',
        'marginLeft': '-70px',
        'paddingLeft': '70px'
      }
    }

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
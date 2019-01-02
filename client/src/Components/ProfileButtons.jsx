import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class ProfileButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: false,
    }
  }

  render() {
    const styles = {
      profileButtons: {
        'float': 'right',
        'borderRadius': '50%'
      },

    }
    

    return (
      <ButtonToolbar style={{'paddingRight': '55'}}>
              <Button style={styles.profileButtons}>S</Button>
              <Button style={styles.profileButtons}>
                <span className='glyphicon glyphicon-bookmark'></span>
              </Button>
      </ButtonToolbar>
    )
  }
}

export default ProfileButtons;
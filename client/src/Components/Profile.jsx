import React from 'react';
import Info from './Info.jsx';
import { ButtonToolbar } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const styles = {
      profile: {
        'paddingTop': '15px',
        'width': '75%',
        'height': '345px',
        'backgroundColor': 'blue',
        'position': 'relative'
      },

      profileButtons: {
        'float': 'right',
        'borderRadius': '50%'
      }
    }

    return( 
      <div style={styles.profile}>
        <ButtonToolbar style={{'paddingRight': '55'}}>
            <Button style={styles.profileButtons}>S</Button>
            <Button style={styles.profileButtons}>
              <span className='glyphicon glyphicon-bookmark'></span>
            </Button>
        </ButtonToolbar>
        <Info restaurant={this.props.restaurant}/>
      </div>
    )
  }
  
}

export default Profile;
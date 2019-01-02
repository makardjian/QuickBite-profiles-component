import React from 'react';
import Info from './Info.jsx';
import ProfileButtons from './ProfileButtons.jsx'
import { ButtonToolbar } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
    }
    
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
      
    }

    return( 
      <div style={styles.profile}>
        <ProfileButtons />
        <Info restaurant={this.props.restaurant}/>
      </div>
    )
  }
  
}

export default Profile;
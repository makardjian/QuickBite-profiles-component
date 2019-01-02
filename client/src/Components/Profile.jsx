import React from 'react';
import Info from './Info.jsx';
import ProfileButtons from './ProfileButtons.jsx'
import NavigationButtons from './NavigationButtons.jsx'
import { ButtonToolbar } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Delivery from './Delivery.jsx';


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
        'height': '57%',
        'position': 'absolute',
        'backgroundColor': 'rgba(248, 247, 216, 0.7)',
        'backgroundImage': `url(${this.props.restaurant.picture})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': '100%',
      },
      
    }

    return( 
      <div style={styles.profile}>
        <ProfileButtons name={this.props.restaurant.name}/>
        <Info restaurant={this.props.restaurant}/>
        
      </div>
    )
  }
  
}

export default Profile;
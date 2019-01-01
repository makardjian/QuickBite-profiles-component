import React from 'react';
import Info from './Info.jsx';
import { ButtonToolbar } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from './../styles/Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return( 
      <div className={styles.profile}>
        <ButtonToolbar id='profile-buttons'>
            <Button className='circle'>
              <span className='glyphicon glyphicon-bookmark'></span>
            </Button>
            <Button className='circle'>&lt</Button>
        </ButtonToolbar>
        <Info restaurant={this.props.restaurant}/>
      </div>
    )
  }
  
}

export default Profile;
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
   // bootstrapUtils.addStyle(Button, 'custom');
    
    return( 
      <div style={styles.profile}>
        <ButtonToolbar id='profile-buttons'>
        {/* <style type="text/css">
          {`
        .btn-custom {
          float: right;
          padding-right: 75px;
        }
        `}
        </style> */}
            <Button bsStyle='custom'className='circle'>
              <span className='glyphicon glyphicon-bookmark'></span>
            </Button>
            <Button className='circle'>Share</Button>
        </ButtonToolbar>
        <Info restaurant={this.props.restaurant}/>
        <div>
          <a href='#'>Menu </a>
          <a href='#'>About </a>
          <a href='#'>Reviews </a>
        </div>
      </div>
    )
  }
  
}

export default Profile;
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
    return( 
      <div id='profile'>
        <ButtonToolbar id='profile-buttons'>
            <Button className='circle'>B</Button>
            <Button className='circle'>S</Button>
        </ButtonToolbar>
        <Info restaurant={this.props.restaurant}/>
      </div>
    )
  }
  
}

export default Profile;
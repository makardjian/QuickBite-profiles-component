import React from 'react';
import Info from './Info.jsx';
import ProfileButtons from './ProfileButtons.jsx'
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
      restaurant: {}
    }
    
  }

  componentDidMount() {
    let id = window.location.pathname.split('/')[2]
    if (!id) {
      id = 100;
    }
    axios.get(`/restaurants/${id}/profiles`)
      .then((response) => {
        this.setState({
          restaurant: response.data,
        });
      });
  }

  render() {
    const styles = {
      profile: {
        'paddingTop': '15px',
        'width': '100%',
        'height': '57%',
        'position': 'absolute',
        'marginTop': '-20px',
        'backgroundColor': 'rgba(248, 247, 216, 0.7)',
        'backgroundRepeat': 'no-repeat',
        'backgroundImage': `url(${this.state.restaurant.picture})`,
        'backgroundSize': '100%',
      },
    }
    
    return( 
      <div style={styles.profile}>
        <div style={{width: '100%', height:'170px', overflow:'hidden', marginTop: '60px'}}>
          <img src={this.state.restaurant.picture} style={{width: '100%'}}></img>
        </div>
        
        <ProfileButtons name={this.state.restaurant.name}/>
        <Info restaurant={this.state.restaurant}/>
        
      </div>
    )
  }
  
}

export default Profile;
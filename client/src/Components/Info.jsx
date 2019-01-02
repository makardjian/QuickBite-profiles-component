import React from 'react';
import Stars from './Stars.jsx';
import axios from 'axios';
import NavigationButtons from './NavigationButtons.jsx';
import Delivery from './Delivery.jsx';

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant : {},
    }
  }

  componentDidMount() {
    const id = window.location.pathname.substring(13);
    axios.get(`/restaurants/${id}/profile`)
      .then((response) => {
        this.setState({
          restaurant: response.data[0],
        });
      });
  }

  render() {
    const quality = this.state.restaurant.quality;
    const delivery = this.state.restaurant.delivery;
    const accuracy = this.state.restaurant.accuracy;
    const styles = {
      info: {
        'backgroundColor': 'white',
        'border': '1px solid',
        'position': 'absolute',
        'bottom': '0',
        'width': '100%',
        'paddingLeft': '70px'
      }
    }

    return (
      <div>
        <div>
          <div style={styles.info}>
            <h2>{this.state.restaurant.name}</h2>
            <span>
              <a href='#'>{this.state.restaurant.address} </a>
              <a href='#'> {this.state.restaurant.number}</a>
            </span>
            <div>
              <span> <Stars quality={quality} delivery={delivery} accuracy={accuracy} stars={this.state.restaurant.stars}/> </span>
              <span> <strong>{this.state.restaurant.quality}% </strong> Food was good</span>
              <span> <strong>{this.state.restaurant.delivery}%</strong> Delivery was on time</span>
              <span> <strong>{this.state.restaurant.accuracy}%</strong> Order was accurate</span>
              <br></br><br></br><br></br>
            </div>
            <Delivery />
            <NavigationButtons />
          </div>
        </div>
      </div>
    )
  }
}

export default Info;
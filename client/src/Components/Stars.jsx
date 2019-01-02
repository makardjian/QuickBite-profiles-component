import React from 'react';
import { Popover } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import styles from './../styles/Stars.css.js';

class Stars extends React.Component {
  constructor(props) {
    super(props);
  }

  getStars(stars) {
    let starsArray = ['☆', ' ', '☆', ' ', '☆', ' ', '☆', ' ', '☆'];
    let full = '★';
    let count = 0;
    for (let i = 0; i < (stars*2); i++) {
      if(count === stars) {
        break;
      }
      if(i % 2 === 0) {
        starsArray[i] = full;
        count++;
      }
    }

    return starsArray;
  }

  render() {
    const stars = this.getStars(this.props.stars);
    const popOverBottom = (
      <Popover id='popover-bottom' title="Here's what people are saying:">
        <Table>
            <tr>
              <td>
                <p><strong>{this.props.quality}%</strong></p>
                <p>Food was</p>
                <p>good</p>
              </td>
              <td>
                <p><strong>{this.props.delivery}%</strong></p>
                <p>Delivery was</p>
                <p>on time</p>
              </td>
              <td>
                <p><strong>{this.props.accuracy}%</strong></p>
                <p>Order was</p>
                <p>accurate</p>
              </td>
            </tr>
        </Table>
          <span>Letter</span>
          <span>Name</span>
          <p>Comment</p>
          <div>
            <a href='#'>All reviews</a>
          </div>
      </Popover>
    )
    return (
      <span>
        <OverlayTrigger trigger={['hover','focus']} placement='bottom' overlay={popOverBottom} >
        <span style={styles.stars}>{stars}</span>
        </OverlayTrigger>
      </span>
    )
  }
}

export default Stars;
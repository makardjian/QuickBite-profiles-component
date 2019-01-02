import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import styles from './../styles/ProfileButtons.css.js'

class ProfileButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: false,
    }
  }

  render() {
    return (
      <div>
        <ButtonToolbar style={{'paddingRight': '55px'}}>
                <ShareButton name={this.props.name}/>
                <BookmarkButton />
        </ButtonToolbar>
        <ProfilePic />
      </div>
    )
  }
}

class ProfilePic extends React.Component {
  render() {
    const styles = {
      profilePic: {
        'float': 'right',
        'marginTop': '200px'
      }
    }

    return (
      <div style={styles.profilePic}>
        <Button>Hello</Button>
      </div>
    )
  }
}

class BookmarkButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      saved: false
    }
    this.toggleHighlight = this.toggleHighlight.bind(this);
  }

  toggleHighlight() {
    this.setState({ 
      saved: !this.state.saved
    })
  }

  render() {
    const regularButton = (
      <Button style={styles.profileButtons}>
        <span className='glyphicon glyphicon-bookmark'></span>
       </Button>
    )

    const highlightedButton = ( 
      <Button style={styles.highlighted}>
        <span className='glyphicon glyphicon-bookmark'></span>
      </Button>
    )

    return (
      <span onClick={this.toggleHighlight}>
        {this.state.saved ? highlightedButton : regularButton}
      </span>
    )
  }
}

class ShareButton extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      const styles = {
        profileButtons: {
          'float': 'right',
          'borderRadius': '50%'
        },
        socialMedia: {
          'maxWidth': '100%',
        }
      }
      return (
        <span>
          <Button style={styles.profileButtons} onClick={this.handleShow}>S</Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
          <Button onClick={this.handleClose}>X</Button>
            <Modal.Body>
              <h3>Share {this.props.name}</h3>
              <div style={styles.socialMedia}>
                <Button block>
                  Facebook
                </Button>
                <Button block>
                  Twitter
                </Button>
                <Button block>
                  Email
                </Button>
                <Button block>
                  Copy Link
                </Button>
              </div>
            </Modal.Body>
          </Modal>
          </span>
      );
    }
  }

export default ProfileButtons;
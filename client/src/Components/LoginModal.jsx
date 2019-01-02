import React from 'react';
import { Popover } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import styles from './../styles/LoginModal.css.js';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
    console.log('PROPS', this.props)
    this.state = {
      show: false,
      username: '',
      password: '',
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(e) {
    if(e.target.placeholder === 'Username') {
      this.setState({
        username: e.target.value,
      })
    } else if (e.target.placeholder === 'Password') {
      this.setState({
        password: e.target.value,
      })
    }
  }

  handleButtonSubmit() {
    this.props.handleSubmit(this.state.username);
  }

  render() {
    return (
      <span style={{'lineHeight': '40px'}}>
        <button style={styles.loginButton} onClick={this.handleShow} >
          Sign in
        </button>
        <Modal show={this.state.show} onHide={this.handleClose} animation>
          <Button onClick={this.handleClose}>X</Button>
          <Modal.Body>
            <h3>Sign in with your Grubhub account</h3>
            <FormGroup onChange= {this.handleChange}>
              <FormControl value={this.state.username} type="text" placeholder="Username"/> <br></br>
              <FormControl value={this.state.password} type="text" placeholder="Password"/>
            </FormGroup>
              <span>
                <ToggleButton value='check' type='checkbox'> Keep me signed in</ToggleButton>
                <a href='#'>Reset password</a>
              </span>
              <ButtonGroup vertical block>
               <br></br><Button onClick={this.handleButtonSubmit}>Sign in</Button><br></br>
                <p>or</p>
                <Button>Continue with Facebook</Button><br></br>
                <Button>Connect your Google Account</Button><br></br>
                <p>Don't have an account? <a href='#'>Create your account</a></p>
              </ButtonGroup>
          </Modal.Body>
        </Modal>
      </span>
    );
  }
}

export default LoginModal;
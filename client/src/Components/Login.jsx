import React from 'react'
import LoginModal from './LoginModal.jsx'
import DropDownButton from './DropDownButton.jsx';
import styles from './../styles/Login.css.js'
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      show: false
    };
    
  }

  handleSubmit(username) {
    this.setState({ 
      username: username
    })
  }

  handleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
      return (
        <div style={styles.navbar}>
          <span>
            <button style={styles.grubhubLogo}>GRUBHUB</button>
          </span>
          <span>
            <DropDownButton />
          </span>
          <span>
            <input style={styles.placeholder} type="text" placeholder="Pizza, sushi, chinese"/>
          </span>
          <span>
            <button style={styles.loginButton} onClick={this.handleShow.bind(this)}>
              Log in
            </button>
            {this.state.show ? <LoginModal toggle={this.toggle} show={this.state.show}/> : null}
          </span>
        </div>
      )
  }
}

export default Login;
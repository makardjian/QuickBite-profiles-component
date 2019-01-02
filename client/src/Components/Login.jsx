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
      username: ''
    };
    
  }

  handleSubmit(username) {
    this.setState({ 
      username: username
    })
    console.log(this.state)
  }

  render() {
    if(this.state.username === '') {
      console.log(styles.placeholder)
      return (
        <div>
        <Navbar fixedTop style={styles.navbar}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#' style={styles.home}>GRUBHUB</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <DropDownButton />
            <input style={styles.placeholder} type="text" placeholder="Pizza, sushi, chinese"/>
          </Nav>
          <view>
          <LoginModal handleSubmit={this.handleSubmit.bind(this)} />  
          </view>
        </Navbar>
        </div>
      )
    } else {
      return (
        <Navbar fixedTop style={styles.navbar}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">GRUBHUB</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavDropdown eventKey={1} title="Enter an address" id="address">
              <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl type="text" placeholder="Enter a new address"/>
                </FormGroup>
              </Navbar.Form>
            </NavDropdown>
            <Navbar.Form pullLeft>
                <FormGroup>
                  <FormControl type="text" placeholder="Pizza, sushi, chinese"/>
                </FormGroup>
            </Navbar.Form>  
            <NavItem eventKey={1} href="#">
              {this.state.username}
            </NavItem>
          </Nav>
        </Navbar>
      )
    }
  }
}

export default Login;
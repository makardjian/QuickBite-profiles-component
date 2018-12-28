import React from 'react';
import LoginModal from './LoginModal.jsx'
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import {NavItem } from 'react-bootstrap'


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
      return (
        <Navbar fixedTop>
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
              <LoginModal handleSubmit={this.handleSubmit.bind(this)} />
          </Nav>
        </Navbar>
      )
    } else {
      return (
        <Navbar fixedTop>
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
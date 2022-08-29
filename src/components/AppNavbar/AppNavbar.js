import react, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand tag={Link} to='/'>
          Home
        </NavbarBrand>
        <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to='employees'>Employees</NavLink>
            </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default AppNavbar;

import logo200Image from 'assets/images/logo.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
import {
  MdAccountCircle,
  MdDashboard,
  MdSend,
  MdWeb,
  MdSchedule,
  MdPersonPin,
  MdFolder,
} from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
import { NavLink, Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const navItems = [
  {
    to: '/superadmin/dashboard',
    name: 'dashboard',
    exact: true,
    Icon: MdDashboard,
  },
  {
    to: '/superadmin/profile',
    name: 'profile',
    exact: true,
    Icon: MdPersonPin,
  },
  { to: '/superadmin/admins', name: 'admins', exact: false, Icon: MdWeb },
  { to: '/superadmin/client', name: 'clients', exact: true, Icon: HiUserGroup },
  {
    to: '/superadmin/registeradmin',
    name: 'Register Admin',
    exact: true,
    Icon: MdAccountCircle,
  },
  {
    to: '/superadmin/documents',
    name: 'Documents',
    exact: true,
    Icon: MdFolder,
  },
  {
    to: '/superadmin/requests',
    name: 'Requests',
    exact: true,
    Icon: MdSend,
  },
  {
    to: '/superadmin/appointments',
    name: 'Appointments',
    exact: true,
    Icon: MdSchedule,
  },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <Link to="/superadmin/dashboard" className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="192"
                // height="50"
                className="pr-2 bg-white rounded-lg bg-opacity-75"
                alt=""
              />
            </Link>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;

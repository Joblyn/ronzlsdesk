import logo200Image from 'assets/images/logo.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
// import { FaGithub } from 'react-icons/fa';
import {
  // MdAccountCircle,
  // MdArrowDropDownCircle,
  // MdBorderAll,
  // MdBrush,
  // MdChromeReaderMode,
  MdDashboard,
  // MdExtension,
  // MdGroupWork,
  // MdInsertChart,
  // MdKeyboardArrowDown,
  // MdNotificationsActive,
  // MdPages,
  // MdRadioButtonChecked,
  MdSend,
  // MdStar,
  // MdTextFields,
  // MdViewCarousel,
  // MdViewDay,
  // MdViewList,
  // MdWeb,
  // MdWidgets,
  MdExitToApp,
  MdPersonPin,
  MdFolder,
  MdSchedule
} from 'react-icons/md';
import { NavLink, Link } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  // Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';
import { logOutAction } from '../../actions/user/Users';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

// const navComponents = [
//   { to: '/user/buttons', name: 'buttons', exact: false, Icon: MdRadioButtonChecked },
//   {
//     to: '/user/button-groups',
//     name: 'button groups',
//     exact: false,
//     Icon: MdGroupWork,
//   },
//   { to: '/user/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
//   { to: '/user/input-groups', name: 'input groups', exact: false, Icon: MdViewList },
//   {
//     to: '/user/dropdowns',
//     name: 'dropdowns',
//     exact: false,
//     Icon: MdArrowDropDownCircle,
//   },
//   { to: '/user/badges', name: 'badges', exact: false, Icon: MdStar },
//   { to: '/user/alerts', name: 'alerts', exact: false, Icon: MdNotificationsActive },
//   { to: '/user/progress', name: 'progress', exact: false, Icon: MdBrush },
//   { to: '/user/modals', name: 'modals', exact: false, Icon: MdViewDay },
// ];

// const navContents = [
//   { to: '/user/typography', name: 'typography', exact: false, Icon: MdTextFields },
//   { to: '/user/tables', name: 'tables', exact: false, Icon: MdBorderAll },
// ];

// const pageContents = [
//   { to: '/user/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
//   {
//     to: '/user/login-modal',
//     name: 'login modal',
//     exact: false,
//     Icon: MdViewCarousel,
//   },
// ];

const navItems = [
  { 
    to: '/user/dashboard', 
    name: 'Dashboard', 
    exact: true, 
    Icon: MdDashboard 
  },
  { 
    to: '/user/profile', 
    name: 'Profile', 
    exact: true, 
    Icon: MdPersonPin, 
  },
  { 
    to: '/user/requests', 
    name: 'Requests', 
    exact: true, 
    Icon: MdSend 
  },
  { 
    to: '/user/documents', 
    name: 'documents', 
    exact: true, 
    Icon: MdFolder 
  },
  { 
    to: '/user/appointments', 
    name: 'appointments', 
    exact: true, 
    Icon: MdSchedule 
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
            <Link to="/user/dashboard" className="navbar-brand d-flex">
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

            {/* <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">Components</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem> */}
            {/* <Collapse isOpen={this.state.isOpenComponents}>
              {navComponents.map(({ to, name, exact, Icon }, index) => (
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
            </Collapse> */}

            {/* <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Contents')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdSend className={bem.e('nav-item-icon')} />
                  <span className="">Contents</span>
                </div>
                <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                />
              </BSNavLink>
            </NavItem> */}
            {/* <Collapse isOpen={this.state.isOpenContents}>
              {navContents.map(({ to, name, exact, Icon }, index) => (
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
            </Collapse> */}

            <NavItem
              className={bem.e('nav-item')}
              onClick={logOutAction}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExitToApp className={bem.e('nav-item-icon')} />
                  <span className="">LOGOUT</span>
                </div>
                {/* <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenPages
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                /> */}
              </BSNavLink>
            </NavItem>
            {/* <Collapse isOpen={this.state.isOpenPages}>
              {pageContents.map(({ to, name, exact, Icon }, index) => (
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
            </Collapse> */}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
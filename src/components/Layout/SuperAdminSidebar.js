import logo200Image from 'assets/images/logo.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
// import { FaGithub } from 'react-icons/fa';
import {
  MdAccountCircle,
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
  MdWeb,
  // MdWidgets,
  MdSchedule,
  MdExitToApp,
  MdPersonPin,
  MdFolder
} from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi'
import { NavLink, Link } from 'react-router-dom';
import { logOutAction } from '../../actions/admin/authAction/Users';
import {
  // UncontrolledTooltip,
  // Collapse,
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

// const navComponents = [
//   {
//     to: '/superadmin/buttons',
//     name: 'buttons',
//     exact: false,
//     Icon: MdRadioButtonChecked,
//   },
//   {
//     to: '/superadmin/button-groups',
//     name: 'button groups',
//     exact: false,
//     Icon: MdGroupWork,
//   },
//   { to: '/superadmin/forms', name: 'forms', exact: false, Icon: MdChromeReaderMode },
//   {
//     to: '/superadmin/input-groups',
//     name: 'input groups',
//     exact: false,
//     Icon: MdViewList,
//   },
//   {
//     to: '/superadmin/dropdowns',
//     name: 'dropdowns',
//     exact: false,
//     Icon: MdArrowDropDownCircle,
//   },
//   { to: '/superadmin/badges', name: 'badges', exact: false, Icon: MdStar },
//   {
//     to: '/superadmin/alerts',
//     name: 'superadmin alerts',
//     exact: false,
//     Icon: MdNotificationsActive,
//   },
//   { to: '/superadmin/progress', name: 'progress', exact: false, Icon: MdBrush },
//   { to: '/superadmin/modals', name: 'modals', exact: false, Icon: MdViewDay },
// ];

// const navContents = [
//   {
//     to: '/superadmin/typography',
//     name: 'typography',
//     exact: false,
//     Icon: MdTextFields,
//   },
//   { to: '/superadmin/tables', name: 'tables', exact: false, Icon: MdBorderAll },
// ];

// const pageContents = [
//   {
//     to: '/superadmin/login-modal',
//     name: 'login modal',
//     exact: false,
//     Icon: MdViewCarousel,
//   },
// ];

const navItems = [
  { to: '/superadmin/dashboard', name: 'dashboard', exact: true, Icon: MdDashboard },
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
  // {
  //   to: '/superadmin/registerclient',
  //   name: 'Register Client',
  //   exact: false,
  //   Icon: MdAccountCircle,
  // },
  // { to: '/superadmin/charts', name: 'charts', exact: false, Icon: MdInsertChart },
  // { to: '/superadmin/widgets', name: 'widgets', exact: false, Icon: MdWidgets },
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

            {/* <NavItem
              className={bem.e('nav-item')}
              onClick={this.handleClick('Components')}
            >
              <BSNavLink className={bem.e('nav-item-collapse')}>
                <div className="d-flex">
                  <MdExtension className={bem.e('nav-item-icon')} />
                  <span className=" align-self-start">DOCUMENTS</span>
                </div> */}
                {/* <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenComponents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                /> */}
              {/* </BSNavLink>
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
                  <span className="">REQUESTS</span> */}
                {/* </div> */}
                {/* <MdKeyboardArrowDown
                  className={bem.e('nav-item-icon')}
                  style={{
                    padding: 0,
                    transform: this.state.isOpenContents
                      ? 'rotate(0deg)'
                      : 'rotate(-90deg)',
                    transitionDuration: '0.3s',
                    transitionProperty: 'transform',
                  }}
                /> */}
              {/* </BSNavLink> */}
            {/* </NavItem> */}
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

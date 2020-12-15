import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from 'components/Avatar';
import { UserCard } from 'components/Card';
import Portrait from '../../portrait.png';

// import Notifications from 'components/Notifications';
// import SearchInput from 'components/SearchInput';
// import { notificationsData } from 'demos/header';
// import withBadge from 'hocs/withBadge';
import { 
  getAllAdmin,
  getUserData 
} from 'apiConstants/apiConstants';

import {
  MdClearAll,
  MdExitToApp,
  // MdHelp,
  // MdInsertChart,
  // MdMessage,
  // MdNotificationsActive,
  // MdNotificationsNone,
  MdPersonPin,
  // MdSettingsApplications,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem,
  // NavbarToggler,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from 'reactstrap';
import bn from 'utils/bemnames';
import { getAdminData, logOutAction } from '../../actions/admin/authAction/Users';
import { getUser } from '../../actions/user/Users';

import Button from '../button';

const bem = bn.create('header');

// const MdNotificationsActiveWithBadge = withBadge({
//   size: 'md',
//   color: 'primary',
//   style: {
//     top: -10,
//     right: -10,
//     display: 'inline-flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   children: <small>5</small>,
// })(MdNotificationsActive);


function Header() {

  // const [isOpenNotificationPopover, setIsOpenNotificationPopover] = useState(false);
  // const [isNotificationConfirmed, setIsNotificationConfirmed] = useState(false);
  const [isOpenUserCardPopover, setIsOpenUserCardPopover] = useState(false);

  const dispatch = useDispatch();
  const adminData = useSelector(state => state.adminData);
  const userData = useSelector(state => state.userData.data);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if ((role === 'superadmin') || (role === 'admin')) {
      dispatch(getAdminData(getAllAdmin));
    } else if (role === 'user') {
      dispatch(getUser(getUserData));
    }
  }, []);
  // const toggleNotificationPopover = () => {
  //   setIsOpenNotificationPopover(isOpenNotificationPopover => !isOpenNotificationPopover);

  //   if (!isNotificationConfirmed) {
  //     setIsNotificationConfirmed(true);
  //   }
  // };

  const toggleUserCardPopover = () => {
    setIsOpenUserCardPopover(prevState => !prevState);
  };

  const handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  return (
    <Navbar light expand className={bem.b('bg-white')}>
      <Nav navbar className="mr-2">
        <Button outline 
          onClick={handleSidebarControlButton} 
          value={<MdClearAll size={25} />} 
        />
      </Nav>
      {/* <Nav navbar>
        <SearchInput />
      </Nav> */}

      <Nav navbar className={bem.e('nav-right')}>
        {/* <NavItem className="d-inline-flex">
          <NavLink id="Popover1" className="position-relative">
            {isNotificationConfirmed ? (
              <MdNotificationsNone
                size={25}
                className="text-secondary can-click"
                onClick={toggleNotificationPopover}
              />
            ) : (
              <MdNotificationsActiveWithBadge
                size={25}
                className="text-secondary can-click animated swing infinite"
                onClick={toggleNotificationPopover}
              />
            )}
          </NavLink>
          <Popover
            placement="bottom"
            isOpen={isOpenNotificationPopover}
            toggle={toggleNotificationPopover}
            target="Popover1"
          >
            <PopoverBody>
              <Notifications notificationsData={notificationsData} />
            </PopoverBody>
          </Popover>
        </NavItem> */}

        <NavItem>
          <NavLink id="Popover2">
            <Avatar
              onClick={toggleUserCardPopover}
              className="can-click"
              src={Portrait}
            />
          </NavLink>
          <Popover
            placement="bottom-end"
            isOpen={isOpenUserCardPopover}
            toggle={toggleUserCardPopover}
            target="Popover2"
            className="p-0 border-0"
            style={{ minWidth: 250 }}
          >
            <PopoverBody className="p-0 border-light">
              <UserCard
                avatar={Portrait}
                title={adminData.fullName || userData.companyName}
                subtitle={adminData.email || userData.email}
                text="Last updated 3 mins ago"
                className="border-light"
              >
                <ListGroup flush>
                  <ListGroupItem tag="button" action className="border-light">
                    <Link
                      style={{
                        color: 'inherit',
                        textDecoration: 'none', 
                        width: '100%'      
                      }}
                      to={`/${adminData.role || userData.role}/profile`}
                    >
                      <MdPersonPin /> Profile
                    </Link>
                  </ListGroupItem>
                  {/* <ListGroupItem tag="button" action className="border-light">
                    <MdMessage /> Messages
                  </ListGroupItem> */}
                  <ListGroupItem tag="button" action className="border-light">
                    <MdExitToApp />
                    <Link to="/" onClick={logOutAction} style={{color: 'red'}}>
                      Log Out
                    </Link>
                  </ListGroupItem>
                </ListGroup>
              </UserCard>
            </PopoverBody>
          </Popover>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Header;

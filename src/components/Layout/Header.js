import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from 'components/Avatar';
import { UserCard } from 'components/Card';
import Notifications from 'components/Notifications';
// import SearchInput from 'components/SearchInput';
import { notificationsData } from 'demos/header';
import withBadge from 'hocs/withBadge';
import { getAllAdmin } from 'apiConstants/apiConstants';

import {
  MdClearAll,
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdNotificationsActive,
  MdNotificationsNone,
  MdPersonPin,
  MdSettingsApplications,
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
import Button from '../button';

const bem = bn.create('header');

const MdNotificationsActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>5</small>,
})(MdNotificationsActive);


function Header() {

  const [isOpenNotificationPopover, setIsOpenNotificationPopover] = useState(false);
  const [isNotificationConfirmed, setIsNotificationConfirmed] = useState(false);
  const [isOpenUserCardPopover, setIsOpenUserCardPopover] = useState(false);

  const dispatch = useDispatch();
  const adminData = useSelector(state => state.adminData);
  useEffect(() => {
    dispatch(getAdminData(getAllAdmin));
    console.log(adminData);
  }, []);

  const toggleNotificationPopover = () => {
    setIsOpenNotificationPopover(isOpenNotificationPopover => !isOpenNotificationPopover);

    if (!isNotificationConfirmed) {
      setIsNotificationConfirmed(true);
    }
  };

  const toggleUserCardPopover = () => {
    setIsOpenUserCardPopover(!isOpenUserCardPopover);
  };

  const handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  return (
    <Navbar light expand className={bem.b('bg-white')}>
      <Nav navbar className="mr-2">
        <Button outline onClick={handleSidebarControlButton}>
          <MdClearAll size={25} />
        </Button>
      </Nav>
      {/* <Nav navbar>
        <SearchInput />
      </Nav> */}

      <Nav navbar className={bem.e('nav-right')}>
        <NavItem className="d-inline-flex">
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
        </NavItem>

        <NavItem>
          <NavLink id="Popover2">
            <Avatar
              onClick={toggleUserCardPopover}
              className="can-click"
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
                title={adminData.fullName}
                subtitle={adminData.email}
                text="Last updated 3 mins ago"
                className="border-light"
              >
                <ListGroup flush>
                  <ListGroupItem tag="button" action className="border-light">
                    <MdPersonPin /> Profile
                  </ListGroupItem>
                  {/* <ListGroupItem tag="button" action className="border-light">
                    <MdInsertChart /> Stats
                  </ListGroupItem> */}
                  <ListGroupItem tag="button" action className="border-light">
                    <MdMessage /> Messages
                  </ListGroupItem>
                  {/* <ListGroupItem tag="button" action className="border-light">
                    <MdSettingsApplications /> Settings
                  </ListGroupItem> */}
                  {/* <ListGroupItem tag="button" action className="border-light">
                    <MdHelp /> Help
                  </ListGroupItem> */}
                  <ListGroupItem tag="button" action className="border-light">
                    <MdExitToApp />
                    <Link to="/" onClick={logOutAction}>
                      Sign Out
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

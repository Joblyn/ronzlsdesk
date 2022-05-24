import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '../../components/Avatar';
import { UserCard } from '../../components/Card';
import Portrait from '../../portrait.png';
import { getAllAdmin, getUserData } from '../../apiConstants/apiConstants';

import {
  MdClearAll,
  MdExitToApp,
  MdLockOutline,
  MdPersonPin,
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
import bn from '../../utils/bemnames';
import {
  getAdminData,
  logOutAction,
} from '../../actions/admin/authAction/Users';
import { getUser } from '../../actions/user/Users';

import Button from '../button';

const bem = bn.create('header');


function Header() {
  const [isOpenUserCardPopover, setIsOpenUserCardPopover] = useState(false);

  const dispatch = useDispatch();
  const adminData = useSelector(state => state.adminData);
  const userData = useSelector(state => state.userData.data);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'superadmin' || role === 'admin') {
      dispatch(getAdminData(getAllAdmin));
    } else if (role === 'user') {
      dispatch(getUser(getUserData));
    }
  }, [dispatch]);

  const toggleUserCardPopover = () => {
    setIsOpenUserCardPopover(isOpenUserCardPopover => !isOpenUserCardPopover);
  };

  const handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  return (
    <Navbar light expand className={bem.b('bg-white')}>
      <Nav navbar className="mr-2">
        <Button
          outline
          onClick={handleSidebarControlButton}
          value={<MdClearAll size={25} />}
        />
      </Nav>

      <Nav navbar className={bem.e('nav-right')}>

        <NavItem>
          <NavLink id="Popover2">
            <Avatar
              onClick={toggleUserCardPopover}
              className="can-click"
              src={userData.profilePics || Portrait}
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
                avatar={userData.profilePics || Portrait}
                title={ adminData.fullName || (userData.director && userData.director[0].fullName)
                }
                subtitle={adminData.email || userData.email}
                className="border-light"
              >
                <ListGroup flush>
                  <ListGroupItem tag="button" action className="border-light">
                    <Link
                      style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                      }}
                      to={`/${adminData.role || userData.role}/profile`}
                    >
                      <MdPersonPin /> Profile
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem tag="button" action className="border-light">
                    <MdLockOutline />
                    <Link
                      style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                      }}
                      to={`/${adminData.role || userData.role}/reset-password`}
                    >
                      Reset password
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem tag="button" action className="border-light">
                    <MdExitToApp />
                    <Link
                      to="/"
                      onClick={logOutAction}
                      style={{ color: 'red' }}
                    >
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

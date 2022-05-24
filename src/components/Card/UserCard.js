import React, { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from '../../utils/propTypes';

import classNames from 'classnames';

import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

import Avatar from '../Avatar';
import { Link, useHistory } from 'react-router-dom';
import { baseUrl, updateImage } from '../../apiConstants/apiConstants';
import nProgress from 'nprogress';
import { useDispatch } from 'react-redux';
import { onGetUser } from '../../actions/user/Users';

const Span = styled.span`
  visibility: ${({ visibility }) =>
    visibility === 'true' ? 'visible' : 'hidden'};
  position: absolute;
  top: 70px;
  right: 130px;
  opacity: 1;
  z-index: 100;
  border-radius: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 10px 0 10px 0;
  width: ${({ visibility }) => (visibility === 'true' ? 'fit-content' : '0')};
  height: ${({ visibility }) => (visibility === 'true' ? 'fit-content' : '0')};
  transition: all 0.2s ease-out;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
`;

const Ul = styled.ul`
  margin: 0;
`;

const Li = styled.li`
  font-size: 14.8px;
  line-height: 17px;
  padding: 15px 58px 12px 24px;
  color: #212529;
  cursor: pointer;

  :hover {
    background-color: #e9e9e9;
  }
`;

const Div = styled.div``;

const UserCard = ({
  avatar,
  avatarSize,
  title,
  subtitle,
  text,
  children,
  className,
  ...restProps
}) => {
  const classes = classNames('bg-gradient-theme', className);
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  localStorage.setItem('photoUrl', avatar)

  const upload = (endpoint, formData) => {
    const token = localStorage.getItem('jwtToken');
    const bearerToken = 'Bearer ' + token; 
    nProgress.start();
    fetch(endpoint, {
      method: 'PATCH',
      body: formData,
      credentials: 'same-origin',
      headers: new Headers({
        Authorization: bearerToken,
      })
    })
    .then(res => res.json())
    .then(data => {
      nProgress.done();
      nProgress.remove();
      dispatch(onGetUser(data.data));
      history.push('/user/profile/photo');
    })
    .catch(() => {
      nProgress.done();
      nProgress.remove();
      alert('Oops, An error occured, please try again!');
      console.error();
    })
  };

  const handleUpload = target => {
    if(target.files) {
      if(target.files.length !== 0) {
        const formData = new FormData();
        formData.append('profilePics', target.files[0]);
        const endpoint = baseUrl + updateImage;
        upload(endpoint, formData);
      }
    }
  }

  return (
    <>
      <Card inverse className={classes} {...restProps}>
        <CardBody className="d-flex justify-content-center align-items-center flex-column">
          <Avatar
            src={avatar}
            size={avatarSize}
            className="mb-2 cursor-pointer"
            onClick={() => setShowOptions(showOptions => !showOptions)}
          />
          <Span
            className="bg-white option-cont"
            visibility={showOptions ? 'true' : 'false'}
          >
            <Div>
              <Ul>
                <Li>
                  <Link
                    to="/user/profile/photo"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      width: '100%',
                    }}
                  >
                    View photo
                  </Link>
                </Li>
                <Li className="position-relative">
                  Change photo
                  <input
                    type="file"
                    onChange={e => handleUpload(e.target)}
                    style={{
                      opacity: 0,
                      position: 'absolute',
                      top:'0',
                      left: '0',
                      zIndex: '10',
                      width: '100%',
                      height: '100%',
                      cursor: 'pointer'
                    }}
                  />
                </Li>
              </Ul>
            </Div>
          </Span>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>
            <small>{text}</small>
          </CardText>
        </CardBody>
        {children}
      </Card>
    </>
  );
};

UserCard.propTypes = {
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

UserCard.defaultProps = {
  avatarSize: 80,
};

export default UserCard;

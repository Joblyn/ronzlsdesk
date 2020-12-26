import React, { useState } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'utils/propTypes';

import classNames from 'classnames';

import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

import Avatar from '../Avatar';
import { Link } from 'react-router-dom';

const Span = styled.span`  
  visibility: ${({visibility}) => visibility === 'true' ? 'visible' : 'hidden'};
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
  width: ${({visibility}) => visibility === 'true' ? 'fit-content' : '0'};
  height: ${({visibility}) => visibility === 'true' ? 'fit-content' : '0'};
  transition: all .2s ease-out; 
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
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
  return (
    <>
      <Card inverse className={classes} {...restProps}>
        <CardBody className="d-flex justify-content-center align-items-center flex-column">
          <Avatar src={avatar} size={avatarSize} className="mb-2 cursor-pointer" onClick={() => setShowOptions(showOptions => !showOptions)}/>
          <Span className="bg-white option-cont" visibility={showOptions ? 'true' : 'false'}>
            <Div>
              <Ul>
                <Li className="option-li"><Link to='/user/photo' onClick={() => localStorage.setItem('photoUrl', avatar)} style={{
                  color: 'inherit',
                  textDecoration: 'none'
                }}>View photo</Link></Li>
                <Li className="option-li">Change photo</Li>
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
      {/* {showImage && <ImageCOnt className="opacity-100 bg-black d-flex align-items-center justify-content-center position-fixed overflow-hidden w-screen h-screen top-0 left-0" style={{zIndex:'150'}}>
        <Img src={avatar}/>
      </ImageCOnt>} */}
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

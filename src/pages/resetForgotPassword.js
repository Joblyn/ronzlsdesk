import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import logo from '../assets/images/logo.png';
import bgImage from '../assets/images/illustration.png';
import { userResetForgotPassword } from '../apiConstants/apiConstants';
import { resetForgotPassword } from '../actions/user/Users';

//components
import InputField from '../components/InputField';
import Button from '../components/button';
import PopupSuccess from '../components/popup-success';

const ResetForgotPassword = () => {
  const [control, setControl] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dontMatch, setDontMatch] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const forgotPasswordReset = useSelector(state => state.resetForgotPassword);

  const handleChange = (event) => {
    setControl({
      ...control,
      [event.target.name]: event.target.value,
    });
  };

  const { password } = control;
  
  const handleClick = (event) => {
    event.preventDefault();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('token');

    if (confirmPassword !== password) {
      setDontMatch(true);
    } else {
      setDontMatch(false);
      const payload = {
        password,
        token
      }
      dispatch(resetForgotPassword(userResetForgotPassword, payload));
    }
  };

  useEffect(() => {
    if(forgotPasswordReset.isSuccessful) {
      setShowPopup(true);
    }
  }, [forgotPasswordReset]);

  if(forgotPasswordReset.isSuccessful) {
    alert('Password changed successfully. Please login with new password.');
    window.location.pathname = "/user/login";
  };

  let border = { border: '1px solid #dee2e6'};
  if (confirmPassword && (confirmPassword === password)) {
    border = { border: '2px solid green'} 
  } else if (confirmPassword && (confirmPassword !== password)) {
    border = { border: '2px solid red'}
  }
  
  return (
    <div className="login">
      {showPopup && <PopupSuccess 
          button
          majorText="Password changed"
          text="Password changed successfully. Please login with new password."
          redirect="/user/login"
      />}
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <div className="hidden xl:flex flex-col min-h-screen">
            <div className="pt-3">
              <Link to="/" className="-intro-x flex items-center">
                <img alt="Ronzl Logo" className="w-48" src={logo} />
              </Link>
            </div>
            <div className="my-auto">
              <img
                alt="Ronzl background"
                className="-intro-x w-1/2 -mt-16"
                src={bgImage}
              />
              <div className="-intro-x text-gray-700 font-medium text-4xl leading-tight mt-10">
                Reset account password.
              </div>
            </div>
          </div>
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <div className="lg:hidden">
                <Link to="/" className="-intro-x flex items-center">
                  <img alt="Ronzl Logo" className="w-20" src={logo} />
                </Link>
              </div>
              <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">Reset account password</h2> 
              <div className="intro-x mt-8">
                {dontMatch && <p style={{color: 'red', fontSize:'.8rem'}}>Passwords don't match</p>}
                <InputField
                  type="password"
                  name="password"
                  className="intro-x login__input input input--lg border border-gray-300 block mt-4 w-100"
                  placeholder="New Password"
                  onChange={handleChange}
                />
                <InputField
                  style={border}
                  type="password"
                  className="intro-x login__input input input--lg block mt-4 w-100"
                  placeholder="Confirm New Password"
                  onChange={({target}) => setConfirmPassword(target.value)}
                />
              </div>
              <div className="intro-x mt-5 xl:mt-8 xl:text-left">
                <Button
                  type="button"
                  className="button button--lg w-full xl:w-48 text-white bg-theme-1 xl:mr-3"
                  value="Reset Password"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetForgotPassword;

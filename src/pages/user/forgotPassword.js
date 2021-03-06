import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import bgImage from '../../assets/images/illustration.png';

//components
import InputField from '../../components/InputField';
import Button from '../../components/button';
import { Label } from 'reactstrap';
import PopupSuccess from '../../components/popup-success';

import { forgotPasswordUser } from '../../actions/user/Users';
import { userForgotPassword } from '../../apiConstants/apiConstants';
import { useDispatch, useSelector } from 'react-redux';

const ForgotPassword = () => {
  const [control, setControl] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const userForgotPass = useSelector(state => state.userForgotPassword);

  const handleChange = event => {
    setControl({
      ...control,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = event => {
    event.preventDefault();
    dispatch(forgotPasswordUser(userForgotPassword, control));
  };
  useEffect(() => {
    if(userForgotPass.isSuccessful) {
      setShowPopup(true);
    };
  }, [userForgotPass]);


  return (
    <div className="login">
      {showPopup && (
        <PopupSuccess
          button
          text="A link has been sent to your email. Kindly follow the link to reset your password."
          setShow={setShowPopup}
        />
      )}
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
                Retrieve your account
              </div>
            </div>
          </div>
          <div className="min-h-screen xl:h-auto flex py-5 xl:py-0 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <div className="lg:hidden">
                <div className="pt-3">
                  <Link to="/" className="-intro-x flex items-center">
                    <img alt="Ronzl Logo" className="w-20" src={logo} />
                  </Link>
                </div>
              </div>
              <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                Retrieve your account
              </h2>
              <div className="intro-x mt-8">
                <Label>Type in your email</Label>
                <InputField
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="intro-x login__input input input--lg border border-gray-300 block w-100"
                  placeholder="Email"
                />
              </div>

              <div className="intro-x mt-5 xl:mt-8 xl:text-left">
                <Button
                  type="button"
                  onClick={handleClick}
                  className="button button--lg w-full xl:w-40 text-white bg-theme-1 xl:mr-3"
                  value="Confirm Email"
                />
              </div>
              <div className="intro-x mt-6 xl:mt-10 text-lg text-gray-700 xl:text-left">
                Already have an account?
                <Link
                  to="/user/login"
                  className="text-green-500 font-semibold px-2 hover:underline"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

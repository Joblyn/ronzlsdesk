import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

import logo from '../../assets/images/logo.png';
import bgImage from '../../assets/images/illustration.png';
import setAuthToken from '../../utils/setAuthToken';

//components
import InputField from '../../components/InputField';
import Button from '../../components/button';

import { loginUser, setCurrentUser } from '../../actions/user/Users';
import { userLogin } from '../../apiConstants/apiConstants';

const Login = () => {
  const [control, setControl] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const userLog = useSelector(state => state.userLoginAuth);

  const handleChange = event => {
    setControl({
      ...control,
      [event.target.name]: event.target.value,
    });
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('jwtToken');
  //   const role = localStorage.getItem('role');
  //   if (token && role === 'user') {
  //     history.push('/user/dashboard');
  //   }
  // }, []);

  useEffect(() => {
    if (userLog.isSuccessful) {
      //save to local storage
      const { token } = userLog.result;
      const { role } = userLog.result;
      //set token to local storage
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('role', role);
      //set token to Auth header
      setAuthToken(token);
      //deocde token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
      history.push('/user/dashboard');
    }
  }, [userLog]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginUser(userLogin, control));
  };

  return (
    <div className="login">
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
                {/* A few more clicks to
                <br /> */}
                Login to your account.
              </div>
              <div className="-intro-x mt-5 text-lg text-gray-700">
                Manage all your e-commerce accounts in one place
              </div>
            </div>
          </div>
          <div className="xl:h-auto flex py-5 xl:py-0 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <div className="lg:hidden">
                <Link to="/" className="-intro-x flex items-center">
                  <img
                    alt="Ronzl background"
                    className="w-20"
                    src="/assets/images/logo.png"
                  />
                </Link>
              </div>
              <h2 className="intro-x font-bold text-2xl xl:text-3xl xl:text-left">
                Login
              </h2>
              <div className="intro-x mt-2 text-gray-500 xl:hidden">
                Login to your account. <br />
                Manage all your e-commerce accounts in one place
              </div>
              <form onSubmit={handleSubmit}>
                <div className="intro-x mt-8">
                  <InputField
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="intro-x login__input input input--lg border border-gray-300 block"
                    placeholder="Email"
                  />
                  <InputField
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                    placeholder="Password"
                  />
                </div>
                <div className="intro-x flex text-gray-700 text-xs sm:text-sm mt-4">
                  <Link
                    to="/user/forgot-password"
                    className="text-green-500 font-semibold px-2 hover:underline"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div className="intro-x mt-5 xl:mt-8 xl:text-left">
                  <InputField
                    type="submit"
                    className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                    value="Login"
                  />
                </div>
              </form>
              <div className="intro-x mt-6 xl:mt-10 text-lg text-gray-700 xl:text-left">
                Don't have an account?
                <Link
                  to="/user/register"
                  className="text-green-500 font-semibold px-2 hover:underline"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

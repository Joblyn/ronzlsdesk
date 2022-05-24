import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

import logo from '../../assets/images/logo.png';
import bgImage from '../../assets/images/illustration.png';

import InputField from '../../components/InputField';
import {
  login,
  setCurrentAdminUser,
} from '../../actions/admin/authAction/Users';
import { adminLogin } from '../../apiConstants/apiConstants';
import setAuthToken from '../../utils/setAuthToken';

const AdminLogin = () => {
  const [control, setControl] = useState({});
  const dispatch = useDispatch();
  const adminLog = useSelector(state => state.adminLoginAuth);

  const handleChange = event => {
    setControl({
      ...control,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (adminLog.isSuccessful) {
      //save to local storage
      const { token } = adminLog.result;
      const { role } = adminLog.result;
      //set token to local storage
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('role', role);
      //set token to Auth header
      setAuthToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentAdminUser(decoded));
      if (role === 'admin') {
        window.location.pathname = '/admin/dashboard';
      }
      if (role === 'superadmin') {
        window.location.pathname = '/superadmin/dashboard';
      }
    }
  }, [adminLog, dispatch]);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login(adminLogin, control));
  };

  return (
    <div className="login min-h-screen">
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
                  <img alt="Ronzl background" className="w-20" src={logo} />
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
                    className="intro-x login__input input input--lg border border-gray-300 block w-100"
                    placeholder="Email"
                    required
                  />
                  <InputField
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="intro-x login__input input input--lg border border-gray-300 block mt-4 w-100"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="intro-x flex text-gray-700 text-xs sm:text-sm mt-4">
                  <Link
                    to="/admin/forgot-password"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

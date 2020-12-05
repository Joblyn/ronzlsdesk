import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import bgImage from '../assets/images/placeholder.jpg';
import pageBG from '../assets/images/bgImage.jpg';

export default function Landing() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    const role = localStorage.getItem('role');
    console.log('Auth: ' + token);
    console.log('Role: ' + role);
    token && history.push(`/${role}/dashboard`);
    // if (token && role === 'admin') {
    //   history.push('/admin/dashboard');
    // } else if (token && role === 'superadmin'){
    //   history.push('superadmin/dashboard')
    // } else if (token && role === 'user') {
    //   history.push('/user/dashboard');
    // }
  }, []);

  return (
    <div
      className="bg-cover h-screen bg-no-repeat p-4 bg-opacity-25"
      style={{ backgroundImage: `url(${pageBG})` }}
    >
      <div className="login">
        <div className="container sm:px-10">
          <div className="block xl:grid grid-cols-2 gap-4">
            <div className="hidden xl:flex flex-col min-h-screen">
              <Link to="/">
                <img
                  className="-intro-x flex items-center rounded-lg w-48 bg-white bg-opacity-75"
                  alt="Ronzl background"
                  src={logo}
                />
              </Link>
              {/* <div className="my-auto">
                <div className="-intro-x text-white font-medium text-5xl leading-tight mt-10">
                  {/* A few more clicks to
                <br /> 
                  Login to your account.
                </div>
                <div className="-intro-x mt-5 text-lg text-white">
                  Manage all your e-commerce accounts in one place
                </div>
              </div> */}
            </div>
            <div className="h-screen xl:h-auto flex py-5 xl:py-0 xl:my-0">
              <div className="my-auto mx-auto xl:ml-2 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full">
                <div className="lg:hidden">
                  <Link to="/">
                    <img
                      alt="Ronzl background"
                      className="-intro-x flex items-center w-20"
                      src={logo}
                    />
                  </Link>
                </div>
                <div className="my-4">
                  <h2 className="intro-x font-semibold text-gray-800 text-3xl xl:text-5xl text-left">
                    Welcome!
                  </h2>
                  <div className="intro-x mt-2 text-gray-800 xl:hidden">
                    Login to your account. <br />
                    Manage all your e-commerce accounts in one place
                  </div>
                </div>
                <div className="intro-x mt-8 pb-4">
                  <div className="intro-x mt-8">
                    <div className="intro-y max-w-xl">
                      <div className="zoom-in">
                        <div className="box py-10 rounded-md bg-green-200 px-6 flex justify-center sm:justify-between flex-wrap">
                          <div className="mx-2 pb-8 sm:pb-0 text-center">
                            <img
                              src={bgImage}
                              className="h-40 w-40 mb-3 rounded-full"
                              alt="Placeholder"
                            />
                            <Link
                              to="/admin/login"
                              className="text-green-500 text-lg font-semibold px-2 hover:underline"
                            >
                              Admin
                            </Link>
                          </div>

                          <div className="mx-2 text-center">
                            <img
                              src={bgImage}
                              className="h-40 w-40 mb-3 rounded-full"
                              alt="Placeholder"
                            />
                            <Link
                              to="/user/login"
                              className="text-green-500 text-lg font-semibold px-2 hover:underline"
                            >
                              Client
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

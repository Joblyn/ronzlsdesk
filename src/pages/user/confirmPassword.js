import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { useDispatch } from "react-redux";

import logo from '../../assets/images/logo.png';
import bgImage from '../../assets/images/illustration.png';

//components
import InputField from '../../components/InputField';
import Button from '../../components/button';

// import { login } from "../../actions/User";
// import { userLogin } from "../../apiConstants/ApiConstant";

const ConfirmPassword = () => {
  // const [control, setControl] = useState({});

  // const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   setControl({
  //     ...control,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   dispatch(login(userLogin, control));
  //   console.log(control);
  // };

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
                alt="Ronzl background image"
                className="-intro-x w-1/2 -mt-16"
                src={bgImage}
              />
              <div className="-intro-x text-gray-700 font-medium text-4xl leading-tight mt-10">
                {/* A few more clicks to
                <br /> */}
                Update account password.
              </div>
              {/* <div className="-intro-x mt-5 text-lg text-gray-700">
                Manage all your e-commerce accounts in one place
              </div> */}
            </div>
          </div>
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <div className="lg:hidden">
                <Link to="/" className="-intro-x flex items-center">
                  <img alt="Ronzl Logo" className="w-20" src={logo} />
                </Link>
              </div>
              <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left"></h2>
              <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
                Update account
                <br /> password <br />
                {/* Manage all your e-commerce accounts in one place */}
              </div>
              <div className="intro-x mt-8">
                <InputField
                  type="password"
                  className="intro-x login__input input input--lg border border-gray-300 block"
                  placeholder="Old Password"
                />
                <InputField
                  type="password"
                  className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                  placeholder="New Password"
                />
                <InputField
                  type="password"
                  className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                  placeholder="Confirm New Password"
                />
              </div>

              <div className="intro-x mt-5 xl:mt-8 xl:text-left">
                <Button
                  type="button"
                  className="button button--lg w-full xl:w-48 text-white bg-theme-1 xl:mr-3"
                  value="Update Password"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPassword;

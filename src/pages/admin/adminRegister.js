import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { register, test } from '../../actions/admin/authAction/Users';
import { adminRegsiter } from '../../apiConstants/apiConstants';

import logo from '../../assets/images/logo.png';
import bgImage from '../../assets/images/illustration.png';

//components
import InputField from '../../components/InputField';
import Button from '../../components/button';

import InputDropdown from '../../components/InputDropdown';
import Page from '../../components/Page';

const AdminRegister = () => {
  const [control, setControl] = useState({});
  const dispatch = useDispatch();
  const adminRegister = useSelector(state => state.adminRegisterAuth);
  const history = useHistory();

  useEffect(() => {
    console.log(adminRegister);
    if (adminRegister.isSuccessful) {
      history.push('/admin/login');
    }
  }, [adminRegister]);

  const handleChange = event => {
    setControl({
      ...control,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = event => {
    event.preventDefault();
    dispatch(register(adminRegsiter, control));
  };

  const datas = [
    ['Select Role', ''],
    ['Super Admin', 'superadmin'],
    ['Admin', 'admin'],
  ];

  const dropdownData = datas.map((data, id) => {
    return (
      <option value={data[1]} key={id}>
        {data[0]}
      </option>
    );
  });

  return (
    <Page
      className="DashboardPage"
      title="Regsiter Admin"
      breadcrumbs={[{ name: 'Regsiter Admin', active: true }]}
    >
      <div className="login">
        <div className="container sm:px-10">
          <div className="block xl:grid gap-4">
            <div className="h-screen xl:h-auto flex py-2 xl:py-0 xl:my-0">
              <div className="my-auto mx-auto xl:ml-2 bg-white xl:bg-transparent px-5 sm:px-8 pb-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                <div className="intro-x mt-8">
                  <InputField
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    className="intro-x login__input input input--lg border border-gray-300 block"
                    placeholder="Full Name"
                  />
                  <InputField
                    type="tel"
                    name="phoneNumber"
                    onChange={handleChange}
                    className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                    placeholder="Phone Number"
                  />
                  <InputField
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                    placeholder="Email"
                  />
                  <InputDropdown
                    onChange={handleChange}
                    name="role"
                    className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                    dropdownElements={dropdownData}
                  />
                  <InputField
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                    placeholder="Password"
                  />
                </div>
                <div className="intro-x mt-5 xl:mt-8 xl:text-left">
                  <Button
                    type="button"
                    onClick={handleClick}
                    className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                    value="Register"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default AdminRegister;

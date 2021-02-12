import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  register,
  //  test
} from '../../actions/admin/authAction/Users';
import { adminRegsiter } from '../../apiConstants/apiConstants';

//components
import InputField from '../../components/InputField';
import InputDropdown from '../../components/InputDropdown';
import { useHistory } from 'react-router-dom';

const AdminRegister = () => {
  const [control, setControl] = useState({});
  // const [createdAdmin, setCreatedAdmin] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  // const adminRegister = useSelector(state => state.adminRegisterAuth);

  const handleChange = event => {
    setControl({
      ...control,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    async function adminRegAction() {
      dispatch(register(adminRegsiter, control));
    }
    const { fullName } = control;
    adminRegAction().then(() => {
      alert(`Registered ${fullName} as Admin.`);
      history.push('/superadmin/admins');
    });
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
    <div className="login">
      <div className="container sm:px-10">
        <div className="block xl:grid gap-4">
          <div className="xl:h-auto flex py-5 xl:py-0 xl:my-0">
            <div className="my-auto mx-auto xl:ml-2 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto min-h-screen">
              <form onSubmit={handleSubmit}>
                <div className="mt-8">
                  <InputField
                    type="text"
                    name="fullName"
                    onChange={handleChange}
                    className="login__input input input--lg border border-gray-300 block w-100"
                    placeholder="Full Name"
                    required
                  />
                  <InputField
                    type="tel"
                    name="phoneNumber"
                    onChange={handleChange}
                    className="login__input input input--lg border border-gray-300 block mt-4 w-100"
                    placeholder="Phone Number"
                    required
                  />
                  <InputField
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="login__input input input--lg border border-gray-300 block mt-4 w-100"
                    placeholder="Email"
                    required
                  />
                  <InputDropdown
                    onChange={handleChange}
                    name="role"
                    className="login__input input input--lg border border-gray-300 block mt-4 w-100"
                    dropdownElements={dropdownData}
                    required
                  />
                  <InputField
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="login__input input input--lg border border-gray-300 block mt-4 w-100"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="mt-5 xl:mt-8 xl:text-left">
                  <InputField
                    type="submit"
                    className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                    value="Register"
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

export default AdminRegister;

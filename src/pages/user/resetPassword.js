import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from 'components/Page';
import InputField from '../../components/InputField';
import Form from 'reactstrap/lib/Form';
import Label from 'reactstrap/lib/Label';

import { userResetPassword } from '../../apiConstants/apiConstants';
import { logOutAction, resetPassword } from '../../actions/user/Users';

export default function ResetPassword() {
  const [control, setControl] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dontMatch, setDontMatch] = useState(false);
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();
  const userResetPass = useSelector(state => state.userResetPassword);

  const handleChange = ({ target }) => {
    setControl({
      ...control,
      [target.name]: target.value,
    });
  };

  const { password } = control;

  const handleSubmit = e => {
    e.preventDefault();
    if (confirmPassword !== password) {
      setDontMatch(true);
    } else {
      setDontMatch(false);
      dispatch(resetPassword(userResetPassword, control));
    }
    userResetPass.isSuccessful && setPopup(true);
  };

  const onClick = () => {
    setPopup(false);
    logOutAction();
    window.location.pathname = "/user/login"
  };

  let border = { border: '1px solid #dee2e6' };
  if (confirmPassword && confirmPassword === password) {
    border = { border: '2px solid green' };
  } else if (confirmPassword && confirmPassword !== password) {
    border = { border: '2px solid red' };
  }

  return (
    <Page>
      <div className="main">
        <h3 className="text-center m-2">Reset Password</h3>
        <div className="cont">
          <Form className="form mt-3" onSubmit={handleSubmit}>
            <div className="my-2">
              <Label>Old password</Label>
              <InputField
                type="password"
                name="oldPassword"
                className="login__input input input--lg border border-gray-300 block w-100"
                placeholder="Old Password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-2">
              <Label>New Password</Label>
              <InputField
                type="password"
                name="newPassword"
                className="login__input input input--lg border border-gray-300 block w-100"
                placeholder="New Password"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label>Confirm New Password</Label>
              <InputField
                style={border}
                type="password"
                className="ntro-x login__input input input--lg block w-100"
                placeholder="Confirm New Password"
                onChange={({ target }) => setConfirmPassword(target.value)}
                required
              />
            </div>
            {dontMatch && (
              <p style={{ color: 'red', fontSize: '.8rem' }}>
                Passwords don't match
              </p>
            )}
            <InputField
              type="submit"
              className="button button--lg w-full text-white bg-theme-1 xl:mr-3 mt-4"
              value="Reset Password"
            />
          </Form>
        </div>
      </div>
      {popup && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-5 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-center px-4 py-2 border-solid border-gray-300 rounded-t mt-4">
                  <h3
                    className="text-2xl font-semibold text-center"
                    style={{ color: '#48bb78' }}
                  >
                    Changed Password successfully.
                  </h3>
                </div>
                <div
                  className="relative flex-auto text-center"
                  style={{ color: 'black' }}
                >
                  <p className="m-0">Please login with new password</p>
                </div>
                <div className="flex items-center justify-end p-6 border-solid border-gray-300 rounded-b">
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 assign"
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                    onClick={onClick}
                  >
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </Page>
  );
}

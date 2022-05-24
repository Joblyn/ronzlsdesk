import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from '../../components/Page';
import InputField from '../../components/InputField';
import Form from 'reactstrap/lib/Form';
import Label from 'reactstrap/lib/Label';

import { adminResetPassword } from '../../apiConstants/apiConstants';
import { resetPassword } from '../../actions/admin/authAction/Users';
import PopupSuccess from '../../components/popup-success';

export default function ResetPassword() {
  const [control, setControl] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dontMatch, setDontMatch] = useState(false);
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();
  const adminResetPass = useSelector(state => state.adminResetPassword);

  const handleChange = ({ target }) => {
    setControl({
      ...control,
      [target.name]: target.value,
    });
  };

  const { newPassword } = control;
  const handleSubmit = e => {
    e.preventDefault();
    if (confirmPassword !== newPassword) {
      setDontMatch(true);
    } else {
      setDontMatch(false);
      dispatch(resetPassword(adminResetPassword, control));
    }
  };

  useEffect(() => {
    adminResetPass.isSuccessful && setPopup(true);
  }, [adminResetPass]);
  
  let border = { border: '1px solid #dee2e6' };
  if (confirmPassword && confirmPassword === newPassword) {
    border = { border: '2px solid green' };
  } else if (confirmPassword && confirmPassword !== newPassword) {
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
                className="login__input input input--lg block w-100"
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
      {popup && <PopupSuccess 
        button
        majorText="Changed Password successfully."
        text="Please login with new password"
        redirect="/admin/login"
      />}
    </Page>
  )
};  
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from '../../components/Page';
import PageSpinner from '../../components/PageSpinner';
import { getUserData } from '../../apiConstants/apiConstants';
import { getUser } from '../../actions/user/Users';
import { useEffect } from 'react';
import InputField from '../../components/InputField';
import InputDropdown from '../../components/InputDropdown';
import { Button, FormGroup } from 'reactstrap';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { updateUserData } from '../../apiConstants/apiConstants';
import { updateData } from '../../actions/user/Users';

export default function Profile() {
  const [showPopup, setShowPopup] = useState(false);
  const [details, setDetails] = useState({});
  const [color, setColor] = useState();
  const [disabled, setDisabled] = useState(true);
  const [directorControl, setDirectorControl] = useState([]);

  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData.data);
  const update = useSelector(state => state.updateData);

  useEffect(() => {
    dispatch(getUser(getUserData));
  }, [dispatch]);

  useEffect(() => {
    setDetails(userData);
    userData.director && setDirectorControl([...userData.director]);
    if (userData.accountStatus) {
      switch (userData.accountStatus) {
        case 'prospect':
          return setColor('orange');
        case 'active':
          return setColor('green');
        case 'inactive':
          return setColor('red');
        default:
          return 'inherit';
      }
    }
  }, [userData]);

  const createDirector = () => {
    setDirectorControl([...directorControl, { fullName: '', dateOfBirth: '' }]);
  };

  const removeDirector = () => {
    setDirectorControl(directorControl.slice(0, -1));
  };

  const handleChange = target => {
    setDetails({
      ...details,
      [target.name]: target.value,
    });
  };

  const handleDirectorChange = (i, target) => {
    setDirectorControl([
      ...directorControl.slice(0, i),
      {
        ...directorControl[i],
        [target.name]: target.value,
      },
      ...directorControl.slice(i + 1),
    ]);
  };

  const AccountTypeDatas = [
    ['Individual', 'individual'],
    ['Company', 'company'],
  ];

  const AccountTypeDropdownData = currentType => {
    let opts = AccountTypeDatas.map((data, id) => {
      let selected = currentType === data[1] ? true : false;
      return (
        <option value={data[1]} key={id} selected={selected}>
          {data[0]}
        </option>
      );
    });
    return opts;
  };

  const handleUpdate = () => {
    const payload = details;
    payload.director = directorControl;
    delete payload.director[0]._id;
    delete payload.role;
    delete payload.accountOfficer;
    delete payload.accountStatus;
    delete payload.created_dt;
    delete payload._id;
    dispatch(updateData(updateUserData, payload));
    update.isSuccessful && window.location.reload();
  };

  const handleClick = () => {
    setDisabled(false);
  };

  let border = disabled ? 'border-0' : 'border-1';

  if (!details.role) {
    return <PageSpinner />;
  } else {
    return (
      <Page title="Dropdowns" breadcrumbs={[{ name: 'Profile', active: true }]}>
        <div className="d-flex justify-content-between">
          <Button onClick={() => setShowPopup(true)} className="mx-3 mb-3">
            View accout Officer
          </Button>
          <Button className="mx-3 mb-3" onClick={handleClick}>
            Edit Profile
          </Button>
        </div>
        {showPopup && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-center p-4 border-b border-solid border-gray-300 rounded-t">
                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: 'rgba(0,0,0,.7)' }}
                    >
                      Account Officer
                    </h3>
                  </div>
                  {details.accountOfficer ? (
                    <div
                      className="relative p-0 flex-auto"
                      style={{ color: 'black', width: '500px' }}
                    >
                      <ul className="profile-ul">
                        <li className="border-0">
                          <div>
                            <p>Full Name:</p>
                          </div>
                          <div>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: '1.1rem',
                              }}
                            >
                              {details.accountOfficer.fullName}
                            </p>
                          </div>
                        </li>
                        <li className="border-0">
                          <div>
                            <p>Email:</p>
                          </div>
                          <div>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: '1.1rem',
                              }}
                            >
                              {userData.accountOfficer.email}
                            </p>
                          </div>
                        </li>
                        <li className="border-0">
                          <div>
                            <p>Phone Number:</p>
                          </div>
                          <div>
                            <p
                              className="mb-0"
                              style={{
                                fontSize: '1.1rem',
                              }}
                            >
                              {userData.accountOfficer.phoneNumber}
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div
                      style={{ height: '40vh' }}
                      className="p-4 d-flex justify-content-center align-items-center"
                    >
                      <em className="text-gray-700 text-xl">
                        Not yet assigned to an account officer
                      </em>
                    </div>
                  )}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: 'all .15s ease' }}
                      onClick={() => setShowPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}

        <main className="profile-main">
          <div>
            <ul className="profile-ul">
              <li className="my-0 py-2">
                <div>
                  <p>Role:</p>
                </div>
                <div className="green">
                  <p className="m-0">{userData.role === 'user' && 'Client'}</p>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Account Status:</p>
                </div>
                <div style={{ color: color }}>
                  <p className="m-0">
                    {details.accountStatus
                      ? details.accountStatus.charAt(0).toUpperCase() +
                        details.accountStatus.slice(1)
                      : ''}
                  </p>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Date Registered:</p>
                </div>
                <div>
                  <p>
                    {details.created_dt.slice(0, 10)}
                    <em className="ml-2 text-gray-500">(yyyy-mm-dd)</em>
                  </p>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Account Type:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputDropdown
                      userProfile
                      className="inp border-grey-300 w-100"
                      style={{
                        background: 'inherit',
                        borderBottom: `${!disabled && '2px grey solid'}`,
                      }}
                      defaultValue={details.accountType}
                      name="accountType"
                      dropdownElementsUser={() =>
                        AccountTypeDropdownData(details.accountType)
                      }
                      disabled={disabled}
                      onChange={({ target }) => handleChange(target)}
                    />
                  </FormGroup>
                </div>
              </li>
              {details.accountType === 'company' && (
                <li className="my-0 py-2">
                  <div>
                    <p>Company Name:</p>
                  </div>
                  <div>
                    <FormGroup className="w-100 m-0">
                      <InputField
                        type="text"
                        defaultValue={details.companyName}
                        name="companyName"
                        onChange={({ target }) => handleChange(target)}
                        disabled={disabled}
                        className={border}
                      />
                    </FormGroup>
                  </div>
                </li>
              )}
              {directorControl.length !== 0 && (
                <>
                  <li className="my-0 py-2 flex-column align-items-start">
                    <ul className="director-ul">
                      {directorControl.map((director, i) => (
                        <li key={'director' + (i + 1)} className="">
                          <p className="font-semibold mb-0">{`Director ${
                            i + 1
                          }`}</p>
                          <div className="director-div">
                            <div className="d-flex align-items-baseline">
                              <p>Full Name:</p>
                              <FormGroup className="w-100 m-0">
                                <InputField
                                  type="text"
                                  name="fullName"
                                  defaultValue={director.fullName}
                                  disabled={disabled}
                                  className={border}
                                  onChange={({ target }) =>
                                    handleDirectorChange(i, target)
                                  }
                                />
                              </FormGroup>
                            </div>
                            <div className="d-flex align-items-baseline">
                              <p style={{ fontWeight: 500 }}>Date of Birth:</p>
                              <FormGroup className="w-100 m-0">
                                <InputField
                                  type="text"
                                  name="dateOfBirth"
                                  defaultValue={director.dateOfBirth.slice(
                                    0,
                                    10,
                                  )}
                                  disabled={disabled}
                                  className={border}
                                  onChange={({ target }) =>
                                    handleDirectorChange(i, target)
                                  }
                                />
                              </FormGroup>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {disabled ? null : (
                      <div className="d-flex">
                        <MdAddCircleOutline
                          className={`cursor-pointer`}
                          onClick={() => createDirector()}
                        />
                        {directorControl.length > 1 && (
                          <MdRemoveCircleOutline
                            onClick={removeDirector}
                            className="mx-2 cursor-pointer"
                          />
                        )}
                      </div>
                    )}
                  </li>
                </>
              )}
              {details.accountType === 'company' && (
                <>
                  <li className="my-0 py-2">
                    <div>
                      <p>Company Reg. No.:</p>
                    </div>
                    <div>
                      <FormGroup className="w-100 m-0">
                        <InputField
                          type="text"
                          defaultValue={details.companyRegNo}
                          name="companyRegNo"
                          onChange={({ target }) => handleChange(target)}
                          disabled={disabled}
                          className={border}
                        />
                      </FormGroup>
                    </div>
                  </li>
                  <li className="my-0 py-2">
                    <div>
                      <p>Company Begin:</p>
                    </div>
                    <div>
                      <FormGroup className="w-100 m-0">
                        <InputField
                          type="text"
                          defaultValue={details.companyBegin.slice(0, 10)}
                          name="companyBegin"
                          onChange={({ target }) => handleChange(target)}
                          disabled={disabled}
                          className={border}
                          placeholder="yyyy-mm-dd"
                        />
                      </FormGroup>
                    </div>
                  </li>
                </>
              )}
              <li className="my-0 py-2">
                <div>
                  <p>Address:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={details.companyAddress}
                      name="companyAddress"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>City:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={details.city}
                      name="city"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Country:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={details.country}
                      name="country"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Email:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={details.email}
                      name="email"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Phone Number:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={`0${details.phoneNumber}`}
                      name="phoneNumber"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Postal Code:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={details.postalCode}
                      name="postalCode"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Insurance Number:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={
                        details.insuranceNumber !== '0000'
                          ? details.insuranceNumber
                          : ''
                      }
                      name="insuranceNumber"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Payee Ref No.:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={
                        details.payeeRefNo !== '0000' ? details.payeeRefNo : ''
                      }
                      name="payeeRefNo"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>

              <li className="my-0 py-2">
                <div>
                  <p>UTR No.:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={
                        details.utrNo !== '0000' ? details.utrNo : ''
                      }
                      name="utrNo"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Vat Reg No.:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={
                        details.vatRegNo !== '000' ? details.vatRegNo : ''
                      }
                      name="vatRegNo"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Vat Reg Date:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={
                        details.vatRegDate.slice(0, 10) !== '0000-01-01'
                          ? details.vatRegDate.slice(0, 10)
                          : ''
                      }
                      name="vatRegDate"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Vat Scheme:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={
                        details.vatScheme !== 'null' ? details.vatScheme : ''
                      }
                      name="vatScheme"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>Vat Submit Type:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={
                        details.vatSubmitType !== 'null'
                          ? details.vatSubmitType
                          : ''
                      }
                      name="vatSubmitType"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
              <li className="my-0 py-2">
                <div>
                  <p>website URL:</p>
                </div>
                <div>
                  <FormGroup className="w-100 m-0">
                    <InputField
                      type="text"
                      defaultValue={
                        details.websiteUrl !== 'null' ? details.websiteUrl : ''
                      }
                      name="websiteUrl"
                      onChange={({ target }) => handleChange(target)}
                      disabled={disabled}
                      className={border}
                    />
                  </FormGroup>
                </div>
              </li>
            </ul>
            {disabled === false && (
              <Button onClick={handleUpdate}>Submit Changes</Button>
            )}
          </div>
        </main>
      </Page>
    );
  }
}

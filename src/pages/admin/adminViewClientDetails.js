import React, { useEffect, useState } from 'react';

import { getClientDetail } from '../../apiConstants/apiConstants';
import PageSpinner from '../../components/PageSpinner';

//components
import InputField from '../../components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import InputDropdown from '../../components/InputDropdown';
import { getClientDetails } from '../../actions/admin/clients/Clients';

const AdminViewClientDetails = () => {
  const dispatch = useDispatch();
  const clientDetails = useSelector(state => state.adminGetAllClient.user);
  const [data, setData] = useState({});
  const [director, setDirector] = useState([{}]);
  const [color, setColor] = useState('');

  useEffect(() => {
    let client_id = localStorage.getItem('client_id');
    let endpoint = getClientDetail + client_id;
    dispatch(getClientDetails(endpoint));
  }, []);

  useEffect(() => {
    setData(clientDetails);
    setDirector(clientDetails.director);
    if (clientDetails.accountStatus) {
      switch (clientDetails.accountStatus) {
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
  }, [clientDetails]);

  const _onFocus = event => {
    event.currentTarget.type = 'date';
  };

  const _onBlur = event => {
    event.currentTarget.type = 'text';
    event.currentTarget.placeholder = 'Date of Birth';
  };

  const addNewDirector = (count, name) => (
    <div key={'director' + (count + 1)}>
      <label className="font-semibold">{`Director ${count + 1}`} </label>
      <label className="font-semibold mt-2 block">Full Name:</label>
      <InputField
        type="text"
        name={'fullName' + count}
        value={data.director[name].fullName}
        onChange={e => setDirector(e.target.value)}
        className="intro-x login__input input mb-2 input--lg border border-gray-300 block"
        disabled
      />
      <label className="font-semibold mt-2">Date of Birth:</label>
      <InputField
        type="text"
        name={'dateOfBirth' + count}
        value={director[count].dateOfBirth}
        onFocus={_onFocus}
        onBlur={_onBlur}
        onChange={e => setDirector(e.target.value)}
        className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
        disabled
      />
    </div>
  );

  const AccountTypeDatas = [
    ['Individual', 'individual'],
    ['Company', 'company'],
  ];

  const AccountTypeDropdownData = AccountTypeDatas.map((data, id) => {
    return (
      <option value={data[1]} key={id}>
        {data[0]}
      </option>
    );
  });

  if (data === null) {
    return <PageSpinner />;
  }

  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="intro-x">
          <div className="block xl:grid grid-cols-2 gap-4 mt-3">
            <div className="my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto bg-white">
              <div className="mb-3">
                <div className="mb-3">
                  Status:{' '}
                  <span
                    style={{ fontWeight: '500', color: color }}
                    className={`text-lg`}
                  >
                    {data.accountStatus
                      ? data.accountStatus.charAt(0).toUpperCase() +
                        data.accountStatus.slice(1)
                      : ''}
                  </span>
                </div>
                <header className="font-semibold">Subscription</header>
                <div
                  className="mb-2 d-flex"
                  style={{ justifyContent: 'space-between' }}
                >
                  <div>Start:</div>
                  <div>
                    <input
                      type="date"
                      name="subscriptionBegin"
                      value={
                        data.subscriptionBegin
                          ? data.subscriptionBegin.slice(0, 10)
                          : ''
                      }
                      disabled
                      style={{ backgroundColor: 'inherit' }}
                    />
                  </div>
                </div>
                <div>
                  <div
                    className="mb-2 d-flex"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <div>End:</div>
                    <div>
                      <input
                        type="date"
                        name="subscriptionEnd"
                        value={
                          data.subscriptionEnd
                            ? data.subscriptionEnd.slice(0, 10)
                            : ''
                        }
                        disabled
                        style={{ backgroundColor: 'inherit' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {data.director &&
                data.director.map((data, i) => {
                  return addNewDirector(i, i);
                })}
              <label className="font-semibold mt-2">Account Type:</label>
              <InputDropdown
                value={data.accountType || ''}
                name="accountType"
                className="intro-x login__input input input--lg mb-2 border border-gray-300 block"
                dropdownElements={AccountTypeDropdownData}
                disabled
              />
              <label className="font-semibold mt-2">Company Name:</label>
              <InputField
                type="text"
                value={data.companyName || ''}
                name="Company Name"
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Company Address:</label>
              <InputField
                type="text"
                name="companyAddress"
                value={data.companyAddress || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">City:</label>
              <InputField
                type="text"
                name="city"
                value={data.city || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Postal Code:</label>
              <InputField
                type="text"
                name="postalCode"
                value={data.postalCode || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Country:</label>
              <InputField
                type="text"
                name="country"
                value={data.country || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Phone Number:</label>
              <InputField
                type="tel"
                name="phoneNumber"
                value={data.phoneNumber || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />

              <label className="font-semibold mt-2">Email:</label>
              <InputField
                type="email"
                name="email"
                value={data.email || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
            </div>
            <div className="xl:h-auto flex xl:py-0 xl:my-0 mb-5 ">
              <div className="my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto bg-white">
                <label className="font-semibold mt-2">Website:</label>
                <InputField
                  type="text"
                  name="websiteUrl"
                  value={data.websiteUrl || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Company Begin:</label>
                <InputField
                  type="text"
                  name="companyBegin"
                  value={data.companyBegin || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Company Reg No:</label>
                <InputField
                  type="text"
                  name="companyRegNo"
                  value={data.companyRegNo || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">UTR Number:</label>
                <InputField
                  type="text"
                  name="utrNo"
                  value={data.utrNo || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Submit Type:</label>
                <InputField
                  type="text"
                  name="vatSubmitType"
                  value={data.vatSubmitType || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Scheme:</label>
                <InputField
                  type="text"
                  name="vatScheme"
                  value={data.vatScheme || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Reg No:</label>
                <InputField
                  type="text"
                  name="vatRegNo"
                  value={data.vatRegNo || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Reg Date:</label>
                <InputField
                  type="text"
                  name="vatRegDate"
                  value={data.vatRegDate || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Insurance Number:</label>
                <InputField
                  type="text"
                  name="insuranceNumber"
                  value={data.insuranceNumber || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Payee Ref No:</label>
                <InputField
                  type="text"
                  name="payeeRefNo"
                  value={data.payeeRefNo || ''}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewClientDetails;

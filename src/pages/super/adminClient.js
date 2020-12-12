import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import InputField from '../../components/InputField';
import InputDropdown from '../../components/InputDropdown';
import PageSpinner from '../../components/PageSpinner';
import { getClientDetail } from '../../apiConstants/apiConstants';
import { getClientDetails } from '../../actions/admin/clients/Clients';

export default function AdminClient() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.adminGetAllClient.user);
  const [clientData, setClientData] = useState({});

  useEffect(() => {
    let client_id = localStorage.getItem('client_id');
    let endpoint = getClientDetail + client_id;
    dispatch(getClientDetails(endpoint));
  }, []);

  useEffect(() => {
    setClientData(data);
  }, [data]);

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
        value={clientData.director[name].fullName}
        className="intro-x login__input input mb-2 input--lg border border-gray-300 block"
        disabled
      />
      <label className="font-semibold mt-2">Date of Birth:</label>
      <InputField
        type="text"
        name={'dateOfBirth' + count}
        value={clientData.director[count].dateOfBirth}
        onFocus={_onFocus}
        onBlur={_onBlur}
        className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
        disabled
      />
    </div>
  );

  if (!clientData) {
    return <PageSpinner />;
  }

  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="intro-x">
          <div className="block xl:grid grid-cols-2 gap-4 mt-3">
            <div className="my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto ">
              {clientData.director &&
                clientData.director.map((clientData, i) => {
                  return addNewDirector(i, i);
                })}
              <label className="font-semibold mt-2">Account Type:</label>
              <InputField
                value={clientData.accountType}
                name="accountType"
                type="text"
                className="intro-x login__input input input--lg mb-2 border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Company Name:</label>
              <InputField
                type="text"
                value={clientData.companyName || ''}
                name="Company Name"
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Company Address:</label>
              <InputField
                type="text"
                name="companyAddress"
                value={clientData.companyAddress || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">City:</label>
              <InputField
                type="text"
                name="city"
                value={clientData.city || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Postal Code:</label>
              <InputField
                type="text"
                name="postalCode"
                value={clientData.postalCode || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Country:</label>
              <InputField
                type="text"
                name="country"
                value={clientData.country || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Phone Number:</label>
              <InputField
                type="tel"
                name="phoneNumber"
                value={clientData.phoneNumber || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />

              <label className="font-semibold mt-2">Email:</label>
              <InputField
                type="email"
                name="email"
                value={clientData.email || ''}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
            </div>
            <div className="xl:h-auto flex xl:py-0 xl:my-0 mb-5">
              <div className="my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto ">
                <label className="font-semibold mt-2">Website:</label>
                <InputField
                  type="text"
                  name="websiteUrl"
                  value={clientData.websiteUrl || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Company Begin:</label>
                <InputField
                  type="text"
                  name="companyBegin"
                  value={clientData.companyBegin || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Company Reg No:</label>
                <InputField
                  type="text"
                  name="companyRegNo"
                  value={clientData.companyRegNo || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">UTR Number:</label>
                <InputField
                  type="text"
                  name="utrNo"
                  value={clientData.utrNo || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Submit Type:</label>
                <InputField
                  type="text"
                  name="vatSubmitType"
                  value={clientData.vatSubmitType || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Scheme:</label>
                <InputField
                  type="text"
                  name="vatScheme"
                  value={clientData.vatScheme || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Reg No:</label>
                <InputField
                  type="text"
                  name="vatRegNo"
                  value={clientData.vatRegNo || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Reg Date:</label>
                <InputField
                  type="text"
                  name="vatRegDate"
                  value={clientData.vatRegDate || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Insurance Number:</label>
                <InputField
                  type="text"
                  name="insuranceNumber"
                  value={clientData.insuranceNumber || ''}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Payee Ref No:</label>
                <InputField
                  type="text"
                  name="payeeRefNo"
                  value={clientData.payeeRefNo || ''}
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
}

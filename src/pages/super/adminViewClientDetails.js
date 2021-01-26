import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  adminUpdateSubscription,
  getClientDetail,
  adminDeleteClient,
  adminEditUserData,
} from '../../apiConstants/apiConstants';
import {
  getClientDetails,
  updateClientSubscription,
  clientDelete,
  editData,
} from '../../actions/admin/clients/Clients';

//components
import PageSpinner from '../../components/PageSpinner';
import { Button, FormGroup } from 'reactstrap';
import InputDropdown from '../../components/InputDropdown';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';

const AdminViewClientDetails = () => {
  const [disabled, setDisabled] = useState(true);
  const [subDisabled, setSubDisabled] = useState(true);
  const dispatch = useDispatch();
  const clientDetails = useSelector(state => state.adminGetAllClient.user);
  // const adminDeleteUser = useSelector(state => state.adminDeleteUser);

  const [data, setData] = useState({});
  const [subscriptionBegin, setSubscriptionBegin] = useState('');
  const [subscriptionEnd, setSubscriptionEnd] = useState('');

  const [control, setControl] = useState({});
  const [directorControl, setDirectorControl] = useState([]);
  const adminEdiClientData = useSelector(state => state.adminEditUserData);

  useEffect(() => {
    let client_id = localStorage.getItem('client_id');
    let endpoint = getClientDetail + client_id;
    dispatch(getClientDetails(endpoint));
  }, []);

  const [color, setColor] = useState('');
  useEffect(() => {
    setData(clientDetails);
    setDirectorControl(clientDetails.director);
    if (clientDetails.subscriptionBegin || clientDetails.subscriptionEnd) {
      setSubscriptionBegin(clientDetails.subscriptionBegin.slice(0, 10));
      setSubscriptionEnd(clientDetails.subscriptionEnd.slice(0, 10));
    }
  }, [clientDetails]);

  useEffect(() => {
    if (data.accountStatus) {
      switch (data.accountStatus) {
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
  }, [data]);

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

  const updateSubscription = (e, id) => {
    e.preventDefault();
    const payload = {
      subscriptionBegin,
      subscriptionEnd,
    };
    let endpoint = `${adminUpdateSubscription}${id}`;
    dispatch(updateClientSubscription(endpoint, payload));
    // adminUpdateSubscription.isSuccessful && window.location.reload()
  };

  const deleteClient = () => {
    let client_id = localStorage.getItem('client_id');
    const payload = { ID: client_id };
    async function deleteAction() {
      return dispatch(clientDelete(adminDeleteClient, payload));
    }
    deleteAction().then(() => {
      alert('Deleted client');
      window.location.pathname = '/superadmin/clients';
    });
  };

  const createDirector = () => {
    setDirectorControl([...directorControl, { fullName: '', dateOfBirth: '' }]);
  };

  const removeDirector = () => {
    setDirectorControl(directorControl.slice(0, -1));
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

  const handleEdit = ({ target }) => {
    setControl(control => ({
      ...control,
      [target.name]: target.value,
    }));
  };

  const editClientData = () => {
    control.ID = clientDetails._id;
    control.director = directorControl;
    async function editAction() {
      return dispatch(editData(adminEditUserData, control));
    }
    editAction().then(() => adminEdiClientData.isSuccessful && setDisabled(true))
  };

  const cancelChanges = () => {
    setDisabled(true);
  };

  let border = disabled ? 'border-0' : 'border-1';

  if (data === null || !directorControl ) {
    return <PageSpinner />;
  }

  return (
    <>
      <div className="d-flex justify-content-md-between align-items-end px-3">
        <div>
          <Button
            color="success"
            size="sm"
            onClick={() => (disabled ? setDisabled(false) : cancelChanges())}
          >
            {disabled ? 'Edit Details' : 'Cancel changes'}
          </Button>
        </div>
        <div>
          <header className="font-semibold">Subscription</header>
          <div className="mb-2 d-flex">
            <div style={{ width: '4rem', fontWeight:'500' }}>Start:</div>
            <div>
              <input
                type="date"
                name="subscriptionBegin"
                defaultValue={subscriptionBegin}
                onChange={({ target }) => setSubscriptionBegin(target.value)}
                disabled={subDisabled}
                style={{ backgroundColor: 'inherit' }}
              />
            </div>
          </div>
          <div className="mb-2 d-flex">
            <div style={{ width: '4rem', fontWeight:'500' }}>End:</div>
            <div>
              <input
                type="date"
                name="subscriptionEnd"
                defaultValue={subscriptionEnd}
                onChange={({ target }) => setSubscriptionEnd(target.value)}
                disabled={subDisabled}
                style={{ backgroundColor: 'inherit' }}
              />
            </div>
          </div>
          {subDisabled ? (
            <Button onClick={() => setSubDisabled(!subDisabled)} size="sm">
              Set Subscription
            </Button>
          ) : (
            <Button onClick={e => updateSubscription(e, data._id)} size="sm">
              Update Subscription
            </Button>
          )}
        </div>
      </div>
      <main className="profile-main mt-2">
        <div>
          <ul className="profile-ul">
            <li className="my-0 py-2">
              <div>
                <p>Account Status:</p>
              </div>
              <div style={{ color: color }}>
                <p className="m-0">
                  {data.accountStatus
                    ? data.accountStatus.charAt(0).toUpperCase() +
                      data.accountStatus.slice(1)
                    : ''}
                </p>
              </div>
            </li>
            <li className="my-0 py-2">
              <div>
                <p>Date Registered:</p>
              </div>
              <div>
                <p className="mb-0">{data.created_dt && data.created_dt.slice(0, 10)}</p>
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
                    defaultValue={data.accountType}
                    name="accountType"
                    dropdownElementsUser={() =>
                      AccountTypeDropdownData(data.accountType)
                    }
                    disabled={disabled}
                    onChange={handleEdit}
                  />
                </FormGroup>
              </div>
            </li>
            {directorControl.length && (
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
                                <input
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
                                <input
                                  type="text"
                                  name="dateOfBirth"
                                  defaultValue={director.dateOfBirth && director.dateOfBirth.slice(0, 10)}
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
            <li className="my-0 py-2">
              <div>
                <p>Company Name:</p>
              </div>
              <div>
                <FormGroup className="w-100 m-0">
                  <input
                    type="text"
                    defaultValue={data.companyName}
                    name="companyName"
                    onChange={handleEdit}
                    disabled={disabled}
                    className={border}
                  />
                </FormGroup>
              </div>
            </li>
            <li className="my-0 py-2">
              <div>
                <p>Company Reg. No.:</p>
              </div>
              <div>
                <FormGroup className="w-100 m-0">
                  <input
                    type="text"
                    defaultValue={data.companyRegNo}
                    name="companyRegNo"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.companyBegin && data.companyBegin.slice(0, 10)}
                    name="companyBegin"
                    onChange={handleEdit}
                    disabled={disabled} 
                    className={border}
                  />
                </FormGroup>
              </div>
            </li>
            <li className="my-0 py-2">
              <div>
                <p>Company Address:</p>
              </div>
              <div>
                <FormGroup className="w-100 m-0">
                  <input
                    type="text"
                    defaultValue={data.companyAddress}
                    name="companyAddress"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.city}
                    name="city"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.country}
                    name="country"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.email}
                    name="email"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.insuranceNumber}
                    name="insuranceNumber"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.payeeRefNo}
                    name="payeeRefNo"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.phoneNumber && `0${data.phoneNumber}`} 
                    name="phoneNumber"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.postalCode}
                    name="postalCode"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.utrNo}
                    name="utrNo"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.vatRegNo}
                    name="vatRegNo"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={
                      data.vatRegDate && data.vatRegDate.slice(0, 10)
                    }
                    name="vatRegDate"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.vatScheme}
                    name="vatScheme"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.vatSubmitType}
                    name="vatSubmitType"
                    onChange={handleEdit}
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
                  <input
                    type="text"
                    defaultValue={data.websiteUrl}
                    name="websiteUrl"
                    onChange={handleEdit}
                    disabled={disabled}
                    className={border}
                  />
                </FormGroup>
              </div>
            </li>
          </ul>
          {disabled === false && <Button size="sm" onClick={editClientData}>Submit Changes</Button>}
        </div>
      </main>
      <div className="mx-auto d-flex justify-content-end" style={{width: '100%', maxWidth: '800px'}}>
        <Button
          color="danger"
          size="sm"
          className="mt-4"
          onClick={deleteClient}
        >
          Delete Client
        </Button>
      </div>
    </>
    
  );
};

export default AdminViewClientDetails;

import React, { useEffect, useState } from 'react';
// import { 
  // Link,
  // useHistory, 
  // useLocation,
  // useParams
// } from 'react-router-dom';

// import logo from '../../assets/images/logo.png';
// import bgImage from '../../assets/images/illustration.png';

import { registerUser } from '../../actions/user/authAction/Users';
import { updateClientSubscription } from '../../actions/admin/clients/Clients';
import { userRegister, adminUpdateSubscription } from '../../apiConstants/apiConstants';
// import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';
import PageSpinner from '../../components/PageSpinner';

//components
import InputField from '../../components/InputField';
import Button from '../../components/button';
import { useDispatch, useSelector } from 'react-redux';
import InputDropdown from '../../components/InputDropdown';
// import { CodeSharp } from '@material-ui/icons';
// import { getClientDetails } from '../../actions/admin/clients/Clients';
// import { getClientDetail } from '../../apiConstants/apiConstants';

const AdminViewClientDetails = () => {
  // const [userState, setUserState] = useState('');
  const [inputList, setInputList] = useState([1]);
  const [disabled, setDisabled] = useState(true);
  const [managerControl, setManagerControl] = useState({});
  const [count, setCount] = useState(1);
  let obj = {};
  const [control, setControl] = useState();
  const dispatch = useDispatch();
  const clientDetails = useSelector(state => state.adminGetAllClient.user);
  // const history = useHistory();
  // const location = useLocation();

  console.log(setControl);

  const [data, setData] = useState({});
  const [director, setDirector] = useState([{}]);


  useEffect(() => {
    setData(clientDetails);
    setDirector(clientDetails.director)
  }, [clientDetails]);

  const handleInputChange = (event, count) => {
    obj[event.target.name] = event.target.value;
    setManagerControl({
      ...managerControl,
      [event.target.name]: event.target.value,
    });
  };
  console.log(handleInputChange);
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    setCount(count - 1);
  };
  console.log(handleRemoveClick);

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: '', dateOfBirth: '' }]);
    setCount(count + 1);
  };
  console.log(handleAddClick);

  const prepareManager = managers => {
    let newManagers = [];
    let temp = Object.keys(managers);
    for (let i = 0; i < temp.length / 2; i++) {
      let manager = {
        fullName: managers['fullName' + i],
        dateOfBirth: managers['dateOfBirth' + i],
      };
      newManagers.push(manager);
    }
    return newManagers;
  };

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

  // const handleChange = event => {
  //   console.log('change');
  //   let name = event.target.name;
  //   setControl({
  //     ...control,
  //     // ...inputList,
  //     [name]: event.target.value,
  //   });
  // };

  const handleClick = event => {
    event.preventDefault();
    let managers = prepareManager(managerControl);
    let payload = { director: managers, ...control };
    console.log('Result: ' + JSON.stringify(payload));
    dispatch(registerUser(userRegister, payload));
  };
  console.log(handleClick);

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

  // const { userId } = useParams();
  const [subscriptionBegin, setSubscriptionBegin] = useState("2020-11-03");
  const [subscriptionEnd, setSubscriptionEnd] = useState("2021-11-03");


  const updatedSubscription = useSelector(state => state.adminUpdateSubscription);
  useEffect(() => {
    if (updatedSubscription.isSuccesful) {
      let result = updatedSubscription.result;
      console.log(result);
      // setSubscriptionBegin(result.subscriptionBegin);
      // setSubscriptionEnd(result.subscriptionEnd);
    }
  }, updatedSubscription);
  const updateSubscription = (e) => {
    e.preventDefault();
    const payload = {
      subscriptionBegin,
      subscriptionEnd
    }
    const endpoint = adminUpdateSubscription + data._id;
    dispatch(updateClientSubscription(endpoint, payload));
  };

  if (data === null) {
    return <PageSpinner />;
  }

  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="intro-x">
          <div className="block xl:grid grid-cols-2 gap-4 mt-3">
            <div className="my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto ">
              <div className="mb-3">
                <header className="font-semibold">Subscription</header>
                <div className="mb-2 d-flex" style={{justifyContent: "space-between"}}>
                  <div>Start:</div>
                  <div><input type="date"
                    name="subscriptionBegin"
                    value={subscriptionBegin}
                    onChange={({target}) => setSubscriptionBegin(target.value)}
                    disabled={disabled}
                    style={{ backgroundColor: "inherit" }}
                  />
                  </div>
                </div>
                <div className="mb-2 d-flex" style={{ justifyContent: "space-between" }}>
                  <div>End:</div>
                  <div><input type="date"
                    name="subscriptionEnd"
                    value={subscriptionEnd}
                    onChange={({ target }) => setSubscriptionEnd(target.value)}
                    disabled={disabled}
                    style={{ backgroundColor: "inherit" }} />
                  </div>
                </div>
                {disabled ? <Button
                  type="button"
                  onClick={() => setDisabled(!disabled)}
                  className="button button--md text-white bg-theme-1 xl:mr-3"
                  value="Set Subscription" />
                  : <Button
                    type="button"
                    onClick={updateSubscription}
                    className="button button--md text-white bg-theme-1 xl:mr-3"
                    value="Update"
                  />}
              </div>
              {data.director &&
                data.director.map((data, i) => {
                  return addNewDirector(i, i);
                })}
              <label className="font-semibold mt-2">Account Type:</label>
              <InputDropdown
                value={data.accountType}
                onChange={e => setData(e.target.value)}
                name="accountType"
                className="intro-x login__input input input--lg mb-2 border border-gray-300 block"
                dropdownElements={AccountTypeDropdownData}
                disabled
              />
              <label className="font-semibold mt-2">Company Name:</label>
              <InputField
                type="text"
                value={data.companyName}
                name="Company Name"
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Company Address:</label>
              <InputField
                type="text"
                name="companyAddress"
                value={data.companyAddress}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">City:</label>
              <InputField
                type="text"
                name="city"
                value={data.city}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Postal Code:</label>
              <InputField
                type="text"
                name="postalCode"
                value={data.postalCode}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Country:</label>
              <InputField
                type="text"
                name="country"
                value={data.country}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />
              <label className="font-semibold mt-2">Phone Number:</label>
              <InputField
                type="tel"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled
              />

              <label className="font-semibold mt-2">Email:</label>
              <InputField
                type="email"
                name="email"
                value={data.email}
                onChange={e => setData(e.target.value)}
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
                  value={data.websiteUrl}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Company Begin:</label>
                <InputField
                  type="text"
                  name="companyBegin"
                  value={data.companyBegin}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Company Reg No:</label>
                <InputField
                  type="text"
                  name="companyRegNo"
                  value={data.companyRegNo}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">UTR Number:</label>
                <InputField
                  type="text"
                  name="utrNo"
                  value={data.utrNo}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Submit Type:</label>
                <InputField
                  type="text"
                  name="vatSubmitType"
                  value={data.vatSubmitType}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Scheme:</label>
                <InputField
                  type="text"
                  name="vatScheme"
                  value={data.vatScheme}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Reg No:</label>
                <InputField
                  type="text"
                  name="vatRegNo"
                  value={data.vatRegNo}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">VAT Reg Date:</label>
                <InputField
                  type="text"
                  name="vatRegDate"
                  value={data.vatRegDate}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Insurance Number:</label>
                <InputField
                  type="text"
                  name="insuranceNumber"
                  value={data.insuranceNumber}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled
                />
                <label className="font-semibold mt-2">Payee Ref No:</label>
                <InputField
                  type="text"
                  name="payeeRefNo"
                  value={data.payeeRefNo}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  disabled
                />
              </div>
            </div>
            {/* <div></div> */}
            {/* <div className="intro-x flex xl:justify-center d-flex justify-content-center">
              {disabled ? (
                <Button
                  type="button"
                  onClick={handleEditClick}
                  className="button button--lg xl:w-32 text-white bg-theme-1 xl:mr-3"
                  value="Edit"
                  style={{width: '150px', margin:'1rem'}}
                />
              ) : (
                <>
                  <Button
                    type="button"
                    onClick={handleEditClick}
                    className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                    value="Update"
                    style={{width: '150px', margin:'1rem'}}
                  />

                  <Button
                    type="button"
                    onClick={handleEditClick}
                    className="button bg-red-700 button--lg w-full xl:w-32 text-white"
                    value="Delete"
                    style={{width: '150px', margin:'1rem'}}
                  />
                </>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewClientDetails;

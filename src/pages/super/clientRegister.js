import React, { useState } from 'react';
import InputField from '../../components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import InputDropdown from '../../components/InputDropdown';
import Label from 'reactstrap/lib/Label';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

export default function ClientRegister() {
  const [inputList, setInputList] = useState([1]);
  const [managerControl, setManagerControl] = useState({});
  const [count, setCount] = useState(1);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dontMatch, setDontMatch] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [control, setControl] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let obj = {};

  const _onFocus = event => {
    event.currentTarget.type = 'date';
  };

  const _onBlur = event => {
    event.currentTarget.type = 'text';
    event.currentTarget.placeholder = 'Date of Birth';
  };

  const addNewDirector = count => (
    <div key={'director' + (count + 1)}>
      <div>
        <label className="font-semibold">{`Director ${count + 1}`}</label>
      </div>
      <Label className="m-0 required">Full name</Label>
      <InputField
        type="text"
        name={'fullName' + count}
        onChange={e => handleInputChange(e, count)}
        className="intro-x login__input input my-2 input--lg border border-gray-300 block w-100"
        placeholder="Full Name"
        value={managerControl.fullName}
        required
      />
      <Label className="m-0">Date of Birth</Label>
      <InputField
        type="text"
        name={'dateOfBirth' + count}
        onFocus={_onFocus}
        onBlur={_onBlur}
        onChange={e => handleInputChange(e, count)}
        className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
        placeholder="Date of Birth"
        value={managerControl.dateOfBirth}
        required
      />
      <div className="flex justify-between">
        {inputList.length !== 1 && (
          <MdRemoveCircleOutline onClick={() => handleRemoveClick(count)} />
        )}
        {inputList.length - 1 === count && (
          <MdAddCircleOutline onClick={handleAddClick} />
        )}
      </div>
    </div>
  );

  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    setCount(count - 1);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { firstName: '', dateOfBirth: '' }]);
    setCount(count + 1);
  };

  const handleInputChange = (event, count) => {
    obj[event.target.name] = event.target.value;
    setManagerControl({
      ...managerControl,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = target => {
    if (target.name === 'accountType') {
      console.log(target.value);
      target.value === 'Company' ? setShowCompany(true) : setShowCompany(false);
    }
    setControl({
      ...control,
      [target.name]: target.value,
    });
  };

  const { password } = control;

  let border = { border: '1px solid #dee2e6' };
  if (confirmPassword && confirmPassword === password) {
    border = { border: '2px solid green' };
  } else if (confirmPassword && confirmPassword !== password) {
    border = { border: '2px solid red' };
  }

  const datas = [
    ['Select Account Type', ''],
    ['Individual', 'Individual'],
    ['Company', 'Company'],
  ];

  const dropdownData = datas.map((data, id) => {
    return (
      <option value={data[1]} key={id}>
        {data[0]}
      </option>
    );
  });

  const handleSubmit = () => {
    console.log(control);
  };

  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="block xl:grid gap-4">
          <div className="xl:h-auto flex py-5 xl:py-0 xl:my-0">
            <div className="my-auto mx-auto xl:ml-2 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 pb-4 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto min-h-screen">
              <form onSubmit={handleSubmit}>
                <div className="intro-x mt-8">
                  {inputList.map((x, i) => {
                    return addNewDirector(i);
                  })}
                  <Label style={{ marginBottom: '-1rem', marginTop: '1rem' }}>
                    Account Type
                  </Label>
                  <InputDropdown
                    onChange={({ target }) => handleChange(target)}
                    name="accountType"
                    className="intro-x login__input input input--lg border border-gray-300 block w-100 required-field"
                    dropdownElements={dropdownData}
                    required
                  />
                  {showCompany && (
                    <>
                      <Label className="m-0">Company Name</Label>
                      <InputField
                        type="text"
                        name="companyName"
                        onChange={({ target }) => handleChange(target)}
                        className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100 required-field"
                        placeholder="Company Name"
                      />
                    </>
                  )}
                  <Label className="m-0">Address</Label>
                  <InputField
                    type="text"
                    name="companyAddress"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="Address"
                  />
                  <Label className="m-0">City</Label>
                  <InputField
                    type="text"
                    name="city"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="City"
                  />
                  <span className="iconRequired standard_iconRequired"></span>
                  <Label className="m-0">Postal Code</Label>
                  <InputField
                    type="text"
                    name="postalCode"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="Postal Code"
                  />
                  <Label className="m-0">Country</Label>
                  <InputField
                    type="text"
                    name="country"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="Country"
                  />
                  <Label className="m-0">Phone Number</Label>
                  <InputField
                    type="tel"
                    name="phoneNumber"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="Phone Number"
                    required
                  />
                  <Label className="m-0">Email</Label>
                  <InputField
                    type="email"
                    name="email"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="Email"
                    required
                  />
                  <Label className="m-0">Password</Label>
                  <InputField
                    type="password"
                    name="password"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="Password"
                    required
                  />
                  <p
                    style={{
                      fontSize: '.8rem',
                      color: 'grey',
                      opacity: 1,
                      transition: 'opactiy .2s 1s',
                    }}
                  >
                    Must have at least five characters
                  </p>
                  <InputField
                    style={border}
                    type="password"
                    onChange={({ target }) => setConfirmPassword(target.value)}
                    className="intro-x login__input input my-2 input--lg block w-100"
                    placeholder="Confirm password"
                    required
                  />
                  {dontMatch && (
                    <p style={{ color: 'red', fontSize: '.8rem' }}>
                      Passwords don't match
                    </p>
                  )}
                </div>
                <div className="intro-x mt-5 xl:mt-8 xl:text-left">
                  <InputField
                    type="submit"
                    className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                    value="Register"
                    disabled={isLoading}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

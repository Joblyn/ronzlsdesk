import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import logo from '../../assets/images/logo.png';
import bgImage from '../../assets/images/illustration.png';

import { registerUser, setCurrentUser } from '../../actions/user/Users';
import { userRegister } from '../../apiConstants/apiConstants';
import setAuthToken from '../../utils/setAuthToken';

//components
import InputField from '../../components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import InputDropdown from '../../components/InputDropdown';
import Label from 'reactstrap/lib/Label';

const Register = () => {
  const [inputList, setInputList] = useState([1]);
  const [managerControl, setManagerControl] = useState({});
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  let obj = {};
  const [control, setControl] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dontMatch, setDontMatch] = useState(false);
  const dispatch = useDispatch();
  const userReg = useSelector(state => state.userRegisterauth);

  useEffect(() => {
    if (userReg.isSuccessful) {
      const { token } = userReg.result;
      const { role } = userReg.result;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('role', role);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      setIsLoading(false);
      window.location.pathname = '/user/dashboard';
    }
  }, [userReg]);

  const handleInputChange = (event, count) => {
    obj[event.target.name] = event.target.value;
    setManagerControl({
      ...managerControl,
      [event.target.name]: event.target.value,
    });
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    setCount(count - 1);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: '', dateOfBirth: '' }]);
    setCount(count + 1);
  };
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

  const addNewDirector = count => (
    <div key={'director' + (count + 1)}>
      <div>
        <label className="font-semibold">{`Director ${count + 1}`}</label>
      </div>
      <Label className="m-0">Full name</Label>
      <InputField
        type="text"
        name={'fullName' + count}
        onChange={e => handleInputChange(e, count)}
        className="intro-x login__input input my-2 input--lg border border-gray-300 block w-100 required-field"
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

  const handleChange = target => {
    setControl({
      ...control,
      [target.name]: target.value,
    });
  };

  const { password } = control;
  const handleSubmit = event => {
    event.preventDefault();
    if (confirmPassword !== password) {
      setDontMatch(true);
    } else {
      setDontMatch(false);
      setIsLoading(true);
      let managers = prepareManager(managerControl);
      let payload = { director: managers, ...control };
      console.log(payload);
      dispatch(registerUser(userRegister, payload));
      setIsLoading(false);
    }
  };

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

  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <div className="hidden xl:flex flex-col min-h-screen">
            <div className="pt-3">
              <Link to="/" className="-intro-x flex items-center">
                <img alt="Ronzl Logo" className="w-48" src={logo} />
              </Link>
            </div>
            <div className="mt-40">
              <img
                alt="Ronzl background"
                className="-intro-x w-1/2 -mt-16"
                src={bgImage}
              />
              <div className="-intro-x text-gray-700 font-medium text-4xl leading-tight mt-10">
                Create your account.
              </div>
              <div className="-intro-x mt-5 text-lg text-gray-700">
                Manage all your e-commerce accounts in one place
              </div>
            </div>
          </div>
          <div className="xl:h-auto flex py-5 xl:py-0 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <div className="lg:hidden">
                <Link to="/" className="-intro-x flex items-center">
                  <img alt="Ronzl Logo" className="w-20" src={logo} />
                </Link>
              </div>
              <h2 className="intro-x font-bold text-2xl xl:text-3xl xl:text-left">
                Register
              </h2>
              <form id="register" onSubmit={handleSubmit}>
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
                  <Label className="m-0">Company Name</Label>
                  <InputField
                    type="text"
                    name="companyName"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100 required-field"
                    placeholder="Company Name"
                  />
                  <Label className="m-0">Company Address</Label>
                  <InputField
                    type="text"
                    name="companyAddress"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="Company Address"
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
                  <Label className="m-0">Website URL</Label>
                  <InputField
                    type="text"
                    name="websiteUrl"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="If null, type 'null'"
                  />
                  <Label className="m-0">Company Begin</Label>
                  <InputField
                    type="text"
                    name="companyBegin"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="If null, type '0000'"
                  />
                  <Label className="m-0">Company Reg. No.</Label>
                  <InputField
                    type="text"
                    name="companyRegNo"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="If null, type '0000'"
                  />
                  <Label className="m-0">UTR No.</Label>
                  <InputField
                    type="text"
                    name="utrNo"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="If null, type '0000'"
                  />
                  <Label className="m-0">VAT Submit Type</Label>
                  <InputField
                    type="text"
                    name="vatSubmitType"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="If null, type 'null'"
                  />
                  <Label className="m-0">VAT Scheme</Label>
                  <InputField
                    type="text"
                    name="vatScheme"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="If null, type 'null'"
                  />
                  <Label className="m-0">VAT Reg. No.</Label>
                  <InputField
                    type="text"
                    name="vatRegNo"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="If null, type '000'"
                  />
                  <Label className="m-0">VAT Reg. Date</Label>
                  <InputField
                    type="text"
                    name="vatRegDate"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="If null, type '0000'"
                  />
                  <Label className="m-0">Insurance Number</Label>
                  <InputField
                    type="text"
                    name="insuranceNumber"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="Insurance Number. If null, type '0000'"
                  />
                  <Label className="m-0">Payee Ref. No.</Label>
                  <InputField
                    type="text"
                    name="payeeRefNo"
                    onChange={({ target }) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block w-100"
                    placeholder="If null, type '0000'"
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
                    className="intro-x login__input input  my-2 input--lg block w-100"
                    placeholder="Confirm password"
                    required
                  />
                  {dontMatch && <p style={{color: 'red', fontSize:'.8rem'}}>Passwords don't match</p>}
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
              <div className="intro-x mt-6 xl:mt-10 text-lg text-gray-700 xl:text-left">
                Already have an account?
                <Link
                  to="/user/login"
                  className="text-green-500 font-semibold px-2 hover:underline"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

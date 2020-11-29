import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import bgImage from '../../assets/images/illustration.png';

import { registerUser } from '../../actions/user/authAction/Users';
import { userRegister } from '../../apiConstants/apiConstants';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

//components
import InputField from '../../components/InputField';
import Button from '../../components/button';
import { useDispatch, useSelector } from 'react-redux';
import InputDropdown from '../../components/InputDropdown';

const Register = () => {
  const [inputList, setInputList] = useState([1]);
  // const [inputList1, setInputList1] = useState([]);
  const [managerControl, setManagerControl] = useState({});
  const [count, setCount] = useState(1);
  let obj = {};
  const [control, setControl] = useState({});
  const dispatch = useDispatch();
  const userReg = useSelector(state => state.userRegisterauth);
  const history = useHistory();

  useEffect(() => {
    console.log(userReg);
    if (userReg.isSuccessful) {
      history.push('/user/login');
    }
  }, [userReg]);

  const handleInputChange = (event, count) => {
    //const { name, value } = event.target;
    // const list = [...inputList];
    // list[index][name] = value;
    // setInputList(list);
    // const n = [event.target.name] + count;
    // setInputList1({
    //   ...inputList1,
    //   inputList1: {fullName: n, date: }
    // })
    obj[event.target.name] = event.target.value;
    setManagerControl({
      ...managerControl,
      // ...inputList,

      [event.target.name]: event.target.value,
    });
    // console.log("Res: "+JSON.stringify(obj));
  };

  // console.log({ ...inputList, ...control });
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
      <label className="font-semibold">{`Director ${count + 1}`} </label>
      <InputField
        type="text"
        name={'fullName' + count}
        onChange={e => handleInputChange(e, count)}
        className="intro-x login__input input my-2 input--lg border border-gray-300 block"
        placeholder="Full Name"
        value={managerControl.fullName}
      />
      <InputField
        type="text"
        name={'dateOfBirth' + count}
        onFocus={_onFocus}
        onBlur={_onBlur}
        onChange={e => handleInputChange(e, count)}
        className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
        placeholder="Date of Birth"
        value={managerControl.dateOfBirth}
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

  const handleChange = event => {
    setControl({
      ...control,
      // ...inputList,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = event => {
    event.preventDefault();
    let managers = prepareManager(managerControl);
    let payload = { director: managers, ...control };
    console.log('Result: ' + JSON.stringify(payload));
    dispatch(registerUser(userRegister, payload));
  };

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
                // src={bgImage}
                src={bgImage}
              />
              <div className="-intro-x text-gray-700 font-medium text-4xl leading-tight mt-10">
                {/* A few more clicks to
                <br /> */}
                Create your account.
              </div>
              <div className="-intro-x mt-5 text-lg text-gray-700">
                Manage all your e-commerce accounts in one place
              </div>
            </div>
          </div>
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <div className="lg:hidden">
                <Link to="/" className="-intro-x flex items-center">
                  <img alt="Ronzl Logo" className="w-20" src={logo} />
                </Link>
              </div>
              <h2 className="intro-x font-bold text-2xl xl:text-3xl xl:text-left">
                Register
              </h2>
              {/* <div className="intro-x mt-2 text-gray-500 xl:hidden">
                A few more clicks to sign in to your account. Manage all your
                e-commerce accounts in one place
              </div> */}
              <div className="intro-x mt-8">
                {inputList.map((x, i) => {
                  return addNewDirector(i);
                })}

                <InputDropdown
                  onChange={handleChange}
                  name="accountType"
                  className="intro-x login__input input input--lg my-2 border border-gray-300 block mt-4"
                  dropdownElements={dropdownData}
                />
                <InputField
                  type="text"
                  name="companyName"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Company Name"
                />
                <InputField
                  type="text"
                  name="companyAddress"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Company Address"
                />
                <InputField
                  type="text"
                  name="city"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="City"
                />
                <InputField
                  type="text"
                  name="postalCode"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Postal Code"
                />
                <InputField
                  type="text"
                  name="country"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Country"
                />
                <InputField
                  type="tel"
                  name="phoneNumber"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Phone Number"
                />
                <InputField
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Email"
                />
                <InputField
                  type="text"
                  name="websiteUrl"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Website Url"
                />
                <InputField
                  type="text"
                  name="companyBegin"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Company Begin"
                />
                <InputField
                  type="text"
                  name="companyRegNo"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Company Reg No"
                />
                <InputField
                  type="text"
                  name="utrNo"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="UTR Number"
                />
                <InputField
                  type="text"
                  name="vatSubmitType"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Vat Submit Type"
                />
                <InputField
                  type="text"
                  name="vatScheme"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="VAT Scheme"
                />
                <InputField
                  type="text"
                  name="vatRegNo"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="VAT Reg No"
                />
                <InputField
                  type="text"
                  name="vatRegDate"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="VAT Reg Date"
                />
                <InputField
                  type="text"
                  name="insuranceNumber"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Insurance Number"
                />
                <InputField
                  type="text"
                  name="payeeRefNo"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Payee Ref No"
                />
                <InputField
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Password"
                />
              </div>
              <div className="intro-x mt-5 xl:mt-8 xl:text-left">
                <Button
                  type="button"
                  onClick={handleClick}
                  className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                  value="Register"
                />
                {/* <Link
                  to="/dashboard"
                  className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                >
                  Login
                </Link> */}
              </div>
              <div className="intro-x mt-6 xl:mt-10 text-lg text-gray-700 xl:text-left">
                Already have an account?
                <Link
                  to="/user/login"
                  className="text-green-500 font-semibold px-2 hover:underline"
                >
                  Login
                </Link>
              </div>
              {/* <div className="intro-x mt-10 xl:mt-24 text-gray-700 text-center xl:text-left">
                By signin up, you agree to our
                <br />
                <a className="text-theme-1" href="#">
                  Terms and Conditions
                </a>
                &
                <a className="text-theme-1" href="#">
                  Privacy Policy
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

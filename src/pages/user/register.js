import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import logo from '../../assets/images/logo.png';
import bgImage from '../../assets/images/illustration.png';

import { registerUser, setCurrentUser } from '../../actions/user/Users';
import { userRegister } from '../../apiConstants/apiConstants';
import setAuthToken from '../../utils/setAuthToken';

//components
import InputField from '../../components/InputField';
// import Button from '../../components/button';
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
    if (userReg.isSuccessful) {
      const { token } = userReg.result;
      const { role } = userReg.result;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('role', role);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history.push('/user/dashboard');
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
      <label className="font-semibold">{`Director ${count + 1}`} </label>
      <InputField
        type="text"
        name={'fullName' + count}
        onChange={e => handleInputChange(e, count)}
        className="intro-x login__input input my-2 input--lg border border-gray-300 block"
        placeholder="Full Name e.g. 'John Okoye'"
        value={managerControl.fullName}
        required
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

  const  handleChange = target => {
    setControl({
      ...control,
      [target.name]: target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let managers = prepareManager(managerControl);
    let payload = { director: managers, ...control };
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

                  <InputDropdown
                    onChange={({target}) => handleChange(target)}
                    name="accountType"
                    className="intro-x login__input input input--lg my-2 border border-gray-300 block mt-4"
                    dropdownElements={dropdownData}
                    required
                  />
                  <InputField
                    type="text"
                    name="companyName"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Company Name e.g. 'Samsung Ng'"
                    required
                  />
                  <InputField
                    type="text"
                    name="companyAddress"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Company Address e.g. 'No. 2, Lagos street, Lagos'"
                    required
                  />
                  <InputField
                    type="text"
                    name="city"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="City e.g. 'Lagos'"
                    required
                  />
                  <InputField
                    type="text"
                    name="postalCode"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Postal Code e.g. '100001'"
                    required
                  />
                  <InputField
                    type="text"
                    name="country"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Country e.g. 'Nigeria"
                    required
                  />
                  <InputField
                    type="tel"
                    name="phoneNumber"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Phone Number e.g. '0123456789'"
                    required
                  />
                  <InputField
                    type="email"
                    name="email"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Email e.g. 'example@example.com"
                    required
                  />
                  <InputField
                    type="text"
                    name="websiteUrl"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Website Url e.g. 'www.example.com'"
                    required
                  />
                  <InputField
                    type="text"
                    name="companyBegin"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Company Begin e.g '2020-12-25'"
                    required
                  />
                  <InputField
                    type="text"
                    name="companyRegNo"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Company Reg No e.g. '1234'"
                    required
                  />
                  <InputField
                    type="text"
                    name="utrNo"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="UTR Number e.g. '1234'"
                    required
                  />
                  <InputField
                    type="text"
                    name="vatSubmitType"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Vat Submit Type e.g. 'Non-VAT Registered'"
                    required
                  />
                  <InputField
                    type="text"
                    name="vatScheme"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="VAT Scheme e.g. 'Annually'"
                    required
                  />
                  <InputField
                    type="text"
                    name="vatRegNo"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="VAT Reg No e.g. '1234'"
                    required
                  />
                  <InputField
                    type="text"
                    name="vatRegDate"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="VAT Reg Date e.g. '2020-12-25'"
                    required
                  />
                  <InputField
                    type="text"
                    name="insuranceNumber"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Insurance Number e.g '12AB34CD56EF"
                    required
                  />
                  <InputField
                    type="text"
                    name="payeeRefNo"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Payee Ref No e.g. '12AB34CD56EF'"
                    required
                  />
                  <InputField
                    type="password"
                    name="password"
                    onChange={({target}) => handleChange(target)}
                    className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                    placeholder="Password"
                    required 
                  />
                  <p style={{
                    fontSize: '.8rem', 
                    color:'grey',
                    opacity: 1,
                    transition: 'opactiy .2s 1s'
                    }}>Must have at least five characters</p>
                </div>
                <div className="intro-x mt-5 xl:mt-8 xl:text-left">
                  <InputField
                    type="submit"
                    className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                    value="Register"
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

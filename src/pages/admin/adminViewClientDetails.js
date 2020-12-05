import React, { useEffect, useState } from 'react';
import { 
  // Link, 
  // useHistory,
  // useLocation, 
  // useParams 
} from 'react-router-dom';

// import logo from '../../assets/images/logo.png';
// import bgImage from '../../assets/images/illustration.png';

import { registerUser } from '../../actions/user/Users';
import { userRegister } from '../../apiConstants/apiConstants';
// import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';
import PageSpinner from '../../components/PageSpinner';

//components
import InputField from '../../components/InputField';
import Button from '../../components/button';
import { useDispatch, useSelector } from 'react-redux';
import InputDropdown from '../../components/InputDropdown';
// import { getClientDetails } from '../../actions/admin/clients/Clients';
// import { getClientDetail } from '../../apiConstants/apiConstants';

const AdminViewClientDetails = () => {
  // const [userState, setUserState] = useState('');
  const [inputList, setInputList] = useState([1]);
  const [enable, setEnable] = useState('disabled');
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
  const [director, setDirector ] = useState([{}]);
  //change form view state from disabled to enable
  const handleEditClick = event => {
    event.preventDefault();
    setEnable('');
  };

  // const { userId } = useParams();
  // console.log('USer :' + userId);

  useEffect(() => {
    
    // const endpoint = getClientDetail + userId.split('=')[1];
    // //const endpoint = getClientDetail + userId;
    // console.log('Details; ' + userId);
    // dispatch(getClientDetails(endpoint));
    // setUserState(clientDetails);
    setData(clientDetails);
    setDirector(clientDetails.director)
    console.log(clientDetails);
  }, [clientDetails]);

  // if (clientDetails.isSuccessful === true) {
  //   let client = clientDetails.user;
  //   // client = clientDetails.user;
  //   // setUserState(userState);
  //   // client = userState;
  //   console.log('Deatila: ' + userState);
  // }

  const handleInputChange = (event, count) => {
    obj[event.target.name] = event.target.value;
    setManagerControl({
      ...managerControl,
      [event.target.name]: event.target.value,
    });
    // console.log("Res: "+JSON.stringify(obj));
  };
  console.log(handleInputChange);

  // console.log({ ...inputList, ...control });
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
        disabled={enable}
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
        disabled={enable}
      />
      {/* <div className="flex justify-between">
        {enable ? (
          ''
        ) : (
          <>
            {inputList.length !== 1 && (
              <MdRemoveCircleOutline onClick={() => handleRemoveClick(count)} />
            )}
            {inputList.length - 1 === count && (
              <MdAddCircleOutline onClick={handleAddClick} />
            )}
          </>
        )}
      </div> */}
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

  //   const StatusDatas = [
  //     ['Select Account Type', ''],
  //     ['Individual', 'individual'],
  //     ['Company', 'company'],
  //   ];

  const AccountTypeDropdownData = AccountTypeDatas.map((data, id) => {
    return (
      <option value={data[1]} key={id}>
        {data[0]}
      </option>
    );
  });

  //   const StatusDropdownData = StatusDatas.map((data, id) => {
  //     return (
  //       <option value={data[1]} key={id}>
  //         {data[0]}
  //       </option>
  //     );
  //   });
  if (data === null) {
    return <PageSpinner />;
  }
  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="intro-x">
          <div className="block xl:grid grid-cols-2 gap-4">
            <div className="my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto ">
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
                disabled={enable}
              />
              <label className="font-semibold mt-2">Company Name:</label>
              <InputField
                type="text"
                value={data.companyName}
                name="Company Name"
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled={enable}
              />
              <label className="font-semibold mt-2">Company Address:</label>
              <InputField
                type="text"
                name="companyAddress"
                value={data.companyAddress}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled={enable}
              />
              <label className="font-semibold mt-2">City:</label>
              <InputField
                type="text"
                name="city"
                value={data.city}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled={enable}
              />
              <label className="font-semibold mt-2">Postal Code:</label>
              <InputField
                type="text"
                name="postalCode"
                value={data.postalCode}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled={enable}
              />
              <label className="font-semibold mt-2">Country:</label>
              <InputField
                type="text"
                name="country"
                value={data.country}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled={enable}
              />
              <label className="font-semibold mt-2">Phone Number:</label>
              <InputField
                type="tel"
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled={enable}
              />

              <label className="font-semibold mt-2">Email:</label>
              <InputField
                type="email"
                name="email"
                value={data.email}
                onChange={e => setData(e.target.value)}
                className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                disabled={enable}
              />
            </div>
            <div className="h-screen xl:h-auto flex xl:py-0 xl:my-0">
              <div className="my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto ">
                <label className="font-semibold mt-2">Website:</label>
                <InputField
                  type="text"
                  name="websiteUrl"
                  value={data.websiteUrl}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled={enable}
                />
                <label className="font-semibold mt-2">Company Begin:</label>
                <InputField
                  type="text"
                  name="companyBegin"
                  value={data.companyBegin}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled={enable}
                />
                <label className="font-semibold mt-2">Company Reg No:</label>
                <InputField
                  type="text"
                  name="companyRegNo"
                  value={data.companyRegNo}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled={enable}
                />
                <label className="font-semibold mt-2">UTR Number:</label>
                <InputField
                  type="text"
                  name="utrNo"
                  value={data.utrNo}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled={enable}
                />
                <label className="font-semibold mt-2">VAT Submit Type:</label>
                <InputField
                  type="text"
                  name="vatSubmitType"
                  value={data.vatSubmitType}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled={enable}
                />
                <label className="font-semibold mt-2">VAT Scheme:</label>
                <InputField
                  type="text"
                  name="vatScheme"
                  value={data.vatScheme}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled={enable}
                />
                <label className="font-semibold mt-2">VAT Reg No:</label>
                <InputField
                  type="text"
                  name="vatRegNo"
                  value={data.vatRegNo}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled={enable}
                />
                <label className="font-semibold mt-2">VAT Reg Date:</label>
                <InputField
                  type="text"
                  name="vatRegDate"
                  value={data.vatRegDate}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled={enable}
                />
                <label className="font-semibold mt-2">Insurance Number:</label>
                <InputField
                  type="text"
                  name="insuranceNumber"
                  value={data.insuranceNumber}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
                  disabled={enable}
                />
                <label className="font-semibold mt-2">Payee Ref No:</label>
                <InputField
                  type="text"
                  name="payeeRefNo"
                  value={data.payeeRefNo}
                  onChange={e => setData(e.target.value)}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  disabled={enable}
                />
                {/* <label className="font-semibold mt-2">:</label>
                <InputField
                  type="password"
                  name="password"
                   onChange={(e) => setData(e.target.value)}
                  className="intro-x login__input input  my-2 input--lg border border-gray-300 block"
                  placeholder="Password"
                  disabled={enable}
                /> */}
              </div>
            </div>
            <div></div>
            <div className="intro-x flex xl:justify-center">
              {enable ? (
                <Button
                  type="button"
                  onClick={handleEditClick}
                  className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                  value="Edit"
                />
              ) : (
                <>
                  <Button
                    type="button"
                    onClick={handleEditClick}
                    className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                    value="Update"
                  />

                  <Button
                    type="button"
                    onClick={handleEditClick}
                    className="button bg-red-700 button--lg w-full xl:w-32 text-white"
                    value="Delete"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewClientDetails;

// class Control extends React.Component {

//   state = {
//     [this.props.name]: 'Hello',//this.props.companyName,
//     name: this.props.name,
//     //  label: this.props.label
//   }
// componentDidMount(){
//   this.setState({
//     //value: this.props.value
//   })
//   console.log("J: "+this.state.value);
// }
//   handleChange(e, value){
//     this.setState({

//       [value]: e.target.value
//     });
//     e.target.value = "";

//   }
//   render(){
//     let { companyName, name} = this.state;
//     console.log(JSON.stringify(companyName))
//     return(
//       <div className="my-auto mx-auto xl:ml-20 xl:bg-transparent px-5 sm:px-8 py-8 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto ">
//       {/* {inputList.map((x, i) => {
//         return addNewDirector(i);
//       })} */}
//       <label className="font-semibold mt-2">Account Type:</label>
//       <InputDropdown
//         value={userState.accountType}
//          onChange={(e) => setData(e.target.value)}
//         name="accountType"
//         className="intro-x login__input input input--lg mb-2 border border-gray-300 block"
//         dropdownElements={AccountTypeDropdownData}
//         disabled={enable}
//       />
//       <label className="font-semibold mt-2">{this.props.lable}</label>
//       <InputField
//         type={this.props.type}//"text"
//         value={this.state.value}//{this.userState.companyName}
//         name={this.props.name}
//         onChange={this.handleChange.bind(this, this.props.name)}
//         className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
//        // disabled={enable}
//       />
//       {/* <label className="font-semibold mt-2">Company Address:</label>
//       <InputField
//         type="text"
//         name="companyAddress"
//         // value={client.companyAddress}
//          onChange={(e) => setData(e.target.value)}
//         className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
//         disabled={enable}
//       />
//       <label className="font-semibold mt-2">City:</label>
//       <InputField
//         type="text"
//         name="city"
//         // value={client.city}
//          onChange={(e) => setData(e.target.value)}
//         className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
//         disabled={enable}
//       />
//       <label className="font-semibold mt-2">Postal Code:</label>
//       <InputField
//         type="text"
//         name="postalCode"
//         // value={client.postalCode}
//          onChange={(e) => setData(e.target.value)}
//         className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
//         disabled={enable}
//       />
//       <label className="font-semibold mt-2">Country:</label>
//       <InputField
//         type="text"
//         name="country"
//         // value={client.country}
//          onChange={(e) => setData(e.target.value)}
//         className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
//         disabled={enable}
//       />
//       <label className="font-semibold mt-2">Phone Number:</label>
//       <InputField
//         type="tel"
//         name="phoneNumber"
//         // value={client.phoneNumber}
//          onChange={(e) => setData(e.target.value)}
//         className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
//         disabled={enable}
//       />

//       <label className="font-semibold mt-2">Email:</label>
//       <InputField
//         type="email"
//         name="email"
//         // value={client.email}
//          onChange={(e) => setData(e.target.value)}
//         className="intro-x login__input input  mb-2 input--lg border border-gray-300 block"
//         disabled={enable}
//       /> */}
//     </div>
//     );
//   }
// }

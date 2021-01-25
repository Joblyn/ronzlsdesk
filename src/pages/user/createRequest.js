import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button, Form, FormGroup } from 'reactstrap';
import { MdAttachment } from 'react-icons/md';
import { userCreateRequest } from '../../apiConstants/apiConstants';
import InputField from '../../components/InputField';
import Page from 'components/Page';
import PopupSuccess from '../../components/popup-success';

export default function CreateRequest() {
  const [requestData, setRequestData] = useState('');
  const [isValid, setIsValid] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const history = useHistory();
  const accountOfficer = useSelector(state => state.userData.accountOfficer);

  const handleChange = target => {
    setRequestData(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (accountOfficer) {
      const { requestDescription, requestTitle, attachedFileName } = requestData;
      let inValidData = requestDescription && requestTitle;
      if (inValidData) {
        setIsValid(true);
        const formData = new FormData();
        const requestFile = document.getElementById('requestFile');
        formData.append('requestTitle', requestTitle);
        formData.append('requestDescription', requestDescription);
        formData.append('attachedFileUrl', requestFile.files[0]);
        formData.append('attachedFileName', attachedFileName);
  
        let localURL = 'https://cmsbackend2.herokuapp.com/api/v1/';
        let prodURL = 'https://cmsbackend2.herokuapp.com/api/v1/';
        let baseUrl = process.env.NODE_ENV === 'production' ? prodURL : localURL;
        const endpoint = baseUrl + userCreateRequest;
        const token = localStorage.getItem('jwtToken');
        const bearerToken = 'Bearer ' + token;
        fetch(endpoint, {
          method: 'POST',
          body: formData,
          credentials: 'same-origin',
          headers: new Headers({
            Authorization: bearerToken,
          }),
        })
          .then(res => res.json())
          .then(() => {
            alert('Created request with account officer.'); 
            history.push('/user/requests');
          })
          .catch(err => {
            alert('Opps, An error occurred, please try again!');
            console.error()
          });
      } else {
        setIsValid(false);
      }
    } else {
      setShowPopup(true);
    }
  };

  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Create Request', active: true }]}
    >
      {showPopup && (
        <PopupSuccess
          button
          majorText="You have not yet been assigned to an admin."
          text="You are unable to create a request as you have not yet been assigned to an admin. Please wait untill you have been assigned, or contact the management."
          setShow={setShowPopup}
        />
      )}
      <main className="formbase">
        <h3 className="mb-4">Create a new request</h3>
        <Form className="form" onSubmit={handleSubmit} id="create-request">
          {isValid === false ? (
            <p style={{ color: 'red' }}>Please fill in all details</p>
          ) : (
            ''
          )}
          <FormGroup>
            <InputField
              required
              placeholder="Request Title"
              type="text"
              name="requestTitle"
              onChange={({ target }) => handleChange(target)}
            />
          </FormGroup>
          <FormGroup>
            <InputField
              required
              placeholder="Request Description"
              type="text"
              name="requestDescription"
              onChange={({ target }) => handleChange(target)}
            />
          </FormGroup>
          <FormGroup className="form-group">
            <MdAttachment className="atch" size={40} />
            <InputField
              required
              placeholder="Attach Document"
              type="file"
              id="requestFile"
            />
          </FormGroup>
          <FormGroup>
            <InputField
              required
              placeholder="File Name"
              type="text"
              name="attachedFileName"
              onChange={({ target }) => handleChange(target)}
            />
          </FormGroup>
          <Button type="submit" className="form-button" form="create-request">
            CREATE REQUEST
          </Button>
        </Form>
      </main>
    </Page>
  );
}

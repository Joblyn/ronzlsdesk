import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup } from 'reactstrap';
import { MdAttachment } from 'react-icons/md';

import { userCreateRequest, 
  // userUploaDocToAdmin
} from '../../apiConstants/apiConstants';
import { createRequest, 
  // uploadDoc 
} from '../../actions/user/Users';
import InputField from '../../components/InputField';
import Page from 'components/Page';

export default function CreateRequest() {
    const [requestData, setRequestData] = useState('');
    const [isValid, setIsValid] = useState();
    const dispatch = useDispatch();
    const request = useSelector(state => state.userCreatedRequest);
    const doc =  useSelector(state => state.userUploadDoc);
    
    if(request.isSuccessful || doc.isSuccessful) {
      alert('Succcessfully created Request');
      console.log(request.request);
      console.log(doc.data);
    }

    const handleChange = target => {
      setRequestData(prevState => ({
        ...prevState,
        [target.name]:target.value
      }))
    };

    const handleSubmit = e => {
      e.preventDefault();
      const {
        requestDescription,
        requestTitle,
        attachedFileName,
        docContentUrl
      } = requestData;
      const request = {
        requestTitle, 
        requestDescription, 
        attachedFileName
      };
      const doc = {
        docName: attachedFileName,
        docContentUrl
      };
      console.log(doc);

      let inValidData = (requestDescription && requestTitle && attachedFileName && docContentUrl);  
      if (inValidData) {
        setIsValid(true);
        dispatch(createRequest(userCreateRequest, request));
        // const docEndpoint = userUploaDocToAdmin + 'admin._id'
        // dispatch(uploadDoc(docEndpoint, doc));
      } else { setIsValid(false); }
    }

  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Create Request', active: true }]}
    >
       <main className="formbase">
        <h3 className="mb-4">Create a new request</h3>
          <Form className="form" onSubmit={handleSubmit} id="create-request">
            { isValid === false ? <p style={{color:'red'}}>Please fill in all details</p> : ''}
            <FormGroup>
              <InputField
                required
                placeholder="Request Title"
                type="text"
                name="requestTitle"
                onChange={({ target}) => handleChange(target)}  
              />
            </FormGroup>
            <FormGroup>
              <InputField
                required
                placeholder="Request Description"
                type="text"
                name="requestDescription"
                onChange={({ target}) => handleChange(target)} 
              />
            </FormGroup>
            <FormGroup className="form-group">
              <MdAttachment className="atch" size={40}/>
              <InputField
                required
                placeholder="Attach Document"
                type="file"
                name="docContentUrl"
                onChange={({ target}) => handleChange(target)} 
              />
            </FormGroup>
            <FormGroup>
              <InputField
                required
                placeholder="File Name"
                type="text"
                name="attachedFileName"
                onChange={({ target}) => handleChange(target)} 
              />
            </FormGroup>
            <Button type="submit" className="form-button" form="create-request">CREATE REQUEST</Button>
          </Form>
      </main> 
    </Page>
  )
}
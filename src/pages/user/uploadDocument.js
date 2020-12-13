import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Button, Form } from 'reactstrap';

// camera libraries
import 'react-html5-camera-photo/build/css/index.css';

import { MdPhotoCamera, MdFileUpload, MdClear } from 'react-icons/md';

import Page from 'components/Page';
import InputField from '../../components/InputField';
import {
  // superAdminGetAllAdmins,
  userUploaDocToAdmin,
} from '../../apiConstants/apiConstants';
// import { uploadDoc } from '../../actions/user/Users';
import { FormGroup } from '@material-ui/core';
// import { getAllAdmins } from '../../actions/admin/authAction/Users';

export default function UploadDocument() {
  const [fileName, setFileName] = useState('');
  const [form, setForm] = useState(false);
  // const dispatch = useDispatch();

  // edit
  // const AllAdmins = useSelector(state => state.superAdminGetAllAdmins.admins);

  // useEffect(() => {
  //   dispatch(getAllAdmins(superAdminGetAllAdmins))
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (fileName) {
      // with docContentUrl
      // console.log(AllAdmins[0]);
      // dispatch(uploadDoc(docEndpoint, doc));

      // with FormData
      const formData = new FormData();
      const inpFile = document.getElementById('inpFile');
      formData.append('fileName', fileName);
      formData.append('fileUrl', inpFile.files[0]);

      let localURL = 'https://node.codecradle.co/api/v1/';
      let prodURL = 'https://node.codecradle.co/api/v1/';
      let baseUrl = process.env.NODE_ENV === 'production' ? prodURL : localURL;
      const endpoint = baseUrl + userUploaDocToAdmin + '5fc39233de6fbc1361ef4c60';
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
        .then(res => console.log(res))
        .catch(console.error);
    }
  };

  const [source, setSource] = useState('');
  const handleCapture = target => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Upload Document', active: true }]}
    >
      <div className="main">
        <h3 className="text-center">Upload Document</h3>
        <div className="cont">
          <div className="show_only_on_mobile">
            <Button className="action" style={{ position: 'relative' }}>
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                capture="environment"
                onChange={e => handleCapture(e.target)}
                style={{
                  opacity: 0,
                  poition: 'absolute',
                  zIndex: '10',
                  width: '100%',
                  height: '100%',
                }}
              />
              <MdPhotoCamera
                size={50}
                style={{ position: 'absolute', top: '2rem' }}
              />
              <p style={{ position: 'absolute', top: '5.2rem' }}>
                Take a photo
              </p>
            </Button>
          </div>
          <div>
            <Button className="action" onClick={() => setForm(true)}>
              <MdFileUpload size={50} />
              <p>Upload Document</p>
            </Button>
          </div>
          {form && (
            <div className="overlay">
              <Form id="doc-form" onSubmit={handleSubmit} className="form">
                <MdClear
                  size={25}
                  className="icon"
                  onClick={() => setForm(false)}
                />
                <FormGroup className="form-group">
                  <InputField
                    required
                    type="file"
                    name="doc"
                    id="inpFile"
                    className="inp mt-4"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <InputField
                    required
                    type="text"
                    name="file-name"
                    placeholder="file name"
                    className="inp mt-2"
                    onChange={({ target }) => setFileName(target.value)}
                  />
                </FormGroup>
                <Button
                  type="submit"
                  form="doc-form"
                  className="appt-button mt-3"
                  style={{ padding: '.7rem', fontSize: '1.2rem' }}
                >
                  Upload
                </Button>
              </Form>
            </div>
          )}
        </div>
      </div>

      {source && <img src={source} alt="captured" width="250" />}
    </Page>
  );
}

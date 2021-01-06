import React, { useState, useEffect } from 'react';
import { Button, Form } from 'reactstrap';

import { MdPhotoCamera, MdFileUpload, MdClear } from 'react-icons/md';

import Page from 'components/Page';
import InputField from '../../components/InputField';
import {
  getUserData,
  userUploaDocToAdmin,
} from '../../apiConstants/apiConstants';
import { FormGroup } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../actions/user/Users';
import nProgress from 'nprogress';

export default function UploadDocument() {
  const [fileName, setFileName] = useState('');
  const [form, setForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [source, setSource] = useState();
  const accountOfficer = useSelector(
    state => state.userData.data.accountOfficer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(getUserData));
  }, []);

  const upload = formData => {
    let localURL = 'https://node.codecradle.co/api/v1/';
    let prodURL = 'https://node.codecradle.co/api/v1/';
    let baseUrl = process.env.NODE_ENV === 'production' ? prodURL : localURL;
    const endpoint = baseUrl + userUploaDocToAdmin + accountOfficer._id;
    const token = localStorage.getItem('jwtToken');
    const bearerToken = 'Bearer ' + token;
    nProgress.start();
    fetch(endpoint, {
      method: 'POST',
      body: formData,
      credentials: 'same-origin',
      headers: new Headers({
        Authorization: bearerToken,
      }),
    })
      .then(res => res.json())
      .then(data => {
        alert('Successfully sent document to Account Officer.');
        setIsLoading(false);
        setForm(false);
        setSource('');
        nProgress.done();
        nProgress.remove();
      })
      .catch(err => {
        alert('Opps, An error occurred, please try again!');
        console.error();
        nProgress.done();
        nProgress.remove();
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (fileName) {
      setIsLoading(true);
      const formData = new FormData();
      const inpFile = document.getElementById('inpFile');
      formData.append('docName', fileName);
      formData.append('docContentUrl', inpFile.files[0]);
      upload(formData);
    }
  };

  const handleSubmit2 = e => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append('docName', fileName);
    formData.append('docContentUrl', source);
    upload(formData);
  };

  const handleCapture = target => {
    if (target.files) {
      if (target.files.length !== 0) {
        const capturedFile = target.files[0];
        setSource(capturedFile);
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
                  disabled={isLoading}
                >
                  Upload
                </Button>
              </Form>
            </div>
          )}
        </div>
      </div>
      {source && (
        <div className="overlay" style={{ zIndex: '50' }}>
          <Form
            className="form py-5"
            id="capture-form"
            onSubmit={handleSubmit2}
            style={{ zIndex: '100' }}
          >
            <FormGroup className="form-group">
              <InputField
                required
                type="text"
                name="file-name"
                placeholder="Set file name"
                className="mt-2"
                onChange={({ target }) => setFileName(target.value)}
              />
            </FormGroup>
            <Button
              type="submit"
              form="capture-form"
              className="appt-button mt-3"
              style={{ padding: '.7rem', fontSize: '1.2rem' }}
              disabled={isLoading}
            >
              Upload
            </Button>
          </Form>
        </div>
      )}
    </Page>
  );
}

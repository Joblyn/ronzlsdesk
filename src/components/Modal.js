import React, { useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import InputField from '../components/InputField';
import { adminUploadDoc } from '../apiConstants/apiConstants';
import nProgress from 'nprogress';

export default function Modal({ action, color }) {
  const [showModal, setShowModal] = useState(false);
  const [client, setClient] = useState();
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const clients = useSelector(state => state.adminData.users);

  const isInvalid = file === '' || fileName === '' || client === {};
  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    const inpFile = document.getElementById('file');
    formData.append('docName', fileName);
    formData.append('docContentUrl', inpFile.files[0]);

    let localURL = 'https://cmsbackend2.herokuapp.com/api/v1/';
    let prodURL = 'https://cmsbackend2.herokuapp.com/api/v1/';
    let baseUrl = process.env.NODE_ENV === 'production' ? prodURL : localURL;
    const endpoint = baseUrl + adminUploadDoc + client._id;
    console.log(endpoint);
    const token = localStorage.getItem('jwtToken');
    const bearerToken = 'Bearer ' + token;
    nProgress.start();
    setIsLoading(true);
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
        console.log(data);
        nProgress.done();
        nProgress.remove();
        alert(`Sent document to ${client.director[0].fullName}.`);
        setShowModal(false);
        setIsLoading(false);
        window.location.reload();
      })
      .catch(err => {
        nProgress.done();
        nProgress.remove();
        alert('Opps, An error occurred, please try again!');
        console.error();
        setIsLoading(false);
        setShowModal(false);
        // window.location.reload();
      });
  };

  return (
    <>
      <Button
        className="text-green-600 border-none font-semibold capitalize underline text-base"
        type="button"
        style={{
          transition: 'all .15s ease',
          color: color,
          textDecoration: 'none',
        }}
        onClick={() => setShowModal(true)}
      >
        {action}
      </Button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-4 border-b border-solid border-gray-300 rounded-t">
                  <h3
                    className="text-2xl font-semibold"
                    style={{ color: 'black' }}
                  >
                    Select file to upload
                  </h3>
                </div>
                {/*body*/}
                <div
                  className="relative p-6 flex-auto"
                  style={{ color: 'black' }}
                >
                  <Form
                    id="doc-form"
                    onSubmit={handleSubmit}
                    style={{ textAlign: 'left' }}
                  >
                    <FormGroup className="form-group">
                      <InputField
                        id="file"
                        type="file"
                        name="file"
                        className="inp"
                        onChange={({ target }) => setFile(target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup className="form-group">
                      <InputField
                        type="text"
                        name="doc-name"
                        placeholder="File name"
                        className="inp"
                        onChange={({ target }) => setFileName(target.value)}
                        required
                      />
                    </FormGroup>
                    <FormGroup
                      style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.2)' }}
                    >
                      <select
                        defaultValue=""
                        className="inp border-grey-300"
                        style={{
                          background: 'inherit',
                          width: '100%',
                        }}
                        onChange={({target}) => {
                          console.log(JSON.parse(target.value))
                          setClient(JSON.parse(target.value));
                        }}
                      >
                        <option value="">Send to</option>
                        {clients.map((client, i) => {
                          return (
                          <option key={i + 1} value={JSON.stringify(client)}>
                            {client.director[0].fullName}
                          </option>
                        )})}
                      </select>
                    </FormGroup>
                    <Button
                      type="submit"
                      form="doc-form"
                      disabled={isInvalid || isLoading}
                      style={{ marginRight: 'auto' }}
                    >
                      Send
                    </Button>
                  </Form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

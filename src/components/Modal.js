import React, { useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import InputField from '../components/InputField';
import { adminUploadDoc } from '../apiConstants/apiConstants';
import { uploadDoc } from '../actions/admin/clients/Clients';

export default function Modal({ action, color }) {
  const [showModal, setShowModal] = useState(false);
  const [client, setClient] = useState('');
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState();

  const dispatch = useDispatch();
  const clients = useSelector(state => state.adminData.users);
  const adminUploadDocToClient = useSelector(state => state.adminUploadDocToClient);

  const isInvalid = (file === '' || fileName === '' || client === '');
  const handleSubmit = e => {
    e.preventDefault();

    // with docContentUrl
    const payload = {
      docName: fileName,
      docContentUrl: file
    };
    const endpoint = adminUploadDoc + client;
    dispatch(uploadDoc(endpoint, payload));

    // with FormData
    // const formData = new FormData();
    // const inpFile = document.getElementById('file')
    // formData.append("inpFile", inpFile.files[0]);
    // fetch(endpoint, {
    //   method: "POST",
    //   body: "formData"
    // })
    // .catch(err => console.log(err))
  }

  if (adminUploadDocToClient.isSuccessful) {
    alert('Document successfully sent to client');
  }
  return (
    <>
      <Button
        className="text-green-600 border-none font-semibold capitalize underline text-base"
        type="button"
        style={{ transition: 'all .15s ease', color: color, textDecoration: "none" }}
        onClick={() => setShowModal(true)}
      >
        {action}
      </Button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"

          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-center p-4 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-semibold" style={{ color: 'black' }}>
                    Select file to upload
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto" style={{ color: 'black' }}>
                  <Form id="doc-form" onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
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
                    <FormGroup style={{ borderBottom: '2px solid rgba(0, 0, 0, 0.2)' }}>
                      <select
                        value={client}
                        className="inp"
                        style={{
                          background: 'inherit',
                          width: '100%'
                        }}
                        onChange={({ target }) => setClient(target.value)}
                      >
                        <option value="send to">Send to</option>
                        <option value="Williams Oaikhenah">Williams Oaikhenah</option>
                        {clients.map((client, i) => (
                          <option key={i + 1} value={client._id}>{client.fullName}</option>
                        ))}
                      </select>
                    </FormGroup>
                    <Button type="submit" form="doc-form" disabled={isInvalid} style={{ marginRight: 'auto' }}>Upload</Button>
                  </Form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
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

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'reactstrap';
import Webcam from 'webcam-easy';
import { MdPhotoCamera, MdFileUpload, MdClear } from 'react-icons/md';

import Page from 'components/Page';
import InputField from '../../components/InputField';
import { userUploaDocToAdmin } from '../../apiConstants/apiConstants';
import { uploadDoc } from '../../actions/user/Users';
import { FormGroup } from '@material-ui/core';

export default function UploadDocument() {
  const [doc, setDoc] = useState();
  const [fileName, setFileName] = useState('');
  const [webcamActive, setWebcamActive] = useState(false);
  const [snap, setsnap] = useState(false);
  const [form, setForm] = useState(false);
  const dispatch = useDispatch();

  const handleDocChange = target => {
    setDoc({
      docName: target.name,
      docContentUrl: target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (doc && fileName) {

      // with docContentUrl 
      const docEndpoint = userUploaDocToAdmin + 'admin_id';
      dispatch(uploadDoc(docEndpoint, doc));  

      // with FormData
      // const formData = new FormData();
      // const inpFile = document.getElementById("inpFile"); 
      // formData.append("inpFile", inpFile.files[0]);
      // fetch(docEndpoint, {
      //   method: "post",
      //   body: "formData"
      // }).catch(console.error);      
    }
  };

  // webcam config
  const accessCamera = (action) => {
    const webcamElement = document.getElementById('webcam');
    const canvasElement = document.getElementById('canvas');

    const webcam = new Webcam(webcamElement, 'user', canvasElement);

    if (action === 'start') {
      webcam.start('facingMode')
      .then(result => {
          console.log("webcam started");
          setWebcamActive(true);
        })
        .catch(err => {
          console.log(err);
          setWebcamActive(false);
      });
    } else if (action === 'stop') {
      setWebcamActive(false);
      webcam.stop();
      console.log("webcam stopped")
    } else if (action === 'snap') {
      webcam.snap();
      setsnap(true);
      console.log("snapped");
      console.log(webcam.snap());
    } else if (action === 'flip') {
      webcam.flip();
      webcam.start();
    } 

  }

  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Upload Document', active: true }]}
    >
      <div className="main">
        <h3 className="text-center">Upload Document</h3>
        <div className="cont">
          <div>
            <video id="webcam" autoPlay playsInline width="640" height="480" className={webcamActive ? '' : 'd-none'}></video>
            <canvas id="canvas" width="640" height="480" className={snap ? '' : 'd-none'}></canvas>
            {webcamActive ?
              <div>
                <Button onClick={()=>accessCamera('snap')}>Capture</Button>
                <Button onClick={()=>accessCamera('stop')}>Stop Camera</Button>
                <Button onClick={()=>accessCamera('flip')}>Flip Camera</Button>
              </div>
              : <Button className="action">
              {/* webcam to be implemented here*/}
                <MdPhotoCamera size={50}/> 
                <p>Take a photo</p>
              </Button>
            }
          </div>
          <div>
            <Button className="action" onClick={()=>setForm(true)}>
              <MdFileUpload size={50}/>
              <p>Upload Document</p>
            </Button>
          </div>
          {form && <div className="overlay">
            <Form id="doc-form" onSubmit={handleSubmit} className="form">
              <MdClear size={25} className="icon" onClick={()=>setForm(false)}/>
              <FormGroup className="form-group">
                <InputField
                  required
                  type="file"
                  name="doc"
                  onChange={({ target }) => handleDocChange(target)}
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
              <Button type="submit" form="doc-form" className="form-button mt-3" style={{padding: '.7rem', fontSize: '1.2rem'}}>
                Upload 
              </Button>
            </Form>
          </div>}
        </div>
      </div>
    </Page>
  )
}
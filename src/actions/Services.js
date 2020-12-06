import axios from 'axios';
import * as nprogress from 'nprogress';
import ErrorHandler from '../reducers/errorReducer';
import { baseUrl } from '../apiConstants/apiConstants';

nprogress.configure({ showSpinner: false, easing: 'ease', speed: 500 });

export const getData = (url, done) => {
  const endpoint = baseUrl + url;
  nprogress.start();
  return async dispatch => {
    try {
      const response = await axios.get(endpoint);

      const result = response.json();
      if (result) {
        nprogress.done();
        nprogress.remove();
        dispatch(done(result.data));
      }
    } catch (err) {
      dispatch(ErrorHandler(true));
    }
  };
};

//get data with bearer token
export const getDataWithToken = (url, done) => {
  const endpoint = baseUrl + url;
  console.log('Endpoint: ' + endpoint);
  const token = localStorage.getItem('jwtToken');
  const bearerToken = 'Bearer ' + token;
  console.log(bearerToken);
  nprogress.start();
  
  return dispatch => {
    fetch(endpoint, {
      method: 'GET',
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.data);
        if (data.status === 'success') {
          nprogress.done();
          nprogress.remove();
          dispatch(done(data.data));
        }
      })
      .catch(err => {
        console.log(err);
        // alert('Oopps!! An error occured, please try again.');
        nprogress.remove();
      });
  };
};

export const postData = (url, payload, done) => {
  const endpoint = baseUrl + url;
  console.log('Endpoint: ' + endpoint);
  console.log('Payload:' + JSON.stringify(payload));
  nprogress.start();
  return dispatch => {
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'same-origin',
      //mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        let data = res.json()
        console.log(data);
        return data
      })
      .then(data => {
        console.log(data.data)
        if (data.data) {
          nprogress.done();
          nprogress.remove();
          console.log(data.data);
          dispatch(done(data.data));
        } else if (data.error) {
          nprogress.remove();
          alert(data.error);
        }
      })
      .catch(err => {
        console.log(err);
        nprogress.remove();
      });
  };
};

export const postDataWithToken = (url, payload, done) => {
  const endpoint = baseUrl + url;
  console.log('Endpoint: ' + endpoint);
  console.log('Payload:' + JSON.stringify(payload));
  const token = localStorage.getItem('jwtToken');
  const bearerToken = 'Bearer ' + token;
  console.log(bearerToken);
  nprogress.start();
  return dispatch => {
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      }),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.data) {
          nprogress.done();
          nprogress.remove();
          dispatch(done(data.data));
        } else if (data.error) {
          nprogress.done();
          nprogress.remove();
          alert(`An error occured: ${data.error}`);
        }
      })
      .catch(err => {
        console.log(err);
        nprogress.remove();
        alert('Oopps!! An error occured, please try again.');
      });
  };
};

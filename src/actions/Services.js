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
        'Accept': 'application/json',
        Authorization: bearerToken,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          nprogress.done();
          nprogress.remove();
          dispatch(done(data.data));
          console.log(data.data);
        }
      })
      .catch(err => {
        console.log(err);
        nprogress.remove();
        alert('Oopps!! An error occurred, please try again.');
      });
  };
};

export const postData = (url, payload, done) => {
  const endpoint = baseUrl + url;
  console.log(endpoint);
  console.log(payload);
  nprogress.start();
  return dispatch => {
    fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.data) {
          nprogress.done();
          nprogress.remove();
          console.log(data);
          dispatch(done(data.data));
        } else if (data.error) {
          nprogress.done();
          nprogress.remove();
          console.log(data.error);
          alert(data.error);
        } else if (data.errors) {
          nprogress.done();
          nprogress.remove();
          console.log(data.errors);
          alert(Object.values(data.errors[0]));
        }
      })
      .catch(err => {
        nprogress.done();
        nprogress.remove();
        console.error();
        alert('Oopps!! An error occurred, please try again.');
        window.location.reload();
      });
  };
};

export const postDataWithToken = (url, payload, done) => {
  const endpoint = baseUrl + url;
  const token = localStorage.getItem('jwtToken');
  const bearerToken = 'Bearer ' + token;
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
        if (data.data) {
          nprogress.done();
          nprogress.remove();
          dispatch(done(data.data));
        } else if (data.error) {
          nprogress.done();
          nprogress.remove();
          alert(data.error);
          window.location.reload();
        }
      })
      .catch(err => {
        console.log(err);
        nprogress.done();
        nprogress.remove();
        alert(err);
      });
  };
};

export const patchDataWithToken = (url, payload, done) => {
  const endpoint = baseUrl + url;
  const token = localStorage.getItem('jwtToken');
  const bearerToken = 'Bearer ' + token;
  nprogress.start();
  return dispatch => {
    fetch(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(payload),
      credentials: 'same-origin',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: bearerToken,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          nprogress.done();
          nprogress.remove();
          dispatch(done(data.data));
          window.location.reload();
        } else if (data.error) {
          nprogress.done();
          nprogress.remove();
          alert(data.error);
        }
      })
      .catch(err => {
        console.log(err);
        nprogress.done();
        nprogress.remove();
        alert(err);
      });
  }; 
}
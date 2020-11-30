import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import { getAdminData } from '../../actions/admin/authAction/Users';
import { getAllAdmin } from 'apiConstants/apiConstants';

export default function Profile() {
  const dispatch = useDispatch();
  const adminData = useSelector(state => state.adminData);
  useEffect(() => {
    dispatch(getAdminData(getAllAdmin));
  }, []);
  console.log(adminData);

  if (!adminData.phoneNumber) {
    return <PageSpinner />;
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Profile', active: true }]}
    >
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '500px',
          border: '1px solid rgba(0,0,0,0.125)',
          borderRadius: '0.25rem',
          backgroundColor: '#fff',
          padding: '2rem',
        }}>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center', margin: '1rem' }}>
              <div style={{ width: '40%' }}><p style={{ marginBottom: '0', fontSize: '1rem' }}>Name:</p></div>
              <div style={{ width: '80%', textAlign: 'center' }}><h5>{adminData.fullName}</h5></div>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', margin: '1rem' }}>
              <div style={{ width: '40%' }}><p style={{ marginBottom: '0', fontSize: '1rem' }}>Email:</p></div>
              <div style={{ width: '80%', textAlign: 'center' }}><h5>{adminData.email}</h5></div>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', margin: '1rem' }}>
              <div style={{ width: '40%' }}><p style={{ marginBottom: '0', fontSize: '1rem' }}>Phone Number:</p></div>
              <div style={{ width: '80%', textAlign: 'center' }}><h5>{`0${adminData.phoneNumber}`}</h5></div>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', margin: '1rem' }}>
              <div style={{ width: '40%' }}><p style={{ marginBottom: '0', fontSize: '1rem' }}>Role:</p></div>
              <div style={{ width: '80%', textAlign: 'center', color: 'green' }}><h5>{adminData.role}</h5></div>
            </li>
          </ul>
        </div>
      </main>
    </Page>
  )
}
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from '../../components/Page';
import PageSpinner from '../../components/PageSpinner';
import { getAdminData } from '../../actions/admin/authAction/Users';
import { getAllAdmin } from '../../apiConstants/apiConstants';

export default function Profile() {
  const dispatch = useDispatch();
  const adminData = useSelector(state => state.adminData);
  useEffect(() => {
    dispatch(getAdminData(getAllAdmin));
  }, [dispatch]);

  if (!adminData.phoneNumber) {
    return <PageSpinner />;
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Profile', active: true }]}
    >
      <main className="profile-main">
        <div>
          <ul className="profile-ul">
            <li>
              <div>
                <p>Name:</p>
              </div>
              <div><h5>{adminData.fullName}</h5>
              </div>
            </li>
            <li>
              <div><p>Email:</p></div>
              <div><h5>{adminData.email}</h5>
              </div>
            </li>
            <li>
              <div><p>Phone Number:</p></div>
              <div><h5>{`0${adminData.phoneNumber}`}</h5></div>
            </li>
            <li>
              <div><p>Role:</p></div>
              <div><h5 style={{color:'green'}}>{adminData.role.charAt(0).toUpperCase() + adminData.role.slice(1)}</h5></div>
            </li>
          </ul>
        </div>
      </main>
    </Page>
  )
}
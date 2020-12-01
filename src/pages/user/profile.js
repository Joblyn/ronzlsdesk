import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import { getUserData } from 'apiConstants/apiConstants';
import { getUser } from '../../actions/user/Users';
import { useEffect } from 'react';

export default function Profile() {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData.data); 
  
  useEffect(() => {
    dispatch(getUser(getUserData));
  }, []);

  if (!userData.role) {
    return <PageSpinner />
  } 
  else {
    return (
      <Page
        title="Dropdowns"
        breadcrumbs={[{ name: 'Profile', active: true }]}
      >
        <main className="profile-main">
          <div>
            <ul className="profile-ul">
            <li>
                <div><p>Role:</p></div>
                <div className="green"><h5>{userData.role}</h5></div>
              </li>
              <li>
                <div><p>Account Status:</p></div>
                <div className="yellow"><h5>{userData.accountStatus}</h5></div>
              </li>
              <li>
                <div><p>Account Type:</p></div>
                <div><h5>{userData.accountType}</h5>
                </div>
              </li>
              <li>
                <div><p>Date Created:</p></div>
                <div><h5>{userData.created_dt}</h5></div>
              </li>
              <li>
                <div><p>Company Name:</p></div>
                <div><h5>{userData.companyName}</h5></div>
              </li>
              <li>
                <div><p>Company Reg NO.:</p></div>
                <div><h5>{userData.companyRegNo}</h5></div>
              </li>
              <li>
                <div><p>Company Begin:</p></div>
                <div><h5>{userData.companyBegin}</h5></div>
              </li>
              <li>
                <div><p>Company Address:</p></div>
                <div><h5>{userData.companyAddress}</h5></div>
              </li>
              <li>
                <div><p>City:</p></div>
                <div><h5>{userData.city}</h5></div>
              </li>
              <li>
                <div><p>Country:</p></div>
                <div><h5>{userData.country}</h5></div>
              </li>
              {userData.director && 
                <li>
                  <ul className="director-ul">
                    {userData.director.map((director, i) => (
                      <li key={'director' + (i + 1)}>
                        <p className="font-semibold">{`Director ${i + 1}`}</p>
                        <div className="director-div">
                          <div>
                            <p>Full Name</p>
                            <h5>{director.fullName}</h5>
                          </div>
                          <div>
                            <p>Date of Birth</p>
                            <h5>{director.dateOfBirth}</h5>
                          </div>
                        </div>
                      </li>
                    ))} 
                  </ul>
                </li>
              }
              <li>
                <div><p>Email:</p></div>
                <div><h5>{userData.email}</h5></div>
              </li>
              <li>
                <div><p>Insurance Number:</p></div>
                <div><h5>{userData.insuranceNumber}</h5></div>
              </li>
              <li>
                <div><p>Payee Ref No.:</p></div>
                <div><h5>{userData.payeeRefNo}</h5></div>
              </li>
              <li>
                <div><p>Phone Number:</p></div>
                <div><h5>{`0${userData.phoneNumber}`}</h5></div>
              </li>
              <li>
                <div><p>Postal Code:</p></div>
                <div><h5>{userData.postalCode}</h5></div>
              </li>
              <li>
                <div><p>UTR No.:</p></div>
                <div><h5>{userData.utrNo}</h5></div>
              </li>
              <li>
                <div><p>Vat Reg No.:</p></div>
                <div><h5>{userData.vatRegNo}</h5></div>
              </li>
              <li>
                <div><p>Vat Reg Date:</p></div>
                <div><h5>{userData.vatRegDate}</h5></div>
              </li>
              <li>
                <div><p>Vat Scheme:</p></div>
                <div><h5>{userData.vatScheme}</h5></div>
              </li>
              <li>
                <div><p>Vat Submit Type:</p></div>
                <div><h5>{userData.vatSubmitType}</h5></div>
              </li>
              <li>
                <div><p>website URL:</p></div>
                <div><h5>{userData.websiteUrl}</h5></div>
              </li>
            </ul>
          </div>
        </main>
      </Page>
    );
  }  
};  
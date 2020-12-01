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

  if (userData === {}) {
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
                <div className="green"><p>{userData.role}</p></div>
              </li>
              <li>
                <div><p>Account Status:</p></div>
                <div className="yellow"><p>{userData.accountStatus}</p></div>
              </li>
              <li>
                <div><p>Account Type:</p></div>
                <div><p>{userData.accountType}</p>
                </div>
              </li>
              <li>
                <div><p>Date Created:</p></div>
                <div><p>{userData.created_dt}</p></div>
              </li>
              <li>
                <div><p>Company Name:</p></div>
                <div><p>{userData.companyName}</p></div>
              </li>
              <li>
                <div><p>Company Reg NO.:</p></div>
                <div><p>{userData.companyRegNo}</p></div>
              </li>
              <li>
                <div><p>Company Begin:</p></div>
                <div><p>{userData.companyBegin}</p></div>
              </li>
              <li>
                <div><p>Company Address:</p></div>
                <div><p>{userData.companyAddress}</p></div>
              </li>
              <li>
                <div><p>City:</p></div>
                <div><p>{userData.city}</p></div>
              </li>
              <li>
                <div><p>Country:</p></div>
                <div><p>{userData.country}</p></div>
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
                            <p>{director.fullName}</p>
                          </div>
                          <div>
                            <p>Date of Birth</p>
                            <p>{director.dateOfBirth}</p>
                          </div>
                        </div>
                      </li>
                    ))} 
                  </ul>
                </li>
              }
              <li>
                <div><p>Email:</p></div>
                <div><p>{userData.email}</p></div>
              </li>
              <li>
                <div><p>Insurance Number:</p></div>
                <div><p>{userData.insuranceNumber}</p></div>
              </li>
              <li>
                <div><p>Payee Ref No.:</p></div>
                <div><p>{userData.payeeRefNo}</p></div>
              </li>
              <li>
                <div><p>Phone Number:</p></div>
                <div><p>{`0${userData.phoneNumber}`}</p></div>
              </li>
              <li>
                <div><p>Postal Code:</p></div>
                <div><p>{userData.postalCode}</p></div>
              </li>
              <li>
                <div><p>UTR No.:</p></div>
                <div><p>{userData.utrNo}</p></div>
              </li>
              <li>
                <div><p>Vat Reg No.:</p></div>
                <div><p>{userData.vatRegNo}</p></div>
              </li>
              <li>
                <div><p>Vat Reg Date:</p></div>
                <div><p>{userData.vatRegDate}</p></div>
              </li>
              <li>
                <div><p>Vat Scheme:</p></div>
                <div><p>{userData.vatScheme}</p></div>
              </li>
              <li>
                <div><p>Vat Submit Type:</p></div>
                <div><p>{userData.vatSubmitType}</p></div>
              </li>
              <li>
                <div><p>website URL:</p></div>
                <div><p>{userData.websiteUrl}</p></div>
              </li>
            </ul>
          </div>
        </main>
      </Page>
    );
  }  
};  
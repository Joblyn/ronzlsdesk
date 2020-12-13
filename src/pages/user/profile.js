import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import { getUserData } from 'apiConstants/apiConstants';
import { getUser } from '../../actions/user/Users';
import { useEffect } from 'react';
import { Button } from 'reactstrap';

export default function Profile() {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const userData = useSelector(state => state.userData.data);

  useEffect(() => {
    dispatch(getUser(getUserData));
  }, []);

  if (!userData.role) {
    return <PageSpinner />;
  } else {
    return (
      <Page title="Dropdowns" breadcrumbs={[{ name: 'Profile', active: true }]}>
        <Button onClick={() => setShowPopup(true)} className="mx-3 mb-3">
          View accout Officer
        </Button>
        {showPopup && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-center p-4 border-b border-solid border-gray-300 rounded-t">
                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: 'rgba(0,0,0,.7)' }}
                    >
                      Account Officer
                    </h3>
                  </div>
                  <div
                    className="relative p-0 flex-auto"
                    style={{ color: 'black', width: '500px' }}
                  >
                    <ul className="profile-ul">
                      <li className="border-0">
                        <div>
                          <p>Full Name:</p>
                        </div>
                        <div>
                          <p
                            className="mb-0"
                            style={{
                              fontSize: '1.1rem',
                            }}
                          >
                            {userData.accountOfficer.fullName}
                          </p>
                        </div>
                      </li>
                      <li className="border-0">
                        <div>
                          <p>Email:</p>
                        </div>
                        <div>
                          <p
                            className="mb-0"
                            style={{
                              fontSize: '1.1rem',
                            }}
                          >
                            {userData.accountOfficer.email}
                          </p>
                        </div>
                      </li>
                      <li className="border-0">
                        <div>
                          <p>Phone Number:</p>
                        </div>
                        <div>
                          <p
                            className="mb-0"
                            style={{
                              fontSize: '1.1rem',
                            }}
                          >
                            {userData.accountOfficer.phoneNumber}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: 'all .15s ease' }}
                      onClick={() => setShowPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}

        <main className="profile-main">
          <div>
            <ul className="profile-ul">
              <li>
                <div>
                  <p>Role:</p>
                </div>
                <div className="green">
                  <p>
                    {userData.role.charAt(0).toUpperCase() +
                      userData.role.slice(1)}
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>Account Status:</p>
                </div>
                <div className="yellow">
                  <p>{userData.accountStatus}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Account Type:</p>
                </div>
                <div>
                  <p>{userData.accountType}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Date Created:</p>
                </div>
                <div>
                  <p>{userData.created_dt}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Company Name:</p>
                </div>
                <div>
                  <p>{userData.companyName}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Company Reg NO.:</p>
                </div>
                <div>
                  <p>{userData.companyRegNo}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Company Begin:</p>
                </div>
                <div>
                  <p>{userData.companyBegin}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Company Address:</p>
                </div>
                <div>
                  <p>{userData.companyAddress}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>City:</p>
                </div>
                <div>
                  <p>{userData.city}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Country:</p>
                </div>
                <div>
                  <p>{userData.country}</p>
                </div>
              </li>
              {userData.director && (
                <li>
                  <ul className="director-ul">
                    {userData.director.map((director, i) => (
                      <li key={'director' + (i + 1)}>
                        <p className="font-semibold">{`Director ${i + 1}`}</p>
                        <div className="director-div">
                          <div>
                            <p>Full Name:</p>
                            <p>{director.fullName}</p>
                          </div>
                          <div>
                            <p>Date of Birth:</p>
                            <p>{director.dateOfBirth}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              <li>
                <div>
                  <p>Email:</p>
                </div>
                <div>
                  <p>{userData.email}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Insurance Number:</p>
                </div>
                <div>
                  <p>{userData.insuranceNumber}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Payee Ref No.:</p>
                </div>
                <div>
                  <p>{userData.payeeRefNo}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Phone Number:</p>
                </div>
                <div>
                  <p>{`0${userData.phoneNumber}`}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Postal Code:</p>
                </div>
                <div>
                  <p>{userData.postalCode}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>UTR No.:</p>
                </div>
                <div>
                  <p>{userData.utrNo}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Vat Reg No.:</p>
                </div>
                <div>
                  <p>{userData.vatRegNo}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Vat Reg Date:</p>
                </div>
                <div>
                  <p>{userData.vatRegDate}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Vat Scheme:</p>
                </div>
                <div>
                  <p>{userData.vatScheme}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>Vat Submit Type:</p>
                </div>
                <div>
                  <p>{userData.vatSubmitType}</p>
                </div>
              </li>
              <li>
                <div>
                  <p>website URL:</p>
                </div>
                <div>
                  <p>{userData.websiteUrl}</p>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </Page>
    );
  }
}

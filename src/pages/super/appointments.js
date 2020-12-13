import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '../../actions/admin/clients/Clients';


import { getClientAppointments } from '../../apiConstants/apiConstants';

export default function Appointments (){
  const dispatch = useDispatch(); 
  const adminGetAppointments = useSelector(state => state.adminGetAppointments);

  useEffect(() => {
    dispatch(getAppointments(getClientAppointments))
  }, []);

  useEffect(() => {
    if (adminGetAppointments.isSuccessful) {
      console.log(adminGetAppointments.appointments)
    }
  }, [adminGetAppointments]);

  console.log(adminGetAppointments);
  
  return (
    <>
    </>
  )
}
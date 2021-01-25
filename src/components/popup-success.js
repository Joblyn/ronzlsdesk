import React from 'react';
import { logOutAction } from '../actions/user/Users';

export default function PopupSuccess({
  button,
  majorText,
  text,
  redirect,
  setShow
}) {
  const onClick = () => {
    if(redirect) {
      logOutAction();
      window.location.pathname = redirect;
    } else {
      setShow(false);
    }

  }
  return (
    <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-5 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-center px-4 py-2 border-solid border-gray-300 rounded-t mt-4">
                  <h3
                    className="text-2xl font-semibold text-center"
                    style={{ color: '#48bb78' }}
                  >
                    {majorText}
                  </h3>
                </div>
                <div
                  className="relative flex-auto text-center px-4"
                  style={{ color: 'black'}}
                >
                  <p className="m-0">{text}</p>
                </div>
                <div className="flex items-center justify-end p-6 border-solid border-gray-300 rounded-b">
                  {button && <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 assign"
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                    onClick={onClick}
                  >
                    Okay
                  </button>}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
  )
}
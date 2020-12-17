import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ExcelTable = ({ exportData, exportRow, fileName, exportHead, id }) => {
  if (!exportData) {
    return <div></div>;
  }
  return (
    <div>
      <div className="hidden">
        <table id={id} className="table">
          <thead>
            <tr>
              {/* <th rowSpan="2" colSpan="20" className="text-center text-lg">
                {exportHead}
              </th> */}
              <th rowSpan="2">ID</th>
              <th rowSpan="2">Company Name</th>
              <th colSpan="2">Director</th>
              <th rowSpan="2">Company Begin</th>
              <th rowSpan="2">Company Address</th>
              <th rowSpan="2">City</th>
              <th rowSpan="2">Country</th>
              <th rowSpan="2">Company Reg No.</th>
              <th rowSpan="2">email</th>
              <th rowSpan="2">Phone Number</th>
              <th rowSpan="2">Website</th>
              <th rowSpan="2">Insurance Number</th>
              <th rowSpan="2">Payee Ref No.</th>
              <th rowSpan="2">Postal Code</th>
              <th rowSpan="2">UTR No.</th>
              <th rowSpan="2">VAT Reg. Date</th>
              <th rowSpan="2">VAT Reg. No.</th>
              <th rowSpan="2">VAT Scheme</th>
              <th rowSpan="2">VAT Submit Type</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>Date of Birth</td>
            </tr>
          </thead>
          <tbody>
            {exportData.map((p, index) => {
              return (
                <tr key={index}>
                  {/* <td></td> */}
                  <td>{index + 1}</td>
                  <td>{p.companyName}</td>
                  <td>{p.director[0].fullName}</td>
                  <td>{p.director.dateOfBirth}</td>
                  <td>{p.companyBegin}</td>
                  <td>{p.companyAddress}</td>
                  <td>{p.city}</td>
                  <td>{p.country}</td>
                  <td>{p.companyRegNo}</td>
                  <td>{p.email}</td>
                  <td>{p.phoneNumber}</td>
                  <td>{p.websiteUrl}</td>
                  <td>{p.insuranceNumber}</td>
                  <td>{p.payeeRefNo}</td>
                  <td>{p.postalCode}</td>
                  <td>{p.utrNo}</td>
                  <td>{p.vatRegDate}</td>
                  <td>{p.vatRegNo}</td>
                  <td>{p.vatScheme}</td>
                  <td>{p.vatSubmitType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ReactHTMLTableToExcel
        className="border-0 btn-outline-success p-2"
        table={id}
        filename={fileName}
        sheet="sheet 1"
        buttonText="EXPORT CLIENTS"
      />
    </div>
  );
};

export default ExcelTable;

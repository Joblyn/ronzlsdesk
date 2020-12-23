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
              {/* <th rowSpan="1">ID</th> */}
              <th rowSpan="1">Company Name</th>
              <th rowSpan="1">Director Name</th>
              <th rowSpan="1">Director DOB</th>
              <th rowSpan="1">Company Begin</th>
              <th rowSpan="1">Company Address</th>
              <th rowSpan="1">City</th>
              <th rowSpan="1">Country</th>
              <th rowSpan="1">Company Reg No.</th>
              <th rowSpan="1">email</th>
              <th rowSpan="1">Phone Number</th>
              <th rowSpan="1">Website</th>
              <th rowSpan="1">Insurance Number</th>
              <th rowSpan="1">Payee Ref No.</th>
              <th rowSpan="1">Postal Code</th>
              <th rowSpan="1">UTR No.</th>
              <th rowSpan="1">VAT Reg. Date</th>
              <th rowSpan="1">VAT Reg. No.</th>
              <th rowSpan="1">VAT Scheme</th>
              <th rowSpan="1">VAT Submit Type</th>
            </tr>
          </thead>
          <tbody>
            {exportData.map((p, index) => {
              return (
                <tr key={index}>
                  {/* <td></td> */}
                  {/* <td>{index + 1}</td> */}
                  <td>{p.companyName}</td>
                  <td>{p.director[0].fullName}</td>
                  <td>{p.director[0].dateOfBirth}</td>
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

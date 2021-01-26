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
              <th rowSpan="2">ID</th>
              <th rowSpan="2">CompanyName</th>
              <th colSpan="2">Director</th>
              <th rowSpan="2">CompanyBegin</th>
              <th rowSpan="2">CompanyAddress</th>
              <th rowSpan="2">City</th>
              <th rowSpan="2">Country</th>
              <th rowSpan="2">CompanyRegNo</th>
              <th rowSpan="2">email</th>
              <th rowSpan="2">PhoneNumber</th>
              <th rowSpan="2">Website</th>
              <th rowSpan="2">InsuranceNumber</th>
              <th rowSpan="2">PayeeRefNo</th>
              <th rowSpan="2">PostalCode</th>
              <th rowSpan="2">UTRNo</th>
              <th rowSpan="2">VATRegDate</th>
              <th rowSpan="2">VATRegNo</th>
              <th rowSpan="2">VATScheme</th>
              <th rowSpan="2">VATSubmitType</th>
              <th rowSpan="2">accountType</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>DateofBirth</td>
            </tr>
          </thead>
          <tbody>
            {exportData.map((p, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
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
                  <td>{p.accountType}</td>
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

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
              {/* <th>{exportHead}</th> */}
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <ReactHTMLTableToExcel
        className="border-0 btn-outline-success p-2"
        table={id}
        filename={fileName}
        sheet="sheet 1"
        buttonText="EXPORT TEMPLATE"
      />
    </div>
  );
};

export default ExcelTable;

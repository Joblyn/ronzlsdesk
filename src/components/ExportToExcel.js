import React from 'react';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ExcelTable = ({ exportData, exportRow, fileName, exportHead, id }) => {
  if (!exportData) {
    return <div></div>;
  }
  return (
    <div>
      <div className="hidden">
        <table id={id} class="table">
          <thead>
            <tr>
              {/* <th>{exportHead}</th> */}
              <th>ID</th>
              <th>Director</th>
              <th>Company Name</th>
              <th>Company Address</th>
              <th>City</th>
              <th>Phone Number</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {exportData.map((p, index) => {
              return (
                <tr key={index}>
                  <td>{p._Id}</td>
                  <td>{p.director}</td>
                  <td>{p.companyName}</td>
                  <td>{p.companyAddress}</td>
                  <td>{p.city}</td>
                  <td>{p.phoneNumber}</td>
                  <td>{p.websiteUrl}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExcelTable;

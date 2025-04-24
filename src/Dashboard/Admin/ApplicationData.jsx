import React from 'react';
import { useQuery } from '@tanstack/react-query';
import UseAxiosSecuire from '../../Hooks/UseAxiosSecuire';
import * as XLSX from 'xlsx';

function ApplicationData() {
  const axiosSecure = UseAxiosSecuire();

  const { data: applications = [] } = useQuery({
    queryKey: ['applications'],
    queryFn: async () => {
      const res = await axiosSecure.get('/applications');
      console.log(res?.data)
      return res.data;
    },
  });

  // Function to export data to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(applications);  // Convert data to sheet
    const wb = XLSX.utils.book_new();  // Create a new Excel workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Applications');  // Append the sheet to workbook

    // Write Excel file
    XLSX.writeFile(wb, 'applications_data.xlsx');
  };

  return (
    <div className="p-4">
      {/* Export Button */}
      <button
        onClick={exportToExcel}
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Export to Excel
      </button>

      {/* Table for displaying application data */}
      <table className="min-w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Mobile</th>
            <th className="border p-2">Date of Birth</th>
            <th className="border p-2">Father's Name</th>
            <th className="border p-2">Mother's Name</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Marital Status</th>
            <th className="border p-2">CV</th> {/* Column for CV */}
            <th className="border p-2">Image</th> {/* Column for Image */}
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application._id}>
              <td className="border p-2">{application.name}</td>
              <td className="border p-2">{application.email}</td>
              <td className="border p-2">{application.mobile}</td>
              <td className="border p-2">{application.dob}</td>
              <td className="border p-2">{application.fatherName}</td>
              <td className="border p-2">{application.motherName}</td>
              <td className="border p-2">{application.gender}</td>
              <td className="border p-2">{application.maritalStatus}</td>
              {/* Displaying CV Link */}
              <td className="border p-2">
                <a href={application.cvUrl} target="_blank" rel="noopener noreferrer">
                  View CV
                </a>
              </td>
              {/* Displaying Image */}
              <td className="border p-2">
                <img
                  src={application.photo} 
                  alt="Applicant"
                  className="w-16 h-16 rounded-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationData;

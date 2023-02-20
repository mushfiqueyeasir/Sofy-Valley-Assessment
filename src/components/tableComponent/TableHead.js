import React from "react";

const TableHead = () => {
  return (
    <thead className="bg-gray-100">
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Lead Name</th>
        <th>Phone</th>
        <th>Followup Date</th>
        <th>Last Note</th>
        <th>Email</th>
        <th>Preferred Countries</th>
        <th>Status</th>
        <th>Source</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHead;

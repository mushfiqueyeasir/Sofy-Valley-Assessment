import React from "react";

const TableElement = ({ item, even }) => {
  const color = `text-[${item.lead_status.color}]`;
  return (
    <tr className={even && "bg-gray-100"}>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td>{item.followup_date ? item.followup_date : "-"}</td>
      <td>
        {item.lead_notes.length > 0
          ? item.lead_notes.map((item, index) => (
              <h2 key={index}>{item.name}</h2>
            ))
          : "-"}
      </td>
      <td>{item.email}</td>
      <td>
        {item.lead_preferred_countries.length > 0
          ? item.lead_preferred_countries.map((item, index) => (
              <h2 key={index}>{item.name}</h2>
            ))
          : "-"}
      </td>
      <td className={`${color}`}>{item.lead_status.name}</td>
      <td>{item.source.name}</td>
      <td></td>
    </tr>
  );
};

export default TableElement;

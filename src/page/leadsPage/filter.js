import React from "react";
import { tempLeads } from "./filterAndReset";

const Filter = ({ page, pageSize, body, handleFilterLeads }) => {
  const resetBody = {
    search: "",
    lead_status_id: [],
    source_id: [],
    user_id: [],
    contacted_date_from: "",
    contacted_date_to: "",
  };

  const handleFilter = () => {
    tempLeads(body, page, pageSize, handleFilterLeads);
  };
  const handleReset = () => {
    tempLeads(resetBody, page, pageSize, handleFilterLeads);
  };
  return (
    <div className="flex gap-4">
      <button
        onClick={handleFilter}
        className="btn rounded-none bg-[#3F4F86] px-10"
      >
        Filter
      </button>
      <button
        onClick={handleReset}
        className="btn rounded-none btn-outline px-10"
      >
        Reset Filter
      </button>
    </div>
  );
};

export default Filter;

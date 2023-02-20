import React from "react";

const SelectDropDown = ({ name, user, data, handle }) => {
  return (
    <select
      onChange={handle}
      className="select rounded-none select-bordered w-full max-w-xs"
    >
      <option disabled selected>
        {name}
      </option>
      {data.map((item, index) => (
        <option key={index} value={user ? item.user_id : item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SelectDropDown;

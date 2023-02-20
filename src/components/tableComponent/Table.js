import React from "react";

import { tableBodyStyle } from "./styledClass";
import TableElement from "./TableElement";
import TableHead from "./TableHead";

const Table = ({ data }) => {
  return (
    <table className={tableBodyStyle}>
      <TableHead />

      <tbody>
        {data.length > 0 &&
          data.map((item, index) => (
            <TableElement key={index} item={item} even={index % 2 === 1} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;

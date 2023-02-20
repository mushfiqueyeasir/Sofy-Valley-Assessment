import { getToken } from "../../utility/Constant";

export const tempLeads = async (body, page, pageSize, handleFilterLeads) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(body),
  };

  const api = `lead/list?page=${page}&limit=${pageSize}`;

  const url = `${process.env.REACT_APP_API_URL}/${api}`;

  fetch(url, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      handleFilterLeads(data.data.data);
    });
};

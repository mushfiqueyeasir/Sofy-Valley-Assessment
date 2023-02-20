import { useEffect, useState } from "react";
import { getToken } from "../utility/Constant";
const useFetch = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
  };

  const url = `${process.env.REACT_APP_API_URL}/${api}`;

  useEffect(() => {
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      });
  }, []);
  return [data, loading];
};

export default useFetch;

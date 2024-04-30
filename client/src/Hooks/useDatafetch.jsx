import React, { useState } from "react";

const useDatafetch = () => {
  const [loading, setLoading] = useState(false);
  const fetchData = async (token) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/fetch", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      setLoading(false);
    }
  };
  return { fetchData, loading };
};

export default useDatafetch;

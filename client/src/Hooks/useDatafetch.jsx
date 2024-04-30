import React, { useState } from "react";

const useDatafetch = () => {
  const [loading, setLoading] = useState(false);
  const fetchData = async (token) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://technifyassesment-backend.onrender.com/api/fetch",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
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

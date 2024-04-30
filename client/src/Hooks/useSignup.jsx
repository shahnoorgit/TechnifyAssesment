import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthProvider";

const useSignup = () => {
  const { setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const signup = async ({ username, password, email }) => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
        throw new Error(data.error);
      }
      setAuth(data);
      localStorage.setItem("Track", JSON.stringify(data));
      toast.success(" user signed up successfully");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import useDatafetch from "../Hooks/useDatafetch";

const Dashboard = () => {
  const { Auth } = useContext(AuthContext);
  const { fetchData, loading } = useDatafetch();
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetchData(Auth?.token).then((data) => setTodo(data));
  }, []);
  return (
    <>
      <Navbar />
      <div className=" mt-20 flex justify-start flex-col gap-3">
        <h1 className=" ml-5 text-xl font-bold">Hi {Auth?.username}</h1>
        <h2 className=" ml-5 text-xl font-bold">See all your Todos below</h2>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className=" flex max-sm:flex-col p-5 gap-5 flex-wrap">
          {todo.map((todo) => (
            <Card key={todo.id} todo={todo} />
          ))}{" "}
        </div>
      )}
    </>
  );
};

export default Dashboard;

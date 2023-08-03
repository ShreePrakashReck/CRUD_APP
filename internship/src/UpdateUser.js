import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [inputUser, setInputUser] = useState({
    status: "",
  });

  const { id } = useParams();
  // data fetching single
  const fetchSingleUser = async () => {
    const res = await axios.get(`http://localhost:4000/api/v1/read/${id}`);
    console.log("Updated data is : ", res);
    setInputUser({
      password: res.data.status,
    });
  };
  useEffect(() => {
    fetchSingleUser();
  }, []);

  const handleChnage = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputUser);
    const res = await axios.put(
      `http://localhost:4000/api/v1/updatetask/${id}`,
      inputUser
    );
    console.log(res);
    if (res.status === 200) {
      window.location = "/";
    }
    // fetchAllUser();
  };
  return (
    <div className="w-2/3 mx-auto mt-5">
      <form onSubmit={handleSubmit}>
        <h1>Update Task</h1>
        <div className="">
          <label className=" text-sm text-gray-500 ">Status</label>
          <input
            type="text"
            name="status"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter Status"
            required
            value={inputUser.status}
            onChange={handleChnage}
          />
        </div>

        <div className="flex justify-center my-4">
          <button type="submit" className="px-4 py-2 bg-yellow-400 rounded-sm">
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;

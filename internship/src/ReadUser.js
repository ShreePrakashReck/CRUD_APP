import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadUser = () => {
  const { id } = useParams();
  // data fetching all
  const [data, setData] = useState();
  const fetchSingleUser = async () => {
    const res = await axios.get(`http://localhost:4000/api/v1/read/${id}`);
    console.log("All particular data : ", res);
    console.log("All data : ", res.data.data.title);
    setData(res);
  };
  useEffect(() => {
    fetchSingleUser();
  }, []);
  return (
    <div className="w-2/3 mx-auto mt-5">
      <div className="relative overflow-x-auto shadow-md">
        <table className="w-full text-lg text-center text-gray-500 ">
          <thead className="text-[17px] text-gray-700 uppercase bg-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">
                SN.
              </th>
              <th scope="col" className="px-6 py-3">
                title
              </th>
              <th scope="col" className="px-6 py-3">
                Descriptions
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {data?.data?.data?.title}
              </th>
              <td className="px-6 py-4"> {data?.data?.data?.descriptions}</td>
              <td className="px-6 py-4">{data?.data?.data?.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReadUser;

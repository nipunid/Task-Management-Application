import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const response = await axios.get("http://localhost:8005/apis/tasks");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  const onDeleteUser = async (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that user record")
    ) {
      const response = await axios.delete(
        `http://localhost:8005/apis/task/${id}`
      );
      if (response.status === 200) {
        toast.success(response.data);
        getTasks();
      }
    }
  };
  console.log("data=>", data);

  return (
    <div style={{ marginTop: "50px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Title</th>
            <th style={{ textAlign: "center" }}>Description</th>
            <th style={{ textAlign: "center" }}>Duedate</th>
            <th style={{ textAlign: "center" }}>Asignee</th>
            <th style={{ textAlign: "center" }}>CurrentState</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.duedate}</td>
                  <td>{item.asignee}</td>
                  <td>{item.currentstate}</td>
                  <td>
                    <th scope="row">{index + 1}</th>
                    <Link to={`/update/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <Link to={`/delete/${item.id}`}>
                      <button
                        className="btn btn-delete"
                        onClick={() => onDeleteUser(item.id)}
                      >
                        Delete
                      </button>
                    </Link>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

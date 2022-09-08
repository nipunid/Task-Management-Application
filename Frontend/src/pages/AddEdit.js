import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  description: "",
  duedate: "",
  asignee: "",
  currentstate: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { title, description, duedate, currentstate, asignee } = initialState;

  const navigate = useNavigate();
  const addContact = async (data) => {
    const response = await axios.post("http://localhost:8005/apis/task", data);
    if (response.status === 200) {
      toast.success(response.data);
  }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !description|| !duedate || !currentstate || !asignee) {
      toast.error("Please provide value into each input field")
    }else {
      addContact(state);
      navigate.push("/");
    }
    
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Title</label>
        <input
          type="text"
          id="name"
          name="title"
          placeholder="Enter Title..."
          onChange={handleInputChange}
          value={title}
        />

        <label htmlFor="name">Description</label>
        <input
          type="text"
          id="name"
          name="description"
          placeholder="Enter Description..."
          onChange={handleInputChange}
          value={description}
        />

        <label htmlFor="name">DueDate</label>
        <input
          type="text"
          id="date"
          name="duedate"
          placeholder="Enter the Edit Date..."
          onChange={handleInputChange}
          value={duedate}
        />

        <label htmlFor="name">Asignee</label>
        <input
          type="text"
          id="name"
          name="asignee"
          placeholder="Enter new asignee..."
          onChange={handleInputChange}
          value={asignee}
        />
        <label htmlFor="name">CurrentState</label>
        <input
          type="text"
          id="name"
          name="currentstate"
          placeholder="Enter new currentstate..."
          onChange={handleInputChange}
          value={currentstate}
        />
      <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddEdit;

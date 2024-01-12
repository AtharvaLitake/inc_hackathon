import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styling/Register.css";
import QR from "../Assets/payment_image.jpg";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    team_name: "",
    problem_id: "1001",
    college: "",
    place: "",
    leader_name: "",
    email: "",
    mobile: "",
    utr: "",
  });

  function handleChange(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
     
      toast.error("Invalid email format");
      return
    }
    const mobileRegex = /^\d{10}$/;

    if (!mobileRegex.test(data.mobile)) {
      toast.error("Invalid mobile number format");
      return;
    }
    
  
    try {
      const formData = {
        team_name: data.team_name,
        problem_id: data.problem_id,
        college: data.college,
        place: data.place,
        leader_name: data.leader_name,
        email: data.email,
        mobile: Number(data.mobile),
        utr: data.utr,
      };
      const response = await fetch("http://3.109.200.3:8000/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      await response.json();
      console.log(response)
      if (response.status === 401) {
        toast.error("Email/Phone already registered with us");
      } 
      else if(response.status===402)
      {
        toast.error("Team Name Already Registered");
      }
      else {
        navigate("/success");
      }
    } catch (er) {
      console.log(er);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="main_register">
        <h1>Register Now</h1>
        <div className="register_form">
          <div className="form_div1">
            <label htmlFor="team_name">Team Name</label>
            <br />
            <input
              type="text"
              required
              name="team_name"
              value={data.team_name}
              autoComplete="off"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="problem_id">Problem Statement ID</label>
            <select
              id="problem"
              name="problem_id"
              value={data.problem_id}
              onChange={handleChange}
            >
              <option value="1001">1001</option>
              <option value="1002">1002</option>
              <option value="1003">1003</option>
              <option value="1004">1004</option>
            </select>
            <br />
            <label htmlFor="leader_name">Name of Leader</label>
            <br />
            <input
              type="text"
              required
              name="leader_name"
              value={data.leader_name}
              autoComplete="off"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="email">Email Id</label>
            <br />
            <input
              type="email"
              required
              name="email"
              value={data.email}
              autoComplete="off"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="mobile">Mobile Number</label>
            <br />
            <input
              type="text"
              required
              name="mobile"
              value={data.mobile}
              autoComplete="off"
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="form_div1">
            <label htmlFor="college">College Name</label>
            <br />
            <input
              type="text"
              required
              name="college"
              value={data.college}
              autoComplete="off"
              onChange={handleChange}
            />
            <br />
            <label htmlFor="place">College Location</label>
            <br />
            <input
              type="text"
              required
              name="place"
              value={data.place}
              autoComplete="off"
              onChange={handleChange}
            />
            <br />
            <div className="payment_image">
              <img src={QR} alt="" />
            </div>
            <label htmlFor="utr">Bank Transaction Id</label>
            <br />
            <input
              type="text"
              required
              name="utr"
              value={data.utr}
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="form_div1">
            <div className="checkbox-style">
              <input type="checkbox" required />
            </div>
            <label>I have read all the instructions</label>
          </div>
          <div className="form_div1">
            <div className="button_form_div">
              <button type="submit">
                Submit <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default Register;

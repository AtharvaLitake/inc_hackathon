import React from "react";
import "../Styling/Register.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [data, setData] = useState({
    team_name: "",
    problem_id: "",
    college: "",
    name1: "",
    name2: "",
    name3: "",
    name5: "",
    name6: "",
    name4: "",
    email1: "",
    email2: "",
    email3: "",
    email4: "",
    email5: "",
    email6: "",
    mobile1: "",
    mobile2: "",
    mobile4: "",
    mobile3: "",
    mobile5: "",
    mobile6: "",
  });
  function handleChange(e) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    var studentsA = [];
    if (data.name1 && data.email1 && data.mobile1) {
      studentsA.push({
        name: data.name1,
        email: data.email1,
        mobile: Number(data.mobile1),
      });
    }
    if (data.name2 && data.email2 && data.mobile2) {
      studentsA.push({
        name: data.name2,
        email: data.email2,
        mobile: Number(data.mobile2),
      });
    }
    if (data.name3 && data.email3 && data.mobile3) {
      studentsA.push({
        name: data.name3,
        email: data.email3,
        mobile: Number(data.mobile3),
      });
    }
    if (data.name4 && data.email4 && data.mobile4) {
      studentsA.push({
        name: data.name4,
        email: data.email4,
        mobile: Number(data.mobile4),
      });
    }
    if (data.name5 && data.email5 && data.mobile5) {
      studentsA.push({
        name: data.name5,
        email: data.email5,
        mobile: Number(data.mobile5),
      });
    }
    if (data.name6 && data.email6 && data.mobile6) {
      studentsA.push({
        name: data.name6,
        email: data.email6,
        mobile: Number(data.mobile6),
      });
    }
    console.log(data.problem_id);
    try {
      const DataForm = {
        team_name: data.team_name,
        college: data.college,
        problem_id: data.problem_id,
        students: studentsA,
      };
      const response = await fetch("http://localhost:8080/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DataForm),
      });
      await response.json();
      if (response.status == 401) {
        toast.error("Email/Phone already registerd with us");
      } else {
        toast.success("Registeration Successful", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            background: "#ebe718",
            color: "black",
            fontWeight: "400",
            fontSize: "18px",
          },
        });
      }
    } catch (e) {}
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="register">
        <h1>Register Now</h1>
        <div className="registeration_form">
          <div className="college_ps">
            <div className="details">
              <input
                type="text"
                placeholder="Team Name"
                name="team_name"
                onChange={handleChange}
                value={data.team_name}
              />
            </div>
            <div className="details">
              <input
                type="text"
                placeholder="College Name"
                name="college"
                value={data.college}
                onChange={handleChange}
              />
            </div>
            <div className="details">
              <select
                id="dropdown"
                name="problem_id"
                value={data.problem_id}
                onChange={handleChange}
              >
                <option value="pid" disabled selected>
                  Problem ID
                </option>
                <option value="option1">1001</option>
                <option value="option2">1002</option>
                <option value="option3">1003</option>
              </select>
            </div>
          </div>
          <div className="member_details">
            <div className="members">
              <h1>Member 1</h1>
              <div className="details">
                <input
                  type="text"
                  placeholder="Leader's Name"
                  name="name1"
                  value={data.name1}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="email"
                  placeholder="Email-Id"
                  name="email1"
                  value={data.email1}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="number"
                  placeholder="Mobile No"
                  name="mobile1"
                  value={data.mobile1}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="members">
              <h1>Member 2</h1>
              <div className="details">
                <input
                  type="text"
                  placeholder="Member Name"
                  name="name2"
                  value={data.name2}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="email"
                  placeholder="Email-Id"
                  name="email2"
                  value={data.email2}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="number"
                  placeholder="Mobile No"
                  name="mobile2"
                  value={data.mobile2}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="members">
              <h1>Member 3</h1>
              <div className="details">
                <input
                  type="text"
                  placeholder="Member Name"
                  name="name3"
                  value={data.name3}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="email"
                  placeholder="Email-Id"
                  name="email3"
                  value={data.email3}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="number"
                  placeholder="Mobile No"
                  name="mobile3"
                  value={data.mobile3}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="members">
              <h1>Member 4</h1>
              <div className="details">
                <input
                  type="text"
                  placeholder="Member Name"
                  name="name4"
                  value={data.name4}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="email"
                  placeholder="Email-Id"
                  name="email4"
                  value={data.email4}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="number"
                  placeholder="Mobile No"
                  name="mobile4"
                  value={data.mobile4}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="members">
              <h1>Member 5</h1>
              <div className="details">
                <input
                  type="text"
                  placeholder="Member Name"
                  name="name5"
                  value={data.name5}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="email"
                  placeholder="Email-Id"
                  name="email5"
                  value={data.email5}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="number"
                  placeholder="Mobile No"
                  name="mobile5"
                  value={data.mobile5}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="members">
              <h1>Member 6</h1>
              <div className="details">
                <input
                  type="text"
                  placeholder="Member Name"
                  name="name6"
                  value={data.name6}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="email"
                  placeholder="Email-Id"
                  name="email6"
                  value={data.email6}
                  onChange={handleChange}
                />
              </div>
              <div className="details">
                <input
                  type="number"
                  placeholder="Mobile No"
                  name="mobile6"
                  value={data.mobile6}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="submit_button">
            <button>
              Submit &nbsp;<i class="fa-solid fa-check"></i>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </form>
  );
};

export default Register;

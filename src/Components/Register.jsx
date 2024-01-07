import React from "react";
import "../Styling/Register.css";
const Register = () => {
  return (
    <div className="register">
      <h1>Register Now</h1>
      <div className="registeration_form">
        <div className="college_ps">
          <div className="details">
            <input type="text" placeholder="Team Name" />
          </div>
          <div className="details">
            <input type="text" placeholder="College Name" />
          </div>
          <div className="details">
            <select id="dropdown" name="category">
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
              <input type="text" placeholder="Leader's Name" />
            </div>
            <div className="details">
              <input type="email" placeholder="Email-Id"/>
            </div>
            <div className="details">
              <input type="number" placeholder="Mobile No"/>
            </div>
          </div>
          <div className="members">
          <h1>Member 2</h1>
            <div className="details">
              <input type="text" placeholder="Member Name"/>
            </div>
            <div className="details">
              <input type="email" placeholder="Email-Id" />
            </div>
            <div className="details">
              <input type="number" placeholder="Mobile No" />
            </div>
          </div>
          <div className="members">
          <h1>Member 3</h1>
            <div className="details">
              <input type="text" placeholder="Member Name"/>
            </div>
            <div className="details">
              <input type="email"  placeholder="Email-Id"/>
            </div>
            <div className="details">
              <input type="number" placeholder="Mobile No"/>
            </div>
          </div>
          <div className="members">
          <h1>Member 4</h1>
            <div className="details">
              <input type="text" placeholder="Member Name"/>
            </div>
            <div className="details">
              <input type="email"  placeholder="Email-Id" />
            </div>
            <div className="details">
              <input type="number" placeholder="Mobile No" />
            </div>
          </div>
          <div className="members">
          <h1>Member 5</h1>
            <div className="details">
              <input type="text" placeholder="Member Name"/>
            </div>
            <div className="details">
              <input type="email"  placeholder="Email-Id"/>
            </div>
            <div className="details">
              <input type="number" placeholder="Mobile No" />
            </div>
          </div>
          <div className="members">
          <h1>Member 6</h1>
            <div className="details">
              <input type="text" placeholder="Member Name"/>
            </div>
            <div className="details">
              <input type="email" placeholder="Email-Id"/>
            </div>
            <div className="details">
              <input type="number"placeholder="Mobile No" />
            </div>
          </div>
        </div>
        <div className="submit_button">
          <button>Submit &nbsp;<i class="fa-solid fa-check"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Register;

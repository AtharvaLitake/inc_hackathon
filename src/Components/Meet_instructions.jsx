import React from "react";
import "../Styling/Rules.css";
const Meet_instructions = () => {
  return (
    <div className="rules">
      <h1>Instructions</h1>
      <div className="rule">
        <ul>
          <li>
            An online meeting is scheduled on 16th February at 11:00 am for all
            team leaders
          </li>
          <li>Only team leaders should join 5 mins earlier</li>
          <li>
            All the instructions will be given in the meeting regarding the
            hackathon and evaluation process.
          </li>
          <li> Meeting is compulsory for all team leader , be on time</li>
          <li>Meeting Link is already circulated on whatsapp group.</li>
        </ul>
      </div>
      <div className="rule">
        <h2>EVALUATION CRITERIA</h2>
        <ul>
          <li>Novelty of the idea to address the problem</li>
          <li>Approach to Explore Idea</li>
          <li>Feasibility & Complexity</li>
          <li>Approach towards implementing the System and Future Use cases</li>
          <li>Clarity & details in the presentation as a team and Q & A</li>
        </ul>
      </div>
    </div>
  );
};

export default Meet_instructions;

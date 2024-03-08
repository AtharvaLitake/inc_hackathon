import React from "react";
import "../Styling/Timeline.css";

const timelineData = [
  {
    date: "Till 19th Feb 2024",
    title: "Problem Statement Submission",
    content:
      "Team Leader's are expected to submit their idea on portal in form of ppt",
  },
  {
    date: "23rd Feb - 29th Feb 2024",
    title: "Online Evaluation",
    content:
      "Online presentation round will be conducted during this span of time",
  },
  {
    date: "29th March - 30th March 2024",
    title: "Grand Finale",
    content:
      "All shortlisted teams will then compete in Grand Finale to win amazing prizes",
  },
];

const Timeline = () => {
  return (
    <div className="time_section">
      <h3>TIMELINE OF HACKATHON</h3>
      <div className="time_container">
        <div className="timeline">
          <ul>
            {timelineData.map((item, index) => (
              <li key={index}>
                <div className="timeline-content">
                  <h2 className="date">{item.date}</h2>
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

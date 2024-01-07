import React from "react";
import "../Styling/Timeline.css";

const timelineData = [
  {
    date: "10th Feb 2024",
    title: "Problem Statement Submission",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
  },
  {
    date: "23rd Feb - 29th Feb 2024",
    title: "Online Evaluation",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
  },
  {
    date: "15th March - 17th March 2024",
    title: "Grand Finale",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
  },
];

const Timeline = () => {
  return (
    <div className="time_section">
      <h3>TIMELINES OF HACKATHON</h3>
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

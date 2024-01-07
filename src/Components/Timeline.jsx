import React from "react";
import "../Styling/Timeline.css";

const timelineData = [
  {
    date: "2nd April, 2023",
    title: "item 1",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, vero."
  },
  {
    date: "2nd April, 2023",
    title: "item 2",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, vero."
  },
  {
    date: "2nd April, 2023",
    title: "item 3",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, vero."
  },
  {
    date: "2nd April, 2023",
    title: "item 4",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, vero."
  }
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

import React from "react";
import "../Styling/Problem.css";

const problemStatements = [
  {
    id: 1001,
    statement:
      "Most of the Countries collect information/ maintain inventory on the Chemical and Petrochemical sector for monitoring and policy making to improve this sector. There is standard practice for data collection for those countries who are the member of the United Nations Statistical Commission (UNSC) and other countries. ",
    category: "AGRICULTURE",
  },
  {
    id: 1001,
    statement:
      "Most of the Countries collect information/ maintain inventory on the Chemical and Petrochemical sector for monitoring and policy making to improve this sector. There is standard practice for data collection for those countries who are the member of the United Nations Statistical Commission (UNSC) and other countries. ",
    category: "AGRICULTURE",
  },
  {
    id: 1001,
    statement:
      "Most of the Countries collect information/ maintain inventory on the Chemical and Petrochemical sector for monitoring and policy making to improve this sector. There is standard practice for data collection for those countries who are the member of the United Nations Statistical Commission (UNSC) and other countries. ",
    category: "AGRICULTURE",
  },
  {
    id: 1001,
    statement:
      "Most of the Countries collect information/ maintain inventory on the Chemical and Petrochemical sector for monitoring and policy making to improve this sector. There is standard practice for data collection for those countries who are the member of the United Nations Statistical Commission (UNSC) and other countries. ",
    category: "AGRICULTURE",
  },
];

const Problem = () => {
  return (
    <div className="problem">
      <div className="problem_statements">
        <h1>PROBLEM STATEMENTS</h1>
        <div className="table-responsive " style={{ borderRadius: "8px" }}>
          <table className="table table-hover"  >
            <thead >
              <tr>
                <th scope="col">NO</th>
                <th scope="col" className="col-3">
                  PROBLEM ID
                </th>
                <th scope="col">STATEMENT</th>
                <th scope="col" className="col-2">
                  CATEGORY
                </th>
              </tr>
            </thead>
            <tbody>
              {problemStatements.map((problem, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{problem.id}</td>
                  <td className="statement">{problem.statement}</td>
                  <td>{problem.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem;

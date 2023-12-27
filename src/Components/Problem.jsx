import React from "react";
import "../Styling/Problem.css";
const Problem = () => {
  return (
    <div className="problem">
      <div className="problem_statements">
        <h1>PROBLEM STATEMENTS</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">NO</th>
              <th scope="col" className="col-3">PROBLEM ID</th>
              <th scope="col">STATEMENT</th>
              <th scope="col" className="col-2">CATEGORY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>1001</td>
              <td className="statement">
                Most of the Countries collect information/ maintain inventory on
                the Chemical and Petrochemical sector for monitoring and policy
                making to improve this sector. There is standard practice for
                data collection for those countries who are the member of the
                United Nations Statistical Commission (UNSC) and other
                countries. D/o Chemicals and Petrochemicals, M/o Chemicals and
                Fertilizers are desirous to make a Web Based Application/ Portal
                to develop an Integrated Data Management system (IDMS) for the
                Chemical and Petrochemicals Sector.
              </td>
              <td>AGRICULTURE</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>1001</td>
              <td className="statement">
                Most of the Countries collect information/ maintain inventory on
                the Chemical and Petrochemical sector for monitoring and policy
                making to improve this sector. There is standard practice for
                data collection for those countries who are the member of the
                United Nations Statistical Commission (UNSC) and other
                countries. D/o Chemicals and Petrochemicals, M/o Chemicals and
                Fertilizers are desirous to make a Web Based Application/ Portal
                to develop an Integrated Data Management system (IDMS) for the
                Chemical and Petrochemicals Sector.
              </td>
              <td>AGRICULTURE</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>1001</td>
              <td className="statement">
                Most of the Countries collect information/ maintain inventory on
                the Chemical and Petrochemical sector for monitoring and policy
                making to improve this sector. There is standard practice for
                data collection for those countries who are the member of the
                United Nations Statistical Commission (UNSC) and other
                countries. D/o Chemicals and Petrochemicals, M/o Chemicals and
                Fertilizers are desirous to make a Web Based Application/ Portal
                to develop an Integrated Data Management system (IDMS) for the
                Chemical and Petrochemicals Sector.
              </td>
              <td>AGRICULTURE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problem;

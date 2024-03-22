import React from 'react';
import './Styles.css';

export default function ResumeIndex() {
  return (
    <div className="whole">
      <h4>
          Johann Alecksandrei G. Factora <br />
          Good Student <br />
          CPE-2A <br />
          Web Dev <br />
          Resume
        </h4>
      <img src="images.jpg" alt="Profile" className="profile-image" />
      <HeadBar />
      <div className="body">
        <BodyBar />
        <AboutPage />
      </div>
      <div className="body">
        <Achievements />
      </div>
      <div className="header">
      </div>
    </div>
  );
}

function HeadBar() {
  return (
    <div className="header">
      <table className="header-table">
        <tbody>
          <tr>
            <th>CONTACT</th>
          </tr>
          <tr>
            <td>
              San Fernando, Pampanga <br />
              63+ 949 688 2678 <br />
              jagfactora.stunde@ua.edu.ph
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function BodyBar() {
  return (
    <table className="body-table">
      <tbody>
        <tr>
          <th>INTEREST</th>
        </tr>
        <tr>
          <td>
            Gaming <br />
            Reading <br />
            Computer Engineering<br />
            Mathematics<br />
            Calculus<br />
            Clothings / Foods
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function AboutPage() {
  return (
    <table className="body-table">
      <tbody>
        <tr>
          <th>Main Objective</th>
        </tr>
        <tr>
          <td>
            To enhance my skills and experience in Web Development and to contribute effectively to the team, while continuously improving my skills
          </td>
        </tr>
        <tr>
          <th>Work Experience</th>
        </tr>
        <tr>
          <td>
            Manager <br />
            Executive Chief Officer <br />
            Computer Engineering <br />
            Level 99999
          </td>
        </tr>
        <tr>
          <th>Achievements</th>
        </tr>
        <tr>
          <td>
            Highschool Graduate <br />
            Senior Highschool Graduate
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function Achievements() {
  return (
    <table className="body-table">
      <tbody>
        <tr>
          <th>Academic Background</th>
        </tr>
        <tr>
        <th>ENTER YOUR DEGREE <br />
            UNIVERSITY NAME|PASSING YEAR
            </th>
          <td>
            -Computer Engineering <br />
            -University of the Assumption|2023-2026
          </td>
        </tr>
      </tbody>
    </table>
  );
}

import { React, useState } from "react";
import "./Home.css"

function Home() {

  return (
    <>
    <div className="input-fields">

    </div>
    <div className="resume">
      <h1 className="name">Richard Williams</h1>
      <div className="contacts">
        <div className="contact">3365 Margaret Street, Houstan, TX 47587</div>
        <div className="contact">(770) 625-9669</div>
        <div className="contact">RichardWilliams@gmail.com</div>
      </div>

      <div className="about">
        <p>Financial Advisor with 7+ years of experience delivering financial/investment advisory services to high value clients</p>
        <p>
          Proven success in managing multi-million dollar portfolios, driving profitability, and increasing ROI through skillful strategic planning, consulting and financial advisory services
        </p>
      </div>

      <div className="professional-exp">
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <div className="exp">
          <div className="title">
            <div className="title1">WELLS FARGO ADVISORS</div>
            <div className="title1">Houstan, TX</div>
          </div>
          <div className="title">
            <div className="title2">Senior Financial Advisor</div>
            <div className="title2">August 2020-Present</div>
          </div>
          <div className="exp-content">
            <ul>
              <li>Content1</li>
              <li>Content2</li>
              <li>Content3</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="education">
        <h3>EDUCATION</h3>
        <div className="edu">
          <div className="title">
            <div className="title1">LOUIIANA STATE UNIVERSITY</div>
            <div className="title1">Baton Rouge, LA</div>
          </div>
          <div className="title">
            <div className="title2">Bachelor of Science in BA</div>
            <div className="title2">May 2014</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;

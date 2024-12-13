import { React, useState } from "react";
import "./Home.css";

function Home() {
  const [name, setName] = useState("Richard Williams");

  const [contacts, setContacts] = useState([
    "3365 Margaret street, Houstan, TX 47587",
    "(770) 625-9669",
    "RichardWilliams@gmail.com",
  ]);

  const [contact, setContact] = useState("");

  return (
    <div className="home">
      <div className="input-fields">
        <div className="personal-details">
          <h3>Personal details</h3>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Richard Williams"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="input-contacts">
          <h3>Contact details</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setContacts([...contacts, contact]);
              setContact("");
            }}
          >
            <label htmlFor="contact">Contact: </label>
            <input
              type="text"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
          {contacts.map((contact, index) => {
            return (
              <div key={crypto.randomUUID()}>
                <div>{contact}</div>
                <button
                  onClick={() => {
                    setContacts(
                      contacts.filter((_, i) => {return i !== index})
                    );
                  }}
                >
                  remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="resume">
        <h1 className="name">{name}</h1>
        <div className="contacts">
          {contacts.map((contact) => {
            return (
              <div className="contact" key={crypto.randomUUID()}>
                {contact}
              </div>
            );
          })}
        </div>

        <div className="about">
          <p>
            Financial Advisor with 7+ years of experience delivering
            financial/investment advisory services to high value clients
          </p>
          <p>
            Proven success in managing multi-million dollar portfolios, driving
            profitability, and increasing ROI through skillful strategic
            planning, consulting and financial advisory services
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
    </div>
  );
}

export default Home;

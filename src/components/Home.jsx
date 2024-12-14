import { React, useState } from "react";
import "./Home.css";

function InputForm1({ heading, inputArray, setInputArray, input, setInput }) {
  return (
    <>
      <h3>{heading} details</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newInputArray = [...inputArray, input];
          setInputArray(newInputArray);
          setInput("");
        }}
      >
        <label htmlFor={heading}>{heading}: </label>
        <input
          type="text"
          id={heading}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />
        <button type="submit">+</button>
      </form>
      {inputArray.map((input, index) => {
        return (
          <div key={crypto.randomUUID()}>
            <div>{input}</div>
            <button
              onClick={() => {
                setInputArray(
                  inputArray.filter((_, i) => {
                    return i !== index;
                  })
                );
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </>
  );
}

function Home() {
  const [name, setName] = useState("Richard Williams");

  const [contacts, setContacts] = useState([
    "3365 Margaret street, Houstan, TX 47587",
    "(770) 625-9669",
    "RichardWilliams@gmail.com",
  ]);

  const [contact, setContact] = useState("");

  const [abouts, setAbouts] = useState([
    "Financial Advisor with 7+ years of experience delivering financial/investment advisory services to high value clients",
    "Proven success in managing multi-million dollar portfolios, driving profitability, and increasing ROI through skillful strategic planning, consulting and financial advisory services",
  ]);

  const [about, setAbout] = useState("");

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
          <InputForm1
            heading="Contact"
            inputArray={contacts}
            setInputArray={setContacts}
            input={contact}
            setInput={setContact}
          />
        </div>
        <div className="input-about">
          <InputForm1
            heading="About"
            inputArray={abouts}
            setInputArray={setAbouts}
            input={about}
            setInput={setAbout}
          />
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
          {abouts.map((about) => {
            return (
              <div key={crypto.randomUUID()}>
                <p>{about}</p>
              </div>
            );
          })}
        </div>

        <div className="professional-exp">
          <h3>PROFESSIONAL EXPERIENCE</h3>
          <div className="exp">
            <div className="title">
              <div className="title1">WELLS FARGO ADVISORS</div>
              <div className="title1">Houston, TX</div>
            </div>
            <div className="title">
              <div className="title2">Senior Financial Advisor</div>
              <div className="title2">August 2020-Present</div>
            </div>
            <div className="exp-content">
              <ul>
                <li>
                  <p>
                    Deliver financial advice to clients, proposing strategies to
                    achieve short- and long-term objectives for investments,
                    insurance, business and estate planning with minimal risk
                  </p>
                </li>
                <li>
                  <p>
                    Develop, review, and optimize investment portfolios for 300+
                    high value clients with over $190M AUM (Assets Under
                    Management)
                  </p>
                </li>
                <li>
                  <p>
                    Ensure maximum client satisfaction by providing exceptional
                    and personalized service, enhancing client satisfaction
                    ratings from 88% to 99.9% in less than 6 months
                  </p>
                </li>
                <li>
                  <p>
                    Work closely with specialists from multiple branches,
                    managing investment portfolios for over 800 clients with
                    over $25M in assets under care
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="exp">
            <div className="title">
              <div className="title1">SUNTRUST INVESTMENT SERVICES, INC.</div>
              <div className="title1">New Orleans, LA</div>
            </div>
            <div className="title">
              <div className="title2">Financial Advisor</div>
              <div className="title2">July 2017–August 2020</div>
            </div>
            <div className="exp-content">
              <ul>
                <li>
                  <p>
                    Served as knowledgeable financial advisor to clients,
                    managing an over $20.75M investment portfolio of 90+
                    individual and corporate clients
                  </p>
                </li>
                <li>
                  <p>
                    Devised and applied a new training and accountability
                    program that increased productivity from #10 to #3 in the
                    region in less than 2 year period
                  </p>
                </li>
                <li>
                  <p>
                    Partnered with cross-functional teams in consulting with
                    clients to provide asset management risk strategy and
                    mitigation, which increased AUM by 50%
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="exp">
            <div className="title">
              <div className="title1">MAVERICK CAPITAL MANAGEMENT</div>
              <div className="title1">New Orleans, LA</div>
            </div>
            <div className="title">
              <div className="title2">Financial Advisor</div>
              <div className="title2">July 2014–August 2017</div>
            </div>
            <div className="exp-content">
              <ul>
                <li>
                  <p>
                    Served as the primary point of contact for over 15 clients
                  </p>
                </li>
                <li>
                  <p>
                    Managed the portfolios of several major clients with over
                    $8.5M in total assets
                  </p>
                </li>
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

// import { usePDF } from "react-to-pdf";

// const Home = () => {
//   const { toPDF, targetRef } = usePDF({
//     filename: "page.pdf",
//     html2canvasOptions: {
//       scale: 3,
//       width: 1080, // Custom width
//       height: 1920, // Custom height
//     },
//   });

//   return (
//     <div>
//       <button onClick={() => toPDF()}>Download PDF</button>
//       <div ref={targetRef} style={{ color: "blue", fontSize: "20px" }}>
//         Content to be generated to PDF
//       </div>
//     </div>
//   );
// };

// export default Home;

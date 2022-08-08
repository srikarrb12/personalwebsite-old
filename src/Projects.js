import { Row } from "react-bootstrap";
import ResumeEntry from "./ResumeEntry";

export default function Projects() {
  return (
    <>
      <div className="container">
        <Row>
          <div className="container" style={{ paddingBottom: "10%" }}>
            <Row>
              <ResumeEntry
                sectionTitle="Projects"
                dates="Sept 2021 - May 2022"
                company="Heart Disease Detector"
                position="Team Lead"
                description={
                  <>
                    <li>
                      Worked on Analysis Team and later promoted to Team Lead.
                    </li>
                    <li>
                      Identified different supervised and unsupervised models to
                      use.
                    </li>
                    <li>
                      Created model using training and testing datasets to
                      output percentage value for heart disease occurrence.
                    </li>
                    <li>
                      Outlined a plan of action for the team's goals for the
                      Spring semester.
                    </li>
                    <li>
                      Held weekly team meetings and guided and monitored team
                      members on their progress.
                    </li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="July 2021 - Aug 2021"
                company="Credit Card Website"
                position="Personal Project"
                description={
                  <>
                    <li>
                      Brainstormed and conceptualized solutions to difficulty of
                      managing several credit cards.
                    </li>
                    <li>
                      Designed user interface and created website wireframe
                      using Balsamiq.
                    </li>
                    <li>Built webpages using HTML, CSS, and JavaScript.</li>
                    <li>
                      Utilized MySQL, Java, JDBC, and SpringBoot to create
                      backend.
                    </li>
                  </>
                }
              />
            </Row>
          </div>
        </Row>
      </div>
    </>
  );
}

import ResumeEntry from "./ResumeEntry";
import { Row } from "react-bootstrap";
import Skills from "./Skills";

export default function Resume() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="container" style={{ paddingBottom: "10%" }}>
            <Row>
              <ResumeEntry
                sectionTitle="Work Experience"
                dates="May 2022 - Present"
                company="State Farm"
                position="Software Engineering Intern"
                description={
                  <>
                    <li>
                      Designed and built an internal application to streamline
                      process of updating client email templates.
                    </li>
                    <li>
                      Used ReactJS and various JS libraries to create the
                      front-end.
                    </li>
                    <li>Created infrastructure on AWS using Terraform.</li>
                    <li>
                      Connected with AWS Pinpoint, DynamoDB, API Gateway, and
                      Lambda (written in TypeScript) on the backend.
                    </li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="Jan 2022 - May 2022"
                company="Mini City"
                position="Software Engineering Intern"
                description={
                  <>
                    <li>
                      Researched and implemented ways to improve the company's
                      operational efficiency.
                    </li>
                    <li>
                      Used Java and incorporated third-party APIs to create a
                      program to automate Mini City's outbound mail.
                    </li>
                    <li>
                      Designed and built REST APIs to retrieve, process, and
                      send critical documents.
                    </li>
                    <li>Deployed application using Docker on AWS.</li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="Feb 2020 - Aug 2021"
                company="Kumon"
                position="Part Time Grader and Classroom Assistant"
                description={
                  <>
                    <li>
                      Graded student classwork and homework, processed data, and
                      organized students' files.
                    </li>
                    <li>
                      Communicated with students' parents and other staff.
                    </li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="Dec 2019 - Feb 2020"
                company="DappLogix Software Pvt Ltd"
                position="Student Intern"
                description={
                  <>
                    <li>
                      Explored artificial intelligence and neural networks and
                      their application in the real world.
                    </li>
                    <li>
                      Applied machine learning and supervised learning to create
                      a neural network to detect the number of fingers held up
                      on a human hand.
                    </li>
                  </>
                }
              />
            </Row>
            <hr></hr>
            <Row>
              <ResumeEntry
                sectionTitle="Education"
                dates="Aug 2021 - Present"
                company="Georgia Institute of Technology"
                position="BS in Computer Science"
                description={
                  <>
                    <li>GPA: 4.0 / 4.0</li>
                  </>
                }
              />
            </Row>
            <Row>
              <ResumeEntry
                dates="Aug 2017 - Jun 2021"
                company="Downingtown East High School"
                position="High School Diploma"
                description={
                  <>
                    <li>GPA: 4.0 / 4.0</li>
                  </>
                }
              />
            </Row>
            <hr></hr>
            <Row>
              <ResumeEntry
                sectionTitle="Volunteering"
                dates="Mar 2018 - Present"
                company="Philadelphia Children's Foundation"
                position="Co-Founder of Western Suburbs Chapter"
                description={
                  <>
                    <li>Reached out to companies and organizations to request old electronic devices.</li>
                    <li>Identified schools or organizations in need of computers and organized donations.</li>
                    <li>Refurbished and imaged computers with Linux Xubuntu.</li>
                  </>
                }
              />
            </Row>
            <hr></hr>
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}

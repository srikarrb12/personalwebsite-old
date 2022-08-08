import { Row } from "react-bootstrap";
import githubLogo from "./images/github1.png";
import gmailLogo from "./images/Gmail.png";
import linkedinLogo from "./images/linkedin.png";

export default function Contact() {
  return (
    <div>
      <Row>
        <div class="col-3"></div>
        <div class="col-6">
          <h6 style={{ paddingTop: "15%", textAlign: "center" }}>
            C o n t a c t
          </h6>
          <h1 style={{ textAlign: "center" }}>
            {" "}
            I'd love to connect with you!{" "}
          </h1>
        </div>
        <div class="col-3"></div>
      </Row>
      <Row>
                <div class="col-4">
                  <div style={{textAlign: "center", paddingTop: "20%"}}>
                    <a href="https://www.linkedin.com/in/srikar-bhumireddy-a935b4200/" target="_blank">
                      <img style={{width: "20%", borderRadius: "100%"}} src={linkedinLogo} alt="LinkedIn Logo"></img>
                      <h4 style={{textAlign: "center"}}>My LinkedIn</h4>
                    </a>
                  </div>
                </div>
                
                <div class="col-4">
                  <div style={{textAlign: "center", paddingTop: "20%"}}>
                    <a href="mailto:srikarrb12@gmail.com" target="_blank">
                      <img style={{width: "20%", borderRadius: "100%"}} src={gmailLogo} alt="Gmail Logo"></img>
                      <h4 style={{textAlign: "center"}}>Email me!</h4>
                    </a>
                  </div>
                  
                </div>

                <div class="col-4">
                  <div style={{textAlign: "center", paddingTop: "20%"}}>
                    <a href="https://github.com/srikarrb12" target="_blank">
                      <img style={{width: "20%", borderRadius: "100%"}} src={githubLogo} alt="GitHub Logo"></img>
                      <h4 style={{textAlign: "center"}}>Github</h4>
                    </a>
                  </div>
                  
                </div>
              </Row>
    </div>
  );
}

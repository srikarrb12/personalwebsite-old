import { Col, Row } from "react-bootstrap";
import "./MenuBar.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function MenuBar() {
  const navigate = useNavigate();
  const location = useLocation();
  let underlinedTab = getUnderlinedTab(location);

  return (
    <>
      <Row
        style={{
          borderBottomStyle: "ridge",
          padding: ".5%",
          backgroundColor: "white",
        }}
      >
        <Col style={{ textAlign: "left" }}>
          <h2 className="header-padding">About Srikar</h2>
        </Col>

        <Col className="d-flex justify-content-between">
          <Col className="header-tab-positioning">
            <div>
              
                {underlinedTab === "Home" ? (
                  <a rel="noopener" href="/" onClick={() => navigate("/")}>
                    <h3><u>Home</u></h3>
                  </a>
                ) : (
                  <a
                    rel="noopener"
                    href="index.html"
                    onClick={() => navigate("/")}
                  >
                    <h5>Home</h5>
                  </a>
                )}
              
            </div>
          </Col>
          <Col className="header-tab-positioning">
            <div>
              
                {underlinedTab === "Resume" ? (
                  <a
                    rel="noopener"
                    href="/resume"
                    onClick={() => navigate("/resume")}
                  >
                    <h3><u>Resume</u></h3>
                  </a>
                ) : (
                  <a
                    rel="noopener"
                    href="/resume"
                    onClick={() => navigate("/resume")}
                  >
                    <h5>Resume</h5>
                  </a>
                )}
              
            </div>
          </Col>
          <Col className="header-tab-positioning">
            <div>
              
                {underlinedTab === "Projects" ? (
                  <a
                    rel="noopener"
                    href="/projects"
                    onClick={() => navigate("/projects")}
                  >
                    <h3><u>Projects</u></h3>
                  </a>
                ) : (
                  <a
                    rel="noopener"
                    href="/projects"
                    onClick={() => navigate("/projects")}
                  >
                    <h5>Projects</h5>
                  </a>
                )}
            </div>
          </Col>
          <Col className="header-tab-positioning">
            <div>
              
                {underlinedTab === "Contact" ? (
                  <a
                    rel="noopener"
                    href="/contact"
                    onClick={() => navigate("/contact")}
                  >
                    <h3><u>Contact</u></h3>
                  </a>
                ) : (
                  <a
                    rel="noopener"
                    href="/contact"
                    onClick={() => navigate("/contact")}
                  >
                    <h5>Contact</h5>
                  </a>
                )}
            </div>
          </Col>
        </Col>
      </Row>
    </>
  );
}

function getUnderlinedTab(location) {
  if (location.pathname === "/") {
    return "Home";
  } else if (location.pathname === "/resume") {
    return "Resume";
  } else if (location.pathname === "/projects") {
    return "Projects";
  } else if (location.pathname === "/contact") {
    return "Contact";
  }
}

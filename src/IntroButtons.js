import { useNavigate } from "react-router-dom";

export default function IntroButtons() {
  const navigate = useNavigate();

  return (
    <>
      <div className="row d-flex flex-row justify-content-between">
        <div className="col" style={{ textAlign: "left" }}>
          <button
            type="button"
            className="btn-circle btn-xl intro-button"
            onClick={() => navigate("/resume")}
          >
            Resume
          </button>
        </div>
        <div className="col" style={{ textAlign: "left" }}>
          <button
            type="button"
            className="btn-circle btn-xl intro-button"
            onClick={() => navigate("/projects")}
          >
            Projects
          </button>
        </div>
        <div className="col" style={{ textAlign: "left" }}>
          <button
            type="button"
            className="btn-circle btn-xl intro-button"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
}

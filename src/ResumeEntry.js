import { Col } from "react-bootstrap";

export default function ResumeEntry(props) {
  return (
    <>
      <div class="col-4" style={{ textAlign: "left" }}>
        <h4 className="font-weight-bold sub-experience-padding">{props.sectionTitle}</h4>
      </div>

      <div class="col-2">
        <h4> </h4>
        <p class="align-start-end-dates"> {props.dates} </p>
      </div>

      <div class="col-6" style={{ textAlign: "left" }}>
        <h4 style={{ paddingTop: "5%" }} class="font-weight-light">
          {props.company}
        </h4>
        <h4 class="font-weight-bold bold">{props.position}</h4>
        <ul>{props.description}</ul>
      </div>
    </>
  );
}

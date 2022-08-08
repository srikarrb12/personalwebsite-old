import { Row } from "react-bootstrap";

export default function SkillsEntry(props) {
  return (
    <>
      <Row style={{ paddingBottom: "1%" }}>
        <div className="col-6" style={{ textAlign: "left" }}>
          <h4 className="font-weight-bold sub-experience-padding">
            {props.sectionTitle}
          </h4>
        </div>

        <div className="col-2 align-self-end" style={{ textAlign: "left" }}>
          <Row>
            <h4>{props.skillOne}</h4>
          </Row>
        </div>

        <div className="col-2 align-self-end" style={{ textAlign: "left" }}>
          <Row>
            <h4>{props.skillTwo}</h4>
          </Row>
        </div>

        <div className="col-2 align-self-end" style={{ textAlign: "left" }}>
          <Row>
            <h4>{props.skillThree}</h4>
          </Row>
        </div>
      </Row>
    </>
  );
}

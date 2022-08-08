import { Col, Row } from "react-bootstrap";
import SkillsEntry from "./SkillsEntry";

export default function Skills(props) {
  return (
    <>
      <SkillsEntry skillOne="Java" skillTwo="Python" skillThree="JavaScript" sectionTitle="Skills" />
      <SkillsEntry skillOne="HTML" skillTwo="CSS" skillThree="Docker" />
      <SkillsEntry skillOne="MySQL" skillTwo="SQL" skillThree="AWS" />
      <SkillsEntry skillOne="REST APIs" skillTwo="DynamoDB" skillThree="ReactJS"/>
      <SkillsEntry skillOne="API Gateway" skillTwo="Lambda" skillThree="TypeScript"/>
      <SkillsEntry skillOne="Terraform" skillTwo="Pinpoint"/>
    </>
  );
}
